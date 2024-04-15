from flask import Blueprint, redirect, request
from ..connect import Connect
from flask_login import current_user, login_required

routes = Blueprint("routes", __name__)


@routes.route("/events", methods = ["GET", "POST", "UPDATE", "DELETE"])
def events():

    if current_user.is_authenticated is False:
        return [], 401


    id = current_user.get_id()


    if request.method == "POST":
        title = request.form["description"]
        category = request.form["category"]
        tag = request.form["tag"]
        billable = "billable" in request.form
        start = float(request.form["data-start"]) / 1000
        end = float(request.form["data-end"]) / 1000

        con = Connect()
        cur = con.cursor()

        cur.execute("""
            INSERT INTO timerentries
                (userid, name, is_billable, start_date, end_date, projectid, tagid) VALUES
                (%s, %s, %s, TO_TIMESTAMP(%s), TO_TIMESTAMP(%s), null, null)
          """, (id, title, billable, start, end))
        con.commit()
        con.close()

    if request.method in ["GET", "POST"]:

        columns = ["id", "title", "start", "end"]

        con = Connect()
        cur = con.cursor()
        cur.execute("SELECT id, name, EXTRACT(EPOCH FROM start_date), EXTRACT(EPOCH FROM end_date) FROM timerentries WHERE userid=%s", (id,))

        res = cur.fetchall()
        con.close()

        response = [
            { columns[i]: j[i]
                    for i in range(len(columns)) }
            for j in res ]

    if request.method == "DELETE":
        return "", 418

    return response


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
