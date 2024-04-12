#!/usr/bin/env python3

from configparser import ConfigParser


def LoadConfig(filename: str = "database.ini", section: str = "postgresql") -> dict:
    """
    Loads the configuration in
    """

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
    print(load_config())
