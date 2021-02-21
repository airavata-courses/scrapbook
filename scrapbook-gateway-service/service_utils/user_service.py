import requests
from config import USER_SERVICE_URL__DEV


def getUser(userid):
    """
    Function to get user from database

    :param userid: id of the user
    :return: user object
    """
    response = requests.get(f'{USER_SERVICE_URL__DEV}/users/{userid}')
    response.raise_for_status()
    return response.json()


def aggregateUser(response):
    aggregatedResponse = []
    for data in response.json():
        data['createdBy'] = getUser(data['createdBy'])
        data['modifiedBy'] = getUser(data['modifiedBy'])
        aggregatedResponse.append(data)
    return aggregatedResponse

def aggregateCollaborator(response):
    aggregatedResponse = []
    for data in response["collaborators"]:
        aggregatedResponse.append( getUser(data))

    return aggregatedResponse