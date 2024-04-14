from flask import request, Blueprint
from flask_login import login_user, login_required, logout_user

from argon2 import PasswordHasher
from argon2.exceptions import VerificationError

from ..connect import Connect
from ..wrappers import auth_res_manager
from ..models import User, db

auth = Blueprint("auth", __name__)


@auth.route("/signup", methods=["GET", "POST"])
@auth_res_manager(error_redirect="/auth/signup", success_redirect="/v0")
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
        if request.form.get("remember"):
            remember = True
        else:
            remember = False

    # Hashes Password
    ph = PasswordHasher()
    password = ph.hash(password)

    # Makes a connection to DB
    con = Connect()
    cur = con.cursor()

    # Gets new ID
    cur.execute("SELECT MAX(id) FROM users")

    id = cur.fetchone()

    cur.execute("SELECT email FROM users WHERE email=%s", (email))
    if cur.fetchone() is not None:
        # return "Email already exists!", 404
        return {"valid": 0, "error": "Email already exists!", "redirect": "/auth/login"}

    if id is None:
        id = 1
    else:
        id = id[0] + 1

    # Adds the user
    cur.execute("INSERT INTO users (id, username, email, password) VALUES (%s, %s, %s, %s)", (id, username, email, password))

    con.commit()
    con.close()

    # Loads new user in
    user = User(id=id, username=username, email=email)
    login_user(new_user, remember=remember)

    return {"valid": 1}


@auth.route("/login", methods=["GET", "POST"])
@auth_res_manager(error_redirect="/auth/login", success_redirect="/v0")
def login():

    email = "test@test.test"
    password = "password"
    remember = True

    if request.method == "POST":
        email = request.form.get("email")
        pasword = request.form.get("password")
        if request.form.get("remember"):
            remember = True
        else:
            remember = False

    con = Connect()
    cur = con.cursor()

    cur.execute("SELECT id, username, password FROM users WHERE email=%s", (email,))

    res = cur.fetchone()
    if res is None:
        return {"valid": 0, "error": "Email not found!", "redirect": "/auth/signup"}
    else:
        (id, username, pw_hash) = res

    ph = PasswordHasher()

    try:
        if ph.verify(pw_hash, password):
            user = User(id=id, username=username, email=email)
            login_user(user, remember=remember)
            return {"valid": 1}
        else:
            return {"valid": 0, "error": "Validation Error, ph.verify returned false"}

    except VerificationError:
        # If the verification didn't work
        return {"valid": 0, "error": "Validation Error"}


@auth.route("/logout", methods=["GET"])
@login_required
def logout():
    logout_user()
    return redirect("/")
