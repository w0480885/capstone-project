#!/usr/bin/env python3

from .. import connect
from .. import config

from .wrappers import test


@test(__name__)
def configuration():
    """
    Function for testing the config utility
    """

    configuration = config.LoadConfig(filename="database.ini")

    return 1


@test(__name__)
def connection():
    """
    Function for testing the connection utility
    """

    configuration = config.LoadConfig(filename="database.ini")
    connected_config = connect.Connect(config)

    return 1
