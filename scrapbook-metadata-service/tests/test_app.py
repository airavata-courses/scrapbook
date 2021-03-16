import pytest
from app import app as flask_app
import json


# @pytest.fixture
# def app():
#     """Create application for the tests."""
#     flask_app.logger.setLevel(logging.CRITICAL)
#     ctx = flask_app.test_request_context()
#     ctx.push()

#     flask_app.config["TESTING"] = True
#     flask_app.testing = True
#     # flask_app.config["MONGO_URI"] = os.environ.get('MONGO_URI')
#     yield flask_app
#     ctx.pop()



# @pytest.fixture
# def client(app):
#     client = app.test_client()
#     yield client


# def test_app(client):
#     rv = client.get("/")
#     assert rv.data == b"Meta Data Service Started"

@pytest.fixture
def app():
    yield flask_app

@pytest.fixture
def client(app):
    return app.test_client()

def test_index(app, client):
    res = client.get('/')
    assert res.status_code == 200
    expected = 'Meta Data Extractor Service Started'
    assert expected == res.get_data(as_text=True)