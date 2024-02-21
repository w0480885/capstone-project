from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_cors import CORS
from flask_migrate import Migrate
from .extensions import db, login_manager, cors, migrate
# Ensure the config path is correctly referenced relative to the Flask app's location
from config import Config



def create_app():
    app = Flask(__name__, static_folder='../frontend/build', static_url_path='')
    app.config.from_object(Config)

    # Bind Flask extensions to the app instance
    db.init_app(app)
    login_manager.init_app(app)
    cors.init_app(app)
    migrate.init_app(app, db)

    with app.app_context():
        # This ensures that all routes and models are loaded within the app context
        from .routes import init_app  # Adjust this import based on your actual routes setup
        init_app(app)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
