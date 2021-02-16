import requests
from flask import request
from config import SESSION_SERVICE_URL__DEV
from functools import wraps
import sys

def checkUserSession():
    """
    Writing a python decorator to resuse to check if the user is in session

    @params - POST request that Google returns to Client sent to port 8080
    @return - True or False depending on what response the auth server returns
    """
    def _checkUserSession(req):
        @wraps(req)
        def __checkUserSession(*args, **kwargs):
            
            try:
                #print(request, file = sys.stderr)
                sessionId = request.values.get('id')
                response = requests.put(f'{SESSION_SERVICE_URL__DEV}/reset/{sessionId}')
                response.raise_for_status()
                r = req(*args, **kwargs)

            except requests.exceptions.HTTPError as err:
                print(err.response.text, err.response.status_code , file = sys.stderr)
            
            return req(*args, **kwargs)
    
        return __checkUserSession
    return _checkUserSession


