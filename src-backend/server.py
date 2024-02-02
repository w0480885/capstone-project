#!/usr/bin/env python3

from flask import Flask

app = Flask(__name__)
allowed_methods = ["GET"]


@app.route("/api", methods=allowed_methods)
def hello_world():
    return {"a": "Some other Data"}