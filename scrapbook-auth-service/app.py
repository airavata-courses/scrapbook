from flask import Flask
from google.oauth2 import id_token
from google.auth.transport import requests
app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World!"

if __name__ == '__main__':
    app.run(debug=True)