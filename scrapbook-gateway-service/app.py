# for requirements to run the file check requirements.txt
from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import requests

from routes.auth import authenticate_user_api
from routes.session import logout_user_api
from routes.album import album_api
from routes.image import image_api


# Defines the Flask app
app = Flask(__name__)
# Cross Origin Resource Sharing (CORS) is enabled for the app
CORS(app)

#retries user info from the user service, and adds the use to a new session.
app.register_blueprint(authenticate_user_api)

#manuoppilating album information from datavbase    
app.register_blueprint(album_api)

#download/uploads an image
app.register_blueprint(image_api)



if __name__ == '__main__':
    app.run(host="localhost", port=8081, debug=True)
