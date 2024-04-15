from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(UserMixin, db.Model):
    __tablename__ = "Users"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    username = db.Column(db.String)
    is_authenicated = db.Column(db.Boolean, default=False)


    def get_id(self):
        return self.id


    def is_authenicated(self):
        return self.is_authenicated


    def is_anonymous(self):
        return False


    def is_active(self):
        return True
