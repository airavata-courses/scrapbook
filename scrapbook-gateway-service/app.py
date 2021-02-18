# for requirements to run the file check requirements.txt
from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import requests

from routes.auth import authenticate_user_api
from routes.session import logout_user_api
from routes.album import album_create_api, album_list_api, album_fetchall_album_api, album_retrieve_images_api
from routes.image import image_upload_api, image_download_api


# Defines the Flask app
app = Flask(__name__)
# Cross Origin Resource Sharing (CORS) is enabled for the app
CORS(app)

#retries user info from the user service, and adds the use to a new session.
app.register_blueprint(authenticate_user_api)

#removes user from session
app.register_blueprint(logout_user_api)

#Used to create an album
app.register_blueprint(album_create_api)

#Get all the albums of the user
app.register_blueprint(album_list_api)

#responsible for updating album detailsinto database
#app.register_blueprint(album_update_api)

#deleting all albums for given user from the database. It is soft. It sets all albums as inactive
#app.register_blueprint(album_delete_all_api)

#deleting all albums for given user from the database. It is soft. It sets all albums as inactive
#app.register_blueprint(album_delete_album_api)

#retrieving all active albums from the database.    
app.register_blueprint(album_fetchall_album_api)

#retrieve albums from databse with the id = googledriveid
#app.register_blueprint(album_retrieve_album_api)

#retrieving all images for given user and album from the database.
app.register_blueprint(album_retrieve_images_api)

#uploads an image
app.register_blueprint(image_upload_api)

#downloads an image
app.register_blueprint(image_download_api)

if __name__ == '__main__':
    app.run(host="localhost", port=8081, debug=True)
