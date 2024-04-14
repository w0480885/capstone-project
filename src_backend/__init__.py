from flask import Flask, request
from flask_login import LoginManager

from .models import db, User
from .config import LoadConfig


def init_app():

    app = Flask(__name__)

    conf = LoadConfig()
    app.config["SQLALCHEMY_DATABASE_URI"] = f"postgresql://{conf['user']}:{conf['password']}@{conf['host']}:5432/{conf['database']}"
    del conf

    from .routes.routes import routes as routes_pb
    app.register_blueprint(routes_pb, url_prefix="/api")
    from .routes.auth import auth as auth_pb
    app.register_blueprint(auth_pb, url_prefix="/api/auth")

    login_manager = LoginManager()

    @login_manager.user_loader
    def user_loader(user_id: int) -> User:
        return User.query.get(user_id)

    db.init_app(app)

    return app


# app = init_app()

