import requests
from flask import Blueprint, request, jsonify
from service_utils import auth_service as auth
from config import IMAGE_SERVICE_URL__DEV
from service_utils import user_service

album_api = Blueprint('album_api', __name__)


@album_api.route('/album', methods=["POST"])
@auth.check_user_session
def createAlbum():
    """
    Used to create an album

    @params - A POST request sent to the album service to create a new album
    @return - json of the created album with an http status code
    """
    try:
        userID = request.args.get('userid')
        response = requests.post(f'{IMAGE_SERVICE_URL__DEV}/album?userid={userID}', headers=request.headers,
                                 data=request.data)
        response.raise_for_status()
        return response.json(), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_api.route('/album/<googledriveid>', methods=["GET"])
@auth.check_user_session
def getAlbumByID(googledriveid):
    """
    retrieving all active albums from the database.

    @params - A GET request that fetches all active albums from the database
    @return - json formatted list of albums and http status code
    """
    try:
        response = requests.get(f'{IMAGE_SERVICE_URL__DEV}/album/{googledriveid}')
        response.raise_for_status()
        album = response.json()
        album['createdBy'] = user_service.getUser(album['createdBy'])
        album['modifiedBy'] = user_service.getUser(album['modifiedBy'])

        return jsonify(album), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_api.route('/album', methods=["GET"])
@auth.check_user_session
def getAlbumsOfUser():
    """
    Get all the albums of the user

    @params - A GET request that is sent to fetch all the albums that the user has access to
    @return - list of dictionaries with album details and http status code
    """
    try:
        userID = request.args.get('userid')
        response = requests.get(f'{IMAGE_SERVICE_URL__DEV}/album?userid={userID}', headers=request.headers,
                                data=request.data)
        response.raise_for_status()
        aggregatedResponse = user_service.aggregateUser(response)
        return jsonify(aggregatedResponse), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_api.route('/album/<googledriveid>/image', methods=["GET"])
@auth.check_user_session
def getImagesByAlbumID(googledriveid):
    """
    This API is responsible for retrieving all images for given user and album from the database.
    
    @params - A GET request that fetches all images from a specific album
    @return - json formatted list of images in the album and http status code
    """
    try:
        response = requests.get(f'{IMAGE_SERVICE_URL__DEV}/album/{googledriveid}/image')
        response.raise_for_status()

        aggregatedResponse = user_service.aggregateUser(response)
        return jsonify(aggregatedResponse), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_api.route('/album/all', methods=["GET"])
@auth.check_user_session
def getAllAlbums():
    """
    retrieving all active albums from the database.    
    
    @params - A GET request that fetches all active albums from the database
    @return - json formatted list of albums and http status code
    """
    try:
        response = requests.get(f'{IMAGE_SERVICE_URL__DEV}/album/all')
        response.raise_for_status()
        aggregatedResponse = user_service.aggregateUser(response)
        return aggregatedResponse, response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code
