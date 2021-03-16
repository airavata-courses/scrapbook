import jwt
import os
CLIENT_SECRET = os.environ.get("CLIENT_SECRET")


def deocdeJWT(token):
    """
    Function to decode the token and return the issuer
    """
    try:
        print(token)
        decoded = jwt.decode(token, CLIENT_SECRET, algorithms=['RS256'], options={"verify_signature": False})
        print(decoded)
        return decoded['iss']
    except Exception as e:
        print(e)
        return e

def starter():
    return 'Auth Service Started'