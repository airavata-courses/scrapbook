import requests
from flask import jsonify, request
from config import AUTH_SERIVCE_URL__DEV, SESSION_SERVICE_URL__DEV
from functools import wraps
from flask import abort


def authenticateToken(token):
    """
    Querires the auth service to validate the JWT.

    @params - POST request that Google returns to Client sent to port 8080
    @return - True or False depending on what response the auth server returns
    """

    response = requests.get(f'{AUTH_SERIVCE_URL__DEV}/auth?token={token}')
    response.raise_for_status()
    return True


def check_user_session(req):
    """
    Writing a python decorator to resuse to check if the user is in session

    @params - Checks if the user is currently in session and updates the timeout value in the database
    @return - 200 or 401
    """

    @wraps(req)
    def __check_user_session(*args, **kwargs):

        try:
            # reset user session
            sessionId = request.headers['X-Session']
            response = requests.put(f'{SESSION_SERVICE_URL__DEV}/reset/{sessionId}')
            response.raise_for_status()

        except requests.exceptions.HTTPError as err:
            # replace this with return err.response.text, err.response.status_code when you are not debugging
            abort(401)

        return req(*args, **kwargs)

    return __check_user_session
