from flask import Blueprint, redirect, request
from ..connect import Connect
from flask_login import current_user, login_required

routes = Blueprint("routes", __name__)


@routes.route("/events", methods = ["GET", "POST", "UPDATE", "DELETE"])
@login_required
def events():

    id = current_user.get_id()

    if request.method == "GET":

        columns = ["id", "title", "start", "end"]

        con = Connect()
        cur = con.cursor()
        cur.execute("SELECT id, name, EXTRACT(EPOCH FROM start_date), EXTRACT(EPOCH FROM end_date) FROM timerentries WHERE userid=%s", (id,))

        res = cur.fetchall()
        con.close()

        return [
            { columns[i]: j[i]
                    for i in range(len(columns)) }
            for j in res
        ]

    elif request.method == "POST":
        return "", 418

    elif request.method == "DELETE":
        return "", 418


@routes.route("/timer", methods=["GET"])
def get_events():
    return {
        "events": [{
            "id": 1,
            "title": "An event that is scheduled for today!!",
            "start": "2022-12-31T23:57:00",
            "end": "2023-01-01T02:57:00"
        }]
    }


@routes.route("/", methods=["GET"])
def test():
    if current_user.is_authenticated:
        return str(current_user.username)
    else:
        return {"res": "User not logged in"}
