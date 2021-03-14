import requests
from flask import Blueprint, request, jsonify
from service_utils import auth_service as auth
import sys
import os
from dotenv import load_dotenv
load_dotenv()

MDE_SERVICE = os.environ.get("MDE_SERVICE")

mde_api = Blueprint('mde_api', __name__)

@mde_api.route('/metadata/fetch/all', methods=["GET"])
@auth.check_user_session
def autofill_data():
    try:
        albumID = request.args.get('albumid')
        response = requests.get(f'{MDE_SERVICE}/metadata/fetch/all?albumid={albumID}')
        response.raise_for_status()
        return response.json(), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code

@mde_api.route('/metadata/fetch', methods=["GET"])
@auth.check_user_session
def find_metadata():
    try:
        imageID = request.args.get('id')
        response = requests.get(f'{MDE_SERVICE}/metadata/fetch?id={imageID}')
        response.raise_for_status()
        return response.json(), response.status_code

    except requests.exceptions.HTTPError as err:
        return err.response.text, err.response.status_code