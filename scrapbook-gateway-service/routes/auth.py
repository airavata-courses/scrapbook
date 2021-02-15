import requests
from flask import Blueprint, request, jsonify
from service_utils import auth_service as auth

from config import USER_SERVICE_URL__DEV, SESSION_SERVICE_URL__DEV 

authenticate_user_api = Blueprint('authenticate_user_api', __name__)


@authenticate_user_api.route('/login', methods=["POST"])
def login():
    """
    Route from the login button to retrieving user info from the user service, and adds the use to session.

    @params - POST request that Google returns to Client sent to port 8080
    @return - need to populate depending on user case
    """

    try:
        user = request.json
        auth.authenticateToken(user['token'])

        response = requests.post(f'{USER_SERVICE_URL__DEV}/users/login', json=user)
        response.raise_for_status()
        #Adds user to session after authenticating
        session_response = requests.post(f'{SESSION_SERVICE_URL__DEV}/set', data = {"userID": user['userID'], "token": user["token"]})
        session_response.raise_for_status()
        return response.json(), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code
