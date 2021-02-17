import requests
from flask import request
from config import SESSION_SERVICE_URL__DEV
from functools import wraps
import sys

def checkUserSession():
    """
    Writing a python decorator to resuse to check if the user is in session

    @params - Checks if the user is currently in session and updates the timeout value in the database
    @return - 200 or 401
    """
    def _checkUserSession(req):
        @wraps(req)
        def __checkUserSession(*args, **kwargs):
            
            try:
                #reset user session
                sessionId = request.values.get('id')
                response = requests.put(f'{SESSION_SERVICE_URL__DEV}/reset/{sessionId}')
                response.raise_for_status()
                r = req(*args, **kwargs)

            except requests.exceptions.HTTPError as err:
                print(err.response.text, err.response.status_code , file = sys.stderr)
            
            return req(*args, **kwargs)
    
        return __checkUserSession
    return _checkUserSession


