import requests
from flask import jsonify
from config import AUTH_SERIVCE_URL__DEV


def authenticateToken(token):
    """
    Querires the auth service to validate the JWT.

    @params - POST request that Google returns to Client sent to port 8080
    @return - True or False depending on what response the auth server returns
    """

    response = requests.get(f'{AUTH_SERIVCE_URL__DEV}/auth?token={token}')
    response.raise_for_status()
    return True

