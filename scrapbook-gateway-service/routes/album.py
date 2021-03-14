import requests
from flask import Blueprint, request, jsonify
from service_utils import auth_service as auth
from service_utils import user_service
import sys
import json
import os

IMAGE_SERVICE=os.environ.get('IMAGE_SERVICE')

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
        response = requests.post(f'{IMAGE_SERVICE}/album?userid={userID}', headers=request.headers,
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
        response = requests.get(f'{IMAGE_SERVICE}/album/{googledriveid}')
        response.raise_for_status()
        album = response.json()
        album['createdBy'] = user_service.getUser(album['createdBy'])
        album['modifiedBy'] = user_service.getUser(album['modifiedBy'])
        album['collaborators'] = user_service.aggregateCollaborator(album)

        return jsonify(album), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_api.route('/album', methods=["GET"])
@auth.check_user_session
def getAlbumsOfUser():
    """
    Get all the albums of the user

    @params - userid (arg)
    @return - list of dictionaries with album details and http status code
    """
    try:
        userID = request.args.get('userid')
        response = requests.get(f'{IMAGE_SERVICE}/album?userid={userID}', headers=request.headers,
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
    
    @params - googledriveid (path variable) 
    @return - json formatted list of images in the album and http status code
    """
    try:
        response = requests.get(f'{IMAGE_SERVICE}/album/{googledriveid}/image')
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
        response = requests.get(f'{IMAGE_SERVICE}/album/all')
        response.raise_for_status()
        aggregatedResponse = user_service.aggregateUser(response)
        return aggregatedResponse, response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_api.route('/album/collab/add', methods=["PUT"])
@auth.check_user_session
def addCollaborator():
    try:
        collabid = request.json['collabid']
        gid = request.json['googleDriveId']
        owner = request.json['owner']

        response = requests.put(f'{IMAGE_SERVICE}/album/{gid}/collaborator/{collabid}?userid={owner}')
        response.raise_for_status()
        aggregatedData = response.json()
        aggregatedData["collaborators"] = user_service.aggregateCollaborator(response.json())

        return aggregatedData, response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_api.route('/album/collab/remove', methods=["PUT"])
@auth.check_user_session
def removeCollaborator():
    try:
        collabid = request.json['collabid']
        gid = request.json['googleDriveId']
        owner = request.json['owner']

        response = requests.delete(f'{IMAGE_SERVICE}/album/{gid}/collaborator/{collabid}?userid={owner}')
        response.raise_for_status()
        aggregatedData = response.json()
        aggregatedData["collaborators"] = user_service.aggregateCollaborator(response.json())

        return aggregatedData, response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_api.route('/album/<googledriveid>', methods=["PUT"])
@auth.check_user_session
def updateAlbum(googledriveid):
    """
    responsible for updating album details into database

    @params - googledriveid (path variable) along with userid as args
    @return - a json response with the album object details
    """
    try:
        userID = request.json['userid']
        response = requests.put(f'{IMAGE_SERVICE}/album/{googledriveid}?userid={userID}',
                                headers=request.headers, data=request.data)
        response.raise_for_status()
        return response.json(), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_api.route('/album', methods=["DELETE"])
@auth.check_user_session
def deleteAllAlbumsForUser():
    """
    deleting all albums for given user from the database. It is soft. It sets all albums as inactive

    @params - userid (arg)
    @return - http status code
    """
    try:
        userID = request.args.get('userid')
        response = requests.delete(f'{IMAGE_SERVICE}/album?userid={userID}')
        response.raise_for_status()
        return response.content, response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_api.route('/album/<googledriveid>', methods=["GET"])
@auth.check_user_session
def retreieveAlbumByID(googledriveid):
    """
    retrieve albums from databse with the id = googledriveid

    @params - googledriveid of the album (path variable) 
    @return - a json response with the album object details
    """
    try:
        response = requests.get(f'{IMAGE_SERVICE}/album/{googledriveid}')
        response.raise_for_status()
        return response.json(), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_api.route('/album/search', methods=["POST"])
@auth.check_user_session
def searchAndFilterAlbum():
    try:
        userid = request.args.get('userid')
        headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
        response = requests.post(f'{IMAGE_SERVICE}/album/search?userid={userid}', data=request.data,
                                 headers=headers)
        response.raise_for_status()
        aggregatedResponse = user_service.aggregateUser(response)
        return jsonify(aggregatedResponse), response.status_code
    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_api.route('/album/<googledriveid>', methods=["DELETE"])
@auth.check_user_session
def deleteAlbumByID(googledriveid):
    """
    deleting all albums for given user from the database. It is soft. It sets all albums as inactive

    @params - googledriveid (path variable) along with userid as args
    @return - 0 if the album is successfully deleted
    """
    try:
        userID = request.args.get('userid')
        response = requests.delete(f'{IMAGE_SERVICE}/album/{googledriveid}?userid={userID}')
        print(response.json(), file=sys.stderr)
        response.raise_for_status()
        return response.content, response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_api.route('/album/shared', methods=["GET"])
@auth.check_user_session
def getSharedAlbumsOfUser():
    try:
        userID = request.args.get('userid')
        response = requests.get(f'{IMAGE_SERVICE}/album/shared?userid={userID}')
        response.raise_for_status()
        aggregatedResponse = user_service.aggregateUser(response)
        print(aggregatedResponse)
        return jsonify(aggregatedResponse), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@album_api.route('/album/image/search', methods=["POST"])
@auth.check_user_session
def searchAndFilterImage():
    try:
        userid = request.args.get('userid')
        googledriveid = request.args.get('googledriveid')
        headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
        response = requests.post(f'{IMAGE_SERVICE}/album/{googledriveid}/image/search?userid={userid}',
                                 data=request.data,
                                 headers=headers)
        response.raise_for_status()
        aggregatedResponse = user_service.aggregateUser(response)
        return jsonify(aggregatedResponse), response.status_code
    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code
