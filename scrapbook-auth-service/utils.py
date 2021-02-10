import jwt
from config import CLIENT_SECRET

def deocdeJWT(token):
    try:
        decoded = jwt.decode(token, CLIENT_SECRET, algorithms=['RS256'], options={"verify_signature": False})
        return decoded['iss']
    except Exception as e:
        print(e)
        return e
