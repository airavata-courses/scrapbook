import requests
from flask import Blueprint, request, jsonify
from service_utils import auth_service as auth
from config import G_DRIVE_SERVICE_URL__DEV, IMAGE_SERVICE_URL__DEV
import sys

image_api = Blueprint('image_api', __name__)


@image_api.route('/image/upload/<GoogeDriveID>', methods=["POST"])
@auth.check_user_session
def uploadImage(GoogeDriveID):
    """
    This function uploads an image
    @params - A POST request sent to the googledrive service to upload an image
    @return - http status code
    """
    try:
        file = request.files['file']
        userID = request.form.get('userid')
        files = {'file': (file.filename, file.read())}
        response = requests.post(f'{G_DRIVE_SERVICE_URL__DEV}/image/upload/{GoogeDriveID}', data={"userid": userID},
                                 files=files)
        response.raise_for_status()
        return response.content, response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@image_api.route('/image/<GoogeDriveID>', methods=["GET"])
@auth.check_user_session
def downloadImage(GoogeDriveID):
    """
    This function downloads an image
    @params - A GET request sent to the googledrive service to download an image
    @return - the file sent over the network alone with a http status code
    """
    try:
        response = requests.get(f'{G_DRIVE_SERVICE_URL__DEV}/image/{GoogeDriveID}', headers=request.headers,
                                data=request.data)
        response.raise_for_status()
        return response.content, response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@image_api.route('/image/<GoogeDriveID>', methods=["PUT"])
@auth.check_user_session
def renameImage(GoogeDriveID):
    """
    This function renames an image
    @params - googledriveid as a path variable, name (new name) in the body and the userid as args 
    @return - upated information json of the image with a http status code
    """
    try:
        userID = request.json.get('userid')
        name = request.json['name']
        response = requests.put(f'{IMAGE_SERVICE_URL__DEV}/image/{GoogeDriveID}?userid={userID}',
                                headers=request.headers,
                                data=request.data)
        response.raise_for_status()
        return response.json(), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@image_api.route('/image/<GoogeDriveID>', methods=["DELETE"])
@auth.check_user_session
def deleteImage(GoogeDriveID):
    """
    This function deletes an image
    @params - googledriveid as a path variable, name (new name) in the body and the userid as args 
    @return - true/OK if deleted along with a http status code
    """
    try:
        userID = request.args.get('userid')
        response = requests.delete(f'{IMAGE_SERVICE_URL__DEV}/image/{GoogeDriveID}?userid={userID}',
                                   headers=request.headers,
                                   data=request.data)
        response.raise_for_status()
        return response.content, response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code
