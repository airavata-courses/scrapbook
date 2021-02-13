from flask import Blueprint, request
from service_utils import auth_service as auth

authenticate_user_api = Blueprint('authenticate_user_api', __name__)


@authenticate_user_api.route('/login', methods=["POST"])
def authenticateUser():
    """
    Route from the login button to retriveing user info from the user service.

    @params - POST request that Google returns to Client sent to port 8080
    @return - need to populate depending on user case
    """

    try:
        # is_valid is a True/False values which is returned by the auth_service function in service_utils.py
        user = request.json
        print(user)
        is_token_valid = auth.authenticateToken(user['token'])

        if is_token_valid:
            print("token valid")

        return 'ok'
    except Exception as err:
        print(err)
        return '', 401
