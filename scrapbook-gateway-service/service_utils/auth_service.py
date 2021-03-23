import requests
from flask import jsonify, request
from functools import wraps
from flask import abort
import os
from dotenv import load_dotenv
load_dotenv()
AUTH_SERVICE = os.environ.get('AUTH_SERVICE')
SESSION_SERVICE = os.environ.get('SESSION_SERVICE')



def authenticateToken(token):
    """
    Querires the auth service to validate the JWT.

    @params - POST request that Google returns to Client sent to port 8080
    @return - True or False depending on what response the auth server returns
    """

    response = requests.get(f'{AUTH_SERVICE}/auth?token={token}')
    print(response)
    response.raise_for_status()
    return True


def check_user_session(param):
    """
    Writing a python decorator to resuse to check if the user is in session

    @params - Checks if the user is currently in session and updates the timeout value in the database
    @return - 200 or 401
    """

    def actual_decor(req):
        @wraps(req)
        def __check_user_session(*args, **kwargs):

            try:
                # reset user session
                sessionId = request.headers['X-Session']
                response = requests.post(f'{SESSION_SERVICE}/reset/{sessionId}', data={'event': param})
                response.raise_for_status()

            except requests.exceptions.HTTPError as err:
                # replace this with return err.response.text, err.response.status_code when you are not debugging
                abort(401)

            return req(*args, **kwargs)

        return __check_user_session
    return actual_decor
