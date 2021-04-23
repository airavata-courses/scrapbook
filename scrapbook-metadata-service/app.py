from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
from flask_pymongo import PyMongo
from PIL import Image
from PIL.ExifTags import GPSTAGS
import io
import base64
import sys
import json
from threading import Event
import signal
from PIL.ExifTags import TAGS
from flask_kafka import FlaskKafka
from kafka import KafkaConsumer
from mde_utils import starter

import os
#from dotenv import load_dotenv
#load_dotenv()

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = os.environ.get('MONGO_URI')
mongo = PyMongo(app)

INTERRUPT_EVENT = Event()

print(os.environ.get('KAFKA_URI'))

response = None
# global bus

bus = FlaskKafka(INTERRUPT_EVENT,
                bootstrap_servers=",".join([os.environ.get('KAFKA_URI')]),
                group_id="consumer-grp-id"
                )

# while response is None:
#     try:
#         print('waiting for brokers')
        
#         response = bus
#     except:
#         pass


def listen_kill_server():
    signal.signal(signal.SIGTERM, bus.interrupted_process)
    signal.signal(signal.SIGINT, bus.interrupted_process)
    signal.signal(signal.SIGQUIT, bus.interrupted_process)
    signal.signal(signal.SIGHUP, bus.interrupted_process)


def get_decimal_from_dms(dms, ref):

    degrees = dms[0][0] / dms[0][1]
    minutes = dms[1][0] / dms[1][1] / 60.0
    seconds = dms[2][0] / dms[2][1] / 3600.0

    if ref in ['S', 'W']:
        degrees = -degrees
        minutes = -minutes
        seconds = -seconds

    return round(degrees + minutes + seconds, 5)

def get_coordinates(geotags):
    lat = get_decimal_from_dms(geotags['GPSLatitude'], geotags['GPSLatitudeRef'])

    lon = get_decimal_from_dms(geotags['GPSLongitude'], geotags['GPSLongitudeRef'])

    return (lat,lon)


def get_geotagging(exif):
    geotagging = {}
    for (idx, tag) in TAGS.items():
        if tag == 'GPSInfo':
            for (key, val) in GPSTAGS.items():
                if key in exif[idx]:
                    geotagging[val] = exif[idx][key]

    return geotagging


@bus.handle('image')
def extract_metadata(msg):
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
    exif = {"FocalLength": "", "ApertureValue":"", "ISOSpeedRatings":"", "GPSInfo":"{}", "Camera":""}
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
                        elif TAGS[tag] == "GPSInfo" and value != "{}":
                            try:
                                geotags = get_geotagging(data_chunk)
                                geo = get_coordinates(geotags)
                                print(geo)
                                exif["GPSInfo"] = str(geo)
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
        logging.error(str(exif))
        meta_data = {"id": image_id, "albumid": albumID }
        logging.error(str({**meta_data, **exif}))
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


def clean_autofill(metadata):
    '''
    Remove placeholder values
    '''
    metadata['ISO'].remove("")
    metadata['Aperture'].remove("")
    metadata['FocalLength'].remove("")
    metadata['Camera'].remove("")
    metadata['GPS'].remove("{}")


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
        clean_autofill(metadata)
        return jsonify(metadata), 200
    except Exception as e:
        return "Not Found", 404

@app.route('/metadata/match', methods=["POST"])
def retrieve_image_list():
    """
    Image service fetches the extracted meta data information from the image
    """

    try:
        image_list = request.json['imageIds']
        tags = {'iso': 'ISOSpeedRatings', 'camera': 'Camera', 'focalLength': 'FocalLength', 'gps':'GPSInfo', 'aperture':'ApertureValue'}
        search = {}
        for tag in tags.keys():
            if request.json[tag] != None:
                search[tag] = tags[tag]
        match_list = []
        for image_id in image_list:
            image_details = mongo.db.metadata.find_one_or_404({"id": image_id})
            counter = 0
            for tag in search.keys():
                if image_details[search[tag]] == request.json[tag]:
                    counter += 1
            if counter == len(search):
                match_list.append(image_id)

        print(match_list)
        return {"imageIds":match_list}, 200
    
    except Exception as e:

        print(e)
        return "Not Found", 404

@app.route('/')
def started():
    return starter()
    
if __name__ == '__main__':
    bus.run()
    listen_kill_server()
    app.run(port = os.environ.get('PORT'), debug=True, host="0.0.0.0") #os.environ.get('DEBUG')
