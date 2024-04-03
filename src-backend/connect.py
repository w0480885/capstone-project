#!/usr/bin/env python3

import psycopg2
from config import load_config


def connect(config: dict = None):
    """
    function for getting a conenction to the database
    returns an error if connection cannot be made
    """

    if config is None:
        config = load_config()

    try:
        with psycopg2.connect(**config) as con:
            return con
    except (psycopg2.DatabaseError, Exception) as e:
        print(e)
        return e