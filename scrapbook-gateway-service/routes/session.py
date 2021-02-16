import requests
from flask import Blueprint, request, jsonify
from service_utils import session_service 
from config import SESSION_SERVICE_URL__DEV
import sys

logout_user_api = Blueprint('logout_user_api', __name__)


@logout_user_api.route('/logout', methods=["GET"])
@session_service.checkUserSession()
def removeUserSession():
    """
    Removes user data from the session

    @params - Delete request sent to the session service with session id as a parameter
    @return - http status code
    """
    try:
        userID = request.values['id']
        response = requests.delete(f'{SESSION_SERVICE_URL__DEV}/remove/{userID}')
        response.raise_for_status()
        print(response, file = sys.stderr)
        #delete rest call wont have a json response 
        return "Removed user from session", response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code