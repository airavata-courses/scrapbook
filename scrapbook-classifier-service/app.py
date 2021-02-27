from flask import Flask, request, jsonify
from utils import get_predictions
from flask_cors import CORS
import sys

app = Flask(__name__)
CORS(app)


@app.route('/image/classify', methods=["POST"])
def predictImage():
    """
    predict classes for image
    
    @params - image file (type="stream")
    @return - 200 if valid token, 401 if invalid token
    """

    try:
        file = request.files['file']
        detections = get_predictions(file)  
        print(detections, file=sys.stderr)
        return "OK", 200
    except ValueError as e:
        return jsonify(e), 401


if __name__ == '__main__':
    app.run(port=10001, debug=True)
