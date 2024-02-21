from flask_sqlalchemy import SQLAlchemy
from .extensions import db



class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text)
    email = db.Column(db.Text)
    password = db.Column(db.Text)

    clients = db.relationship('Client', backref='user', lazy=True)
    timer_entries = db.relationship('TimerEntry', backref='user', lazy=True)
    user_projects = db.relationship('UserProject', backref='user', lazy=True)

class Client(db.Model):
    __tablename__ = 'clients'
    id = db.Column(db.Integer, primary_key=True)
    userid = db.Column(db.Integer, db.ForeignKey('users.id'))
    username = db.Column(db.String(255))
    color = db.Column(db.String(255))
    rate = db.Column(db.Numeric(10,2))

    projects = db.relationship('Project', backref='client', lazy=True)

class Project(db.Model):
    __tablename__ = 'projects'
    id = db.Column(db.Integer, primary_key=True)
    clientid = db.Column(db.Integer, db.ForeignKey('clients.id'))
    name = db.Column(db.String(255))
    description = db.Column(db.Text)
    color = db.Column(db.String(255))
    rate = db.Column(db.Numeric(10,2))

    tags = db.relationship('Tag', backref='project', lazy=True)
    timer_entries = db.relationship('TimerEntry', backref='project', lazy=True)
    user_projects = db.relationship('UserProject', backref='project', lazy=True)

class Tag(db.Model):
    __tablename__ = 'tags'
    id = db.Column(db.Integer, primary_key=True)
    projectid = db.Column(db.Integer, db.ForeignKey('projects.id'))
    name = db.Column(db.String(255))
    description = db.Column(db.Text)
    color = db.Column(db.String(255))
    rate = db.Column(db.Numeric(10,2))

    timer_entries = db.relationship('TimerEntry', backref='tag', lazy=True)

class TimerEntry(db.Model):
    __tablename__ = 'timerentries'
    id = db.Column(db.Integer, primary_key=True)
    userid = db.Column(db.Integer, db.ForeignKey('users.id'))
    projectid = db.Column(db.Integer, db.ForeignKey('projects.id'))
    tagid = db.Column(db.Integer, db.ForeignKey('tags.id'))
    is_billable = db.Column(db.Boolean)
    name = db.Column(db.String(255))
    rate = db.Column(db.Numeric(10,2))
    start_date = db.Column(db.DateTime)
    end_date = db.Column(db.DateTime)

class UserProject(db.Model):
    __tablename__ = 'userprojects'
    projectid = db.Column(db.Integer, db.ForeignKey('projects.id'), primary_key=True)
    userid = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    is_manager = db.Column(db.Boolean)
