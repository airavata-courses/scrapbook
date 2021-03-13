from flask import Flask, request, jsonify
from config import MONGO_URI
from flask_cors import CORS
from flask_pymongo import PyMongo
from PIL import Image
import io
import base64
import sys
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
    print(msg)
    json_msg = json.loads(msg.value)
    imageStr = base64.b64decode(str(json_msg['image']))
    image = Image.open(io.BytesIO(imageStr))
    filename = json_msg['imageName']
    image_id = json_msg['imageId']
    albumID = json_msg['albumId']
    exif = {}
    try:
        if filename[-4:] != ".png":
            data_chunk = image._getexif()
            if data_chunk != None:
                for tag, value in data_chunk.items():
                    if tag in TAGS and TAGS[tag] in ("Make", "FocalLength", "ApertureValue", "ISOSpeedRatings", "GPSInfo"):
                        if TAGS[tag] == "Make":
                            try:
                                exif["Camera"] = str(value) + " " + str(data_chunk[272])
                            except:
                                pass
                        else:
                            exif[TAGS[tag]] = str(value)
        else:
            try:
                image.load()  # Needed only for .png EXIF data 
                exifData = image.info
                for key in exifData:
                    if '.' in key:
                        continue
                    if key in ("Make", "FocalLength", "ApertureValue", "ISOSpeedRatings", "GPSInfo"):
                        exif[str(key)] = str(exifData[key])
            except Exception as ex:
                print(ex)
        meta_data = {"id": image_id, "albumid": albumID }
        mongo.db.metadata.insert_one({**meta_data, **exif})
        
    except Exception as e:
        print(e)
    
   
    
@app.route('/metadata/fetch', methods=["GET"])
def retrieve_metadata():
    """
    Image service fetches the extracted meta data information from the image
    """

    try:
        image_id = request.args.get('id')
        tags = mongo.db.metadata.find_one_or_404({"id": image_id})
        del tags['_id']
        return jsonify(tags), 200
    except Exception as e:
        return "Not Found", 404


@app.route('/metadata/fetch/all', methods=["GET"])
def retrieve_autofill():
    """
    Image service fetches the extracted meta data information from the image
    """

    try:
        albumid = request.args.get('albumid')
        album_details = mongo.db.metadata.find({"albumid": albumid})
        iso = album_details.distinct("ISOSpeedRatings")
        aperture = album_details.distinct("ApertureValue")
        focal = album_details.distinct("FocalLength")
        camera = album_details.distinct("Camera")
        gps = album_details.distinct("GPSInfo")
        metadata = {"ISO":iso, "Aperture":aperture, "FocalLength":focal, "Camera": camera, "GPS": gps}
        return jsonify(metadata), 200
    except Exception as e:
        return "Not Found", 404

if __name__ == '__main__':
    bus.run()
    listen_kill_server()
    app.run(port = 12000, debug=True)
