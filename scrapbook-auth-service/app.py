from flask import Flask, request, jsonify
from google.oauth2 import id_token
from google.auth.transport import requests
from config import CLIENT_ID
from utils import deocdeJWT
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/login', methods=["GET"])
def veifyToken():
    """
    Route to verify token form google.
    Decode the token to see the issuer, then verify it with te respective issuer.

    @params - token
    @return - 200 if valid token, 401 if invalid token
    """

    try:
        token = request.args.get('token')
        iss = deocdeJWT(token)
        if iss == 'accounts.google.com':
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)
            return jsonify(idinfo), 200
        else:
            return 'Invalid token ISS', 401
    except ValueError as e:
        return jsonify(e), 401


if __name__ == '__main__':
    app.run(debug=True)
