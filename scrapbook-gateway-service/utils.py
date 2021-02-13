import sys
import requests

def auth_service(request):
    '''
    Querires the auth service to validate the JWT.
    
    @params - POST request that Google returns to Client sent to port 8080
    @return - True or False depending on what response the auth server returns
    '''
    try:
        #token with the key value "idToken" is read from the request
        token = request.form.get('idToken')
        #passed to the auth service as a GET request
        response = requests.get('http://localhost:5000/auth?token='+ token)
        #to debug
        print(response, file=sys.stderr)
        #need to find a better of checking equality but works for now
        return str(response) == "<Response [200]>"
    except err:
        print(err, file = sys.stderr)
    
    return False