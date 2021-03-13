from flask import Flask, request, jsonify
from utils import get_predictions
from flask_cors import CORS
import sys
from config import MONGO_URI
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)


app.config["MONGO_URI"] = MONGO_URI
mongo = PyMongo(app)

@app.route('/image/classify', methods=["POST"])
def predict_image():
    """
    predict classes for image
    
    @params - image file (type="stream")
    @return - 200 if valid token, 401 if invalid token
    """

    try:
        file = request.files['file']
        image_id = request.form.get('id')
        detections = get_predictions(file) 
        class_tags = {"id": image_id, "classLabels": detections}
        mongo.db.classtags.insert_one(class_tags)
        return "Successfully added", 200
    except Exception as e:
        return "Unsuccessful", 500


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



