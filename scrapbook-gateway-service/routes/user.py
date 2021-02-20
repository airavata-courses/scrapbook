import requests
from flask import Blueprint, request, jsonify
from service_utils import auth_service as auth
from config import G_DRIVE_SERVICE_URL__DEV
import sys
#
# user_api = Blueprint('user_api', __name__)
#
# @user_api.route('/image/upload/<GoogeDriveID>', methods=["POST"])