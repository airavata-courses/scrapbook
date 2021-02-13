#for requirements to run the file check requirements.txt
from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import requests
from utils import auth_service

#Defines the Flask app
app = Flask(__name__)
#Cross Origin Resource Sharing (CORS) is enabled for the app
CORS(app)

#decorator used to intercept and define route requests
@app.route('/login', methods=["POST"])
def retrive_user():
    '''
    Route from the login button to retriveing user info from the user service.
    
    @params - POST request that Google returns to Client sent to port 8080
    @return - need to populate depending on user case
    '''
    try:
        #is_valid is a True/False values which is returned by the auth_service function in utils.py
        is_valid = auth_service(request)
        
        if is_valid == True:
            #this requests the user service to provide the user data associtaed the with the email ID in the original request
            response = requests.post('http://localhost:3000/auth', data = {'email': request.form.get('email')})
            #To debug
            print(response, file=sys.stderr)
    except:
        print("401", file=sys.stderr)
    #need to populate returned statement based on the functionality
    return "", 401

if __name__ == '__main__':
    app.run(host="localhost", port=8080, debug=True)