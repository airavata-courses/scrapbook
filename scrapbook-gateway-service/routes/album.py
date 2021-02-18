import requests
from flask import Blueprint, request, jsonify
from service_utils import session_service 
from config import IMAGE_SERVICE_URL__DEV
import json
import sys

album_create_api = Blueprint('album_create_api', __name__)


@album_create_api.route('/album', methods=["POST"])
@session_service.checkUserSession()
def createAlbum():
    """
    Used to create an album

    @params - A POST request sent to the album service to create a new album
    @return - http status code
    """
    try:
        #data = request.json
        userID = request.args.get('userid')
        albumName = request.form.get('name')
        response = requests.post(f'{IMAGE_SERVICE_URL__DEV}/album?userid={userID}', headers = request.headers, data = request.data)
        response.raise_for_status()
        return response.json(), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


album_list_api = Blueprint('album_list_api', __name__)

@album_list_api.route('/album', methods=["GET"])
@session_service.checkUserSession()
def getAlbums():
    """
    Get all the albums of the user

    @params - A GET request that is sent to fetch all the albums that the user has access to
    @return - list of dictionaries wit h album details
    """
    try:
        userID = request.args.get('userid')
        response = requests.get(f'{IMAGE_SERVICE_URL__DEV}/album?userid={userID}', headers = request.headers, data = request.data)
        response.raise_for_status()
        return response.content , response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code

album_retrieve_images_api = Blueprint('album_retrieve_images_api', __name__)

@album_retrieve_images_api.route('/album/<googledriveid>/image', methods=["GET"])
@session_service.checkUserSession()
def retreieveImagesByAlbumId(googledriveid):
    """
    This API is responsible for retrieving all images for given user and album from the database.
    
    @params - A DELETE request that sets all the albums of a specific user to inactive
    @return - http status code
    """
    try:
        userID = request.args.get('userid')
        response = requests.get(f'{IMAGE_SERVICE_URL__DEV}/album/{googledriveid}/image?userid={userID}')
        response.raise_for_status()
        return response.content, response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code

album_fetchall_album_api = Blueprint('album_fetchall_album_api', __name__)

@album_fetchall_album_api.route('/album/all', methods=["GET"])
@session_service.checkUserSession()
def retreieveAllAlbumsInDB():
    """
    retrieving all active albums from the database.    
    
    @params - A DELETE request that sets all the albums of a specific user to inactive
    @return - http status code
    """
    try:
        response = requests.get(f'{IMAGE_SERVICE_URL__DEV}/album/all')
        response.raise_for_status()
        return response.content, response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code

