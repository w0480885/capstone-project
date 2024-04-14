from flask import Flask
import psycopg2
from .config import LoadConfig
from .connect import Connect

app = Flask(__name__)
allowed_methods = ["GET", "POST"]


@app.route("/api/events", methods = ["GET", "POST", "UPDATE", "DELETE"])
def events():
    con = Connect()
    # return con.__repr__()
    if con is None:
        return "Can't find resource", 404
    # return str(con)
    cur = con.cursor()
    res = cur.execute("SELECT * FROM Users;")

    if res is None:
        return f"Connection made but no results found! [ TYPE: '{type(res)}' & VALUE: '{res}' ]", 404

    return str(res.fetchone())


@app.route("/timer", methods=['GET'])
def get_events():
    return {
        "events": [{
            "id": 1,
            "title": "An event that is scheduled for today!!",
            "start": "2022-12-31T23:57:00",
            "end": "2023-01-01T02:57:00"
        }]
    }


@app.route("/api/auth/signup", methods=[""])
def signup():
    con = Connect()
    return 1


@app.route("/api", methods=allowed_methods)
def hello_world():
    return {"a": "Some other Data"}

