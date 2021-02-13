import requests
from flask import jsonify
from config import AUTH_SERIVCE_URL


def authenticateToken(token):
    '''
    Querires the auth service to validate the JWT.

    @params - POST request that Google returns to Client sent to port 8080
    @return - True or False depending on what response the auth server returns
    '''
    try:
        # token with the key value "idToken" is read from the request
        # passed to the auth service as a GET request
        response = requests.get(f'{AUTH_SERIVCE_URL}/auth?token={token}')
        # to debug
        print(response)
        # need to find a better of checking equality but works for now
        return str(response) == "<Response [200]>"

    except Exception as err:
        print(err)
        return jsonify

