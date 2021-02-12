from flask import Flask, request, jsonify
from flask_cors import CORS
import urllib
import sys
import requests

app = Flask(__name__)
CORS(app)

@app.route('/login', methods=["POST"])
def authenticate_jwt():
    #token = request.args.get('idToken', '')
    try:
        token = request.args.get('idToken')
        #print(token)
        content = requests.get('http://localhost:5000/auth?token='+ token)
        print(content, file=sys.stderr)
        #print(content)
        
    except:
        print("not an valid auth request", file=sys.stderr)

    return "cool"

if __name__ == '__main__':
    app.run(host="localhost", port=8080, debug=True)