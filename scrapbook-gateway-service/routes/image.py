import requests
from flask import Blueprint, request, jsonify
from service_utils import session_service 
from config import IMAGE_SERVICE_URL__DEV

album_user_api = Blueprint('album_user_api', __name__)


@album_user_api.route('/albums/create', methods=["POST"])
@session_service.checkUserSession()
def createAlbum():
    """
    Used to create an album

    @params - A POST request sent to the album service to create a new album
    @return - http status code
    """
    try:
        data = request.json
        userID = data['userID']
        #make sure the name of the parameter matches for name of album
        albumName = data['name']
        '''
        maybe validate if they are non Null
        if userID and albumName:
            then put request
        '''
        response = requests.post(f'{IMAGE_SERVICE_URL__DEV}/albums/create', data = data)
        response.raise_for_status()
        return response.json(), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_user_api.route('/albums/create', methods=["POST"])
@session_service.checkUserSession()
def getAlbums():
    """
    Get all the albums of the user

    @params - A GET request that is sent to fetch all the albums that the user has access to
    @return - http status code
    """
    try:
        response = requests.post(f'{IMAGE_SERVICE_URL__DEV}/albums/user', data = request.json)
        response.raise_for_status()
        return response.json(), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code
