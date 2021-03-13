from flask import Flask, request, jsonify
from utils import get_predictions
from flask_cors import CORS
import sys
from config import MONGO_URI
from flask_pymongo import PyMongo
from PIL import Image
import io
import base64
import json
from threading import Event
import signal
from PIL.ExifTags import TAGS
from flask_kafka import FlaskKafka

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = MONGO_URI
mongo = PyMongo(app)

INTERRUPT_EVENT = Event()

bus = FlaskKafka(INTERRUPT_EVENT,
                 bootstrap_servers=",".join(["localhost:9092"]),
                 group_id="consumer-grp-id"
                 )


def listen_kill_server():
    signal.signal(signal.SIGTERM, bus.interrupted_process)
    signal.signal(signal.SIGINT, bus.interrupted_process)
    signal.signal(signal.SIGQUIT, bus.interrupted_process)
    signal.signal(signal.SIGHUP, bus.interrupted_process)


@bus.handle('image')
def extract_metadata(msg):
    try:
        json_msg = json.loads(msg.value)
        imageStr = base64.b64decode(str(json_msg['image']))
        image = Image.open(io.BytesIO(imageStr))
        filename = json_msg['imageName']
        image_id = json_msg['imageId']
        albumID = json_msg['albumId']
        detections = get_predictions(image) 
        class_tags = {"albumid":albumID, "imageid": image_id, "classLabels": detections}
        mongo.db.classtags.insert_one(class_tags)
    except Exception as e:
        print(e)
    

@app.route('/image/fetch/all', methods=["GET"])
def retrieve_autofill():
    """
    Image service fetches the extracted meta data information from the image
    """

    try:
        albumid = request.args.get('albumid')
        album_details = mongo.db.metadata.find({"albumid": albumid})
        labels = album_details.distinct("classLabels")
        metadata = {"classLabels":labels}
        return jsonify(metadata), 200
    except Exception as e:
        return "Not Found", 404




@app.route('/image/class/fetch', methods=["GET"])
def retrieve_classlabels():
    """
    This function fetches the extracted class labels information from the db
    
    @params - image id 
    @return - the class tags
    """

    try:
        image_id = request.args.get('id')
        tags = mongo.db.classtags.find_one_or_404({"id":image_id})
        #to preserve JSON serializability
        del tags['_id']
        return jsonify(tags), 200
    except Exception as e:
        return "Not Found", 404



if __name__ == '__main__':
    app.run(port=10001, debug=True)



