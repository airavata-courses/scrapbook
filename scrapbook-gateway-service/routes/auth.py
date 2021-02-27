import requests
from flask import Blueprint, request, jsonify
import sys
from service_utils import auth_service
from config import USER_SERVICE_URL__DEV, SESSION_SERVICE_URL__DEV

authenticate_user_api = Blueprint('authenticate_user_api', __name__)


@authenticate_user_api.route('/login', methods=["POST"])
def login():
    """
    Route from the login button to retrieving user info from the user service, and adds the use to a new session.

    @params - POST request that Google returns to Client sent to port 8080
    @return - need to populate depending on user case
    """

    try:
        user = request.json
        auth_service.authenticateToken(user['token'])
        response = requests.post(f'{USER_SERVICE_URL__DEV}/users/login', json=user)
        response.raise_for_status()
        print('user', response.text)
        # Adds user to session after authenticating
        session_response = requests.post(f'{SESSION_SERVICE_URL__DEV}/set',
                                        data={"userID": response.json()["_id"], "token": user['token']})
        print(session_response.json())
        session_response.raise_for_status()
        
        return response.json(), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code


@authenticate_user_api.route('/logout', methods=["DELETE"])
@auth_service.check_user_session
def logout():
    """
    Removes user data from the session

    @params - Delete request sent to the session service with session id as a parameter
    @return - OK if removed from the session db and http status code
    """
    try:
        userID = request.values['id']
        response = requests.delete(f'{SESSION_SERVICE_URL__DEV}/remove/{userID}')
        response.raise_for_status()
        return response.content, response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code
