#!/usr/bin/env python3

import psycopg2
from .config import LoadConfig


def Connect(config: dict = None):
    """
    function for getting a conenction to the database
    returns an error if connection cannot be made
    """

    if config is None:
        config = LoadConfig()
    del config["secret"]

    try:
        with psycopg2.connect(**config) as con:
            return con
    except (psycopg2.DatabaseError, Exception) as e:
        print(e)
        return e
