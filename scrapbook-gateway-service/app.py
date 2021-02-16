# for requirements to run the file check requirements.txt
from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import requests

from routes.auth import authenticate_user_api
from routes.session import logout_user_api
<<<<<<< HEAD
from routes.album import album_user_api
=======
>>>>>>> 426bec911ad2b8992a4b0c56bc24886506741b68


# Defines the Flask app
app = Flask(__name__)
# Cross Origin Resource Sharing (CORS) is enabled for the app
CORS(app)

app.register_blueprint(authenticate_user_api)

app.register_blueprint(logout_user_api)
<<<<<<< HEAD

app.register_blueprint(album_user_api)

=======
>>>>>>> 426bec911ad2b8992a4b0c56bc24886506741b68

if __name__ == '__main__':
    app.run(host="localhost", port=8081, debug=True)
