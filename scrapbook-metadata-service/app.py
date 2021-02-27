from flask import Flask, request, jsonify
from config import MONGO_URI
from flask_cors import CORS
from flask_pymongo import PyMongo
import exifread
import sys

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = MONGO_URI
mongo = PyMongo(app)

@app.route('/metadata/queue', methods=["POST"])
def extract_metadata():
    """
    Image service adds the uploaded to the queue to extract meta data information from the image
    """

    try:
        file = request.files['file']
        image_id = request.form.get('id')
        tags = exifread.process_file(file) 
        #Converting all the values in tag to str (for json serializability)
        for tag in tags.keys():
            tags[tag] = str(tags[tag]) 
        meta_data = {"uniqueIdentifier": image_id, "tags": tags}
        mongo.db.metadata.insert_one(meta_data)
        return "Successfully added", 200
    except Exception as e:
        return "Unsuccessful", 500


@app.route('/metadata/fetch', methods=["GET"])
def retrieve_metadata():
    """
    Image service fetches the extracted meta data information from the image
    """

    try:
        image_id = request.args.get('id')
        tags = mongo.db.metadata.find_one_or_404({"uniqueIdentifier":image_id})
        return jsonify(tags), 200
    except Exception as e:
        return "Not Found", 404


if __name__ == '__main__':
    app.run(port = 12000, debug=True)
