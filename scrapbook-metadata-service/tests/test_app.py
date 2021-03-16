import pytest
from app import app as flask_app
import json

@pytest.fixture
def app():
    yield flask_app

@pytest.fixture
def client(app):
    return app.test_client()

def test_start(app, client):
    res = client.get('/')
    assert res.status_code == 200
    expected = 'Meta Data Extractor Service Started'
    assert expected == res.get_data(as_text=True)