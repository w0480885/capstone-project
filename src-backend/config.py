# config.py

class Config:
    SECRET_KEY = 'secret_key'  # Change to a real secret key for production
    SQLALCHEMY_DATABASE_URI = 'postgresql://db-dev:i-love-cupcakes@137.184.9.253:22/test'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # Add more configuration variables as needed, for example:
    FLASK_APP = 'server.py'
    FLASK_ENV = 'development'  # Change to 'production' in a production environment

# Consider adding configuration subclasses for different environments (e.g., Development, Testing, Production)
class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_ECHO = True  # Log SQL queries for debugging

class ProductionConfig(Config):
    DEBUG = False
    SQLALCHEMY_ECHO = False

    