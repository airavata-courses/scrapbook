import pytest
import logging
import os
import sys
sys.path.append(os.path.join(os.path.dirname(os.path.realpath(__file__)), os.pardir))

from app import app as flask_app
from app import mongo


@pytest.fixture
def app():
    yield flask_app




@pytest.fixture
def app():
    """Create application for the tests."""
    # _app = flask_app
    flask_app.logger.setLevel(logging.CRITICAL)
    ctx = flask_app.test_request_context()
    ctx.push()

    flask_app.config["TESTING"] = True
    flask_app.testing = True

    # This creates an in-memory sqlite db
    # See https://martin-thoma.com/sql-connection-strings/
    flask_app.config["MONGO_URI"] = os.environ.get('MONGO_URI')

    # with _app.app_context():
    #     mongo.create_all()
    #     author1 = Author(id=1, first_name="foo", last_name="bar")
    #     mongo.session.add(author1)
    #     mongo.session.commit()
    yield flask_app
    ctx.pop()



@pytest.fixture
def client(app):
    client = app.test_client()
    yield client


def test_app(client):
    rv = client.get("/")
    assert rv.data == b"Meta Data Service Started"