from flask import Flask
import psycopg2
from .config import LoadConfig
from .connect import Connect

app = Flask(__name__)
allowed_methods = ["GET", "POST"]


@app.route("/api/events", methods = ["GET", "POST", "UPDATE", "DELETE"])
def events():
    con = Connect()
    if con is None:
        print(1)
        return "Can't find resource", 404
    # return str(con)
    cur = con.cursor()
    res = cur.execute("SELECT * FROM Users;").fetchall()
    return res


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


@app.route("/api", methods=allowed_methods)
def hello_world():
    return {"a": "Some other Data"}

