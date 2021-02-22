import requests
from flask import Blueprint, request, jsonify
from service_utils import auth_service as auth
from config import USER_SERVICE_URL__DEV
import sys

user_api = Blueprint('user_api', __name__)


@user_api.route('/users', methods=["GET"])
@auth.check_user_session
def getUserBySubstring():
    try:
        search = request.args.get('search')
        response = requests.get(f'{USER_SERVICE_URL__DEV}/users/search/{search}')
        response.raise_for_status()
        return response.content, response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code
