from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.String, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    is_authenicated = db.Column(db.Boolean, default=False)


    def get_id(self):
        return self.id


    def is_authenicated(self):
        return self.is_authenicated


    def is_anonymous(self):
        return False


    def is_active(self):
        return True
