from flask import Flask, request
import psycopg2
from argon2 import PasswordHasher
from argon2.exceptions import VerificationError

from .config import LoadConfig
from .connect import Connect
from .wrappers import auth

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
    cur.execute("SELECT * FROM Users;")

    res = cur.fetchall()

    con.close()

    if res is None:
        return f"Connection made but no results found! [ TYPE: '{type(cur)}' & VALUE: '{cur}' ]", 404

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


@app.route("/api/auth/signup", methods=["GET", "POST"])
@auth(error_redirect="/auth/signup", success_redirect="/timer")
def signup():

    # Sets default values
    values = {
        "username": "some1and2-xc",
        "email": "test@test.test",
        "password": "password",
    }

    # Gets request data
    if request.method == "POST":
        username = request.form.get("username")
        email = request.form.get("email")
        password = request.form.get("password")

        values = {
            "username": username,
            "email": email,
            "password": password,
        }

    # Hashes Password
    ph = PasswordHasher()
    values["password"] = ph.hash(values["password"])

    # Makes a connection to DB
    con = Connect()
    cur = con.cursor()

    # Gets new ID
    cur.execute("SELECT MAX(id) FROM users")

    id = cur.fetchone()

    cur.execute("SELECT email FROM users WHERE email=%s", (values["email"],))
    if cur.fetchone() is not None:
        # return "Email already exists!", 404
        return {"valid": 0, "error": "Email already exists!", "redirect": "/auth/login"}

    if id is None:
        id = 1
    else:
        id = id[0] + 1

    # Adds the user
    cur.execute("INSERT INTO users (id, username, email, password) VALUES (%s, %s, %s, %s)", (id, *tuple(values.values())))
    cur.execute("SELECT * FROM users")

    res = cur.fetchall()

    con.commit()
    con.close()
    # return res
    return {"valid": 1}


@app.route("/api/auth/login", methods=["GET", "POST"])
@auth(error_redirect="/auth/login", success_redirect="/timer")
def login():

    email = "test@test.test"
    password = "password"

    if request.method == "POST":
        email = request.form.get("email")
        pasword = request.form.get("password")

    con = Connect()
    cur = con.cursor()

    cur.execute("SELECT password FROM users WHERE email=%s", (email,))

    res = cur.fetchone() 
    if res is None:
        return {"valid": 0, "error": "Email not found!", "redirect": "/auth/signup"}
    else:
        pw_hash = res[0]

    ph = PasswordHasher()

    try:
        if ph.verify(pw_hash, password):
            # return {"valid": 1}
            return {"valid": 1}
        else:
            return {"valid": 0, "error": "Validation Error, ph.verify returned false"}

    except VerificationError:
        # If the verification didn't work
        return {"valid": 0, "error": "Validation Error"}


@app.route("/api", methods=allowed_methods)
def hello_world():

    con = Connect()
    cur = con.cursor()

    cur.execute("SELECT * FROM users")

    return cur.fetchall()

    return {"a": "Some other Data"}

