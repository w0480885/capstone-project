# routes.py
from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required, current_user
# Adjust this import to correctly reference the models within the app directory
from .models import User, db  

def init_app(app):
    @app.route('/auth/register', methods=['POST'])
    def register():
        data = request.get_json()
        user = User.query.filter_by(username=data['username']).first()
        if user:
            return jsonify({'error': 'Username already exists'}), 400
        new_user = User(
            username=data['username'],
            email=data['email'],
            password=generate_password_hash(data['password'])
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User created successfully'}), 201

    @app.route('/auth/login', methods=['POST'])
    def login():
        data = request.get_json()
        user = User.query.filter_by(username=data['username']).first()
        if user and check_password_hash(user.password, data['password']):
            login_user(user, remember=True)
            return jsonify({'message': 'Login successful'}), 200
        return jsonify({'error': 'Invalid username or password'}), 401

    @app.route('/auth/logout', methods=['POST'])
    @login_required
    def logout():
        logout_user()
        return jsonify({'message': 'Logged out successfully'}), 200

    @app.route('/auth/status')
    def status():
        if current_user.is_authenticated:
            return jsonify({'status': True, 'user': current_user.to_dict()}), 200  # Adjust to your user model
        return jsonify({'status': False}), 200
