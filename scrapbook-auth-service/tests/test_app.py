import pytest
import logging
import os
import sys
sys.path.append(os.path.join(os.path.dirname(os.path.realpath(__file__)), os.pardir))

from app import app as flask_app


@pytest.fixture
def app():
    """Create application for the tests."""
    flask_app.logger.setLevel(logging.CRITICAL)
    ctx = flask_app.test_request_context()
    ctx.push()

    flask_app.config["TESTING"] = True
    flask_app.testing = True
    yield flask_app
    ctx.pop()



@pytest.fixture
def client(app):
    client = app.test_client()
    yield client


def test_app(client):
    rv = client.get("/")
    assert rv.data == b"Auth service started"