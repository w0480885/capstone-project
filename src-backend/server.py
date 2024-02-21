from flask import Flask, send_from_directory
import os


from app.extensions import db, login_manager, cors, migrate
from app.__init__ import create_app 

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
