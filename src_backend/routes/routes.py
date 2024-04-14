from flask import Blueprint
from ..connect import Connect
from flask_login import current_user

routes = Blueprint("routes", __name__)


@routes.route("/events", methods = ["GET", "POST", "UPDATE", "DELETE"])
def events():
    con = Connect()
    # return con.__repr__()
    if con is None:
        return "Can't find resource", 404
    # return str(con)
    cur = con.cursor()
    cur.execute("SELECT * FROM Users;")

    res = cur.fetchall()

    con.close()

    if res is None:
        return f"Connection made but no results found! [ TYPE: '{type(cur)}' & VALUE: '{cur}' ]", 404

    return res


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
