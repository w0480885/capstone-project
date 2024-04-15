#!/usr/bin/env python3

from configparser import ConfigParser
import os


def LoadConfig(filename: str = "database.ini", section: str = "postgresql") -> dict:
    """
    Loads the configuration in
    """

    if "DB_CONFIG" in os.environ:
        try:
            return {
                key: value
                for (key, value) in
                [
                    row.split("=")
                        for row in
                        os.environ["DB_CONFIG"].split(" ")]
            }
        except Exception as e:
            raise Exception(f"Can't parse os.environ[\"DB_CONFIG\"]\n{e}")

    parser = ConfigParser()
    parser.read(filename)

    config = {}

    if parser.has_section(section):
        params = parser.items(section)
        for key, value in params:
            config[key] = value

    else:
        raise Exception(f"Can't find section '{section}'!")

    return config

if __name__ == "__main__":
    print(LoadConfig(filename="../database.ini"))
