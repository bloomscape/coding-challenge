from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy

from src.resources.products import Products

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'

api = Api(app)

db = SQLAlchemy(app)

api.add_resource(Products, '/')
