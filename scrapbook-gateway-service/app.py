# for requirements to run the file check requirements.txt
from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import requests

from routes.auth import authenticate_user_api
from routes.album import album_api
from routes.image import image_api
from routes.user import user_api
from routes.mde import mde_api

import os
from os.path import join, dirname
from dotenv import load_dotenv

load_dotenv()

# Defines the Flask app
app = Flask(__name__)
# Cross Origin Resource Sharing (CORS) is enabled for the app
CORS(app)

# contains the auth api services
app.register_blueprint(authenticate_user_api)

# manupilating album information using the image service
app.register_blueprint(album_api)

# download/uploads an image using Gdrive service
app.register_blueprint(image_api)

app.register_blueprint(user_api)

app.register_blueprint(mde_api)

@app.route('/')
def check():
    return 'Gateway working!'

if __name__ == '__main__':
    print(os.environ.get("DEBUG"))
    print(os.environ.get("HOST"))
    app.run(host='0.0.0.0', port=8081, debug=True)
