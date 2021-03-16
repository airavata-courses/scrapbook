from flask import Flask, request, jsonify
from utils import get_predictions
from flask_cors import CORS
import sys
from config import MONGO_URI
from flask_pymongo import PyMongo
from PIL import Image
import io
import json
from threading import Event
import signal
from flask_kafka import FlaskKafka
import os
from dotenv import load_dotenv
import requests

load_dotenv()


app = Flask(__name__)
CORS(app)

INTERRUPT_EVENT = Event()
app.config["MONGO_URI"] = os.environ.get('MONGO_URI')
mongo = PyMongo(app)

print(os.environ.get('KAFKA_URI'))

bus = FlaskKafka(INTERRUPT_EVENT,
                 bootstrap_servers=",".join([os.environ.get('KAFKA_URI')]),
                 group_id="classifier-grp-id"
                 )


def listen_kill_server():
    signal.signal(signal.SIGTERM, bus.interrupted_process)
    signal.signal(signal.SIGINT, bus.interrupted_process)
    signal.signal(signal.SIGQUIT, bus.interrupted_process)
    signal.signal(signal.SIGHUP, bus.interrupted_process)




@bus.handle(os.environ.get('KAFKA_TOPIC'))
def extract_metadata(msg):
    try:
        print(msg)
        json_msg = json.loads(msg.value)
        def fetch_image(image_id):
            with app.test_request_context():
                response = requests.get(f"{os.environ.get('G_DRIVE_SERVICE')}/image/{image_id}")
                response.raise_for_status()
                return response.content
        image_id = json_msg['imageId']
        
        image = Image.open(io.BytesIO(fetch_image(image_id)))
        filename = json_msg['imageName']
        albumID = json_msg['albumId']
        detections = get_predictions(image) 
        print(detections)
        class_tags = {"albumid":albumID, "imageid": image_id, "classLabels": detections}
        mongo.db.classtags.insert_one(class_tags)
    except Exception as e:
        print(e)

@app.route('/image/fetch/all', methods=["GET"])
def autofill_data():
    """
    Image service fetches the extracted meta data information from the image
    """

    try:
        albumid = request.args.get('albumid')
        album_details = mongo.db.classtags.find({"albumid": albumid})
        for album in album_details:
            print(album)
        labels = album_details.distinct("classLabels")
        print(labels)
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
        tags = mongo.db.classtags.find_one_or_404({"imageid":image_id})
        #to preserve JSON serializability
        del tags['_id']
        return jsonify(tags), 200
    except Exception as e:
        print(e)
        return "Not Found", 404


@app.route('/image/class/match', methods=["GET"])
def filter_classlabels():
    try:
        #image_list = request.json['imageIds']
        query = request.args.get('query')
        tags = mongo.db.classtags.find({"classLabels":query})
        image_list = []
        for image in tags:
            image_list.append(image['imageid'])
        #to preserve JSON serializability
        #del tags['_id']
        return {"imageIds":image_list}, 200
    except Exception as e:
        print(e)
        return "Not Found", 404

@app.route('/')
def started():
    return 'Classifier Service Started!'


if __name__ == '__main__':
    bus.run()
    listen_kill_server()
    app.run(port=10001, debug=True)



