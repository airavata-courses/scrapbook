from flask import Flask, request, jsonify
from google.oauth2 import id_token
from google.auth.transport import requests
from utils import deocdeJWT, starter
from flask_cors import CORS
import os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

app = Flask(__name__)
CORS(app)


@app.route('/auth', methods=["GET"])
def veifyToken():
    """
    Route to verify token form google.
    Decode the token to see the issuer, then verify it with te respective issuer.

    @params - token
    @return - 200 if valid token, 401 if invalid token
    """

    try:
        token = request.args.get('token')
        # iss = deocdeJWT(token)
        # print(iss)
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), os.environ.get("CLIENT_ID"))
        return jsonify(idinfo), 200
    except ValueError as e:
        print(e)
        return jsonify(e), 401


@app.route('/')
def start():
    return starter()

if __name__ == '__main__':
    app.run(debug=os.environ.get("DEBUG"), port=os.environ.get("PORT"), host=os.environ.get("HOST"))
