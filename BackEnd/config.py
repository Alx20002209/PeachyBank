from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask import Flask, request, jsonify, url_for, Blueprint

app = Flask(__name__)
CORS(app)


app.config["JWT_SECRET_KEY"] = "uoghwiuehgqeijfpowjjpowejpotjewjti3"
jwt = JWTManager(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///Peaches.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

data_base = SQLAlchemy(app)