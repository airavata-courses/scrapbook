import requests
from flask import Blueprint, request, jsonify
from service_utils import session_service 
from config import SESSION_SERVICE_URL__DEV

logout_user_api = Blueprint('logout_user_api', __name__)


<<<<<<< HEAD
@logout_user_api.route('/logout', methods=["GET"])
=======
@logout_user_api.route('/logout', methods=["POST"])
>>>>>>> 426bec911ad2b8992a4b0c56bc24886506741b68
@session_service.checkUserSession()
def removeUserSession():
    """
    Removes user data from the session

    @params - Delete request sent to the session service with session id as a parameter
    @return - http status code
    """
    try:
<<<<<<< HEAD
        userID = request.values['id']
        response = requests.delete(f'{SESSION_SERVICE_URL__DEV}/remove/{userID}')
=======
        sessionId = request.json['id']
        response = requests.put(f'{SESSION_SERVICE_URL__DEV}/remove/{sessionId}')
>>>>>>> 426bec911ad2b8992a4b0c56bc24886506741b68
        response.raise_for_status()
        return response.json(), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code