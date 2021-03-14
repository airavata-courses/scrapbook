import requests
from dotenv import load_dotenv
import os
load_dotenv()

USER_SERVICE = os.environ.get('USER_SERVICE')
def getUser(userid):
    """
    Function to get user from database

    :param userid: id of the user
    :return: user object
    """
    response = requests.get(f'{USER_SERVICE}/users/{userid}')
    response.raise_for_status()
    return response.json()


def aggregateUser(response):
    aggregatedResponse = []
    for data in response.json():
        data['createdBy'] = getUser(data['createdBy'])
        data['modifiedBy'] = getUser(data['modifiedBy'])
        if 'collaborators' in data:
            data['collaborators'] = aggregateCollaborator(data)

        aggregatedResponse.append(data)
    return aggregatedResponse


def aggregateCollaborator(response):
    aggregatedResponse = []
    for data in response["collaborators"]:
        aggregatedResponse.append(getUser(data))

    return aggregatedResponse
