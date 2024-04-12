#!/usr/bin/env python3

from .. import connect
from .. import config

from .wrappers import test


@test(__name__)
def configuration():
    """
    Function for testing the config utility
    """

    config = config.LoadConfig()

    return 1


@test(__name__)
def connection():
    """
    Function for testing the connection utility
    """

    config = config.LoadConfig()
    connect.Connect(config)

    return 1

