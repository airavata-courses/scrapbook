# for requirements to run the file check requirements.txt
from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import requests

from routes.auth import authenticate_user_api
from routes.album import album_api
from routes.image import image_api


# Defines the Flask app
app = Flask(__name__)
# Cross Origin Resource Sharing (CORS) is enabled for the app
CORS(app)

#contains the auth api services 
app.register_blueprint(authenticate_user_api)

#manupilating album information using the image service    
app.register_blueprint(album_api)

#download/uploads an image using Gdrive service
app.register_blueprint(image_api)



if __name__ == '__main__':
    app.run(host="localhost", port=8081, debug=True)
