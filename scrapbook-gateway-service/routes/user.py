import requests
from flask import Blueprint, request, jsonify
from service_utils import auth_service as auth
import sys
import os
from dotenv import load_dotenv
load_dotenv()

USER_SERVICE = os.environ.get("USER_SERVICE")
SESSION_SERVICE = os.environ.get("SESSION_SERVICE")

user_api = Blueprint('user_api', __name__)


@user_api.route('/users', methods=["GET"])
@auth.check_user_session('Search Users')
def getUserBySubstring():
    try:
        search = request.args.get('search')
        response = requests.get(f'{USER_SERVICE}/users/search/{search}')
        response.raise_for_status()
        return response.content, response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code

@user_api.route('/history', methods=["GET"])
@auth.check_user_session('Get History')
def getUserHistory():
    try:
        user = request.args.get('userid')
        print('history', user)
        response = requests.get(f'{SESSION_SERVICE}/all/{user}')
        return response.content, response.status_code
    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code