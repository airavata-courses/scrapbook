import pytest
import json
from mde_utils import starter

def test_start():
    res = starter()
    expected = 'Meta Data Extractor Service Started'
    assert expected == res