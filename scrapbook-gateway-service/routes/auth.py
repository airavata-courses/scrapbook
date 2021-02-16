import requests
from flask import Blueprint, request, jsonify
import sys
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
        #print(request, file = sys.stderr)
        auth.authenticateToken(user['token'])
        response = requests.post(f'{USER_SERVICE_URL__DEV}/users/login', json=user)
        response.raise_for_status()
        #Adds user to session after authenticating
<<<<<<< HEAD
        #print(request.args.get('email'), file = sys.stderr)
        #print(request.args.get('token'), file = sys.stderr)
        session_response = requests.post(f'{SESSION_SERVICE_URL__DEV}/set', data = {"userID": user['email'], "token": user['token']})
=======
        session_response = requests.post(f'{SESSION_SERVICE_URL__DEV}/set', data = {"userID": user['userID'], "token": user["token"]})
>>>>>>> 426bec911ad2b8992a4b0c56bc24886506741b68
        session_response.raise_for_status()
        return response.json(), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code
