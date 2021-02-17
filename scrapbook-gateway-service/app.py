# for requirements to run the file check requirements.txt
from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import requests

from routes.auth import authenticate_user_api
from routes.session import logout_user_api
from routes.album import album_create_api, album_list_api, album_fetchall_album_api, album_retrieve_album_api, album_delete_album_api, album_retrieve_images_api, album_delete_all_api, album_update_api


# Defines the Flask app
app = Flask(__name__)
# Cross Origin Resource Sharing (CORS) is enabled for the app
CORS(app)

app.register_blueprint(authenticate_user_api)

app.register_blueprint(logout_user_api)

app.register_blueprint(album_create_api)

app.register_blueprint(album_list_api)

app.resgister_blueprint(album_update_api)

app.register_blueprint(album_delete_all_api)

app.register_blueprint(album_delete_album_api)

app.register_blueprint(album_fetchall_album_api)

app.register_blueprint(album_retrieve_album_api)

app.register_blueprint(album_retrieve_images_api)


if __name__ == '__main__':
    app.run(host="localhost", port=8081, debug=True)
