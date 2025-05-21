from flask import Flask, request, jsonify, url_for, Blueprint
from models import Transfer
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
CORS(app)


app.config["JWT_SECRET_KEY"] = "uoghwiuehgqeijfpowjjpowejpotjewjti3"
jwt = JWTManager(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///Peaches.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

data_base = SQLAlchemy(app)


@app.route("/token", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    if username != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401
    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)

@app.route("/api//get_transfers", methods = ["GET"])
def get_transfers():
    transfers = Transfer.query.all()
    json_transfers = list(map(lambda x: x.to_json(), transfers))
    return jsonify({"transfers" : json_transfers})

@app.route("/api/create_transfers", methods = ["POST"])
def create_transfers():
    to_account = request.json.get("toAccount")
    from_account = request.json.get("fromAccount")
    ammount = request.json.get("ammount")
    state = request.json.get("state")
    
    
    if not to_account or not from_account or not ammount:
        return (jsonify({"message": "Please fill in all the needed information for a transaction"}),400)

    new_transfer = Transfer(to_account = to_account, from_account = from_account,ammount = ammount, state = state)
    
    
    try:
        data_base.session.add(new_transfer)
        data_base.session.commit()
        
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    
    
    return jsonify({"message":"Transfer has been submitted!"}), 201

@app.route("/update_state_transfer/<int:transfer_id>", methods = ["PATCH"])
def update_transfer_state(transfer_id):
    transfer = Transfer.query.get(transfer_id)
    
    
    if not transfer:
        return jsonify({"message":"Couldn't find the transfer"}), 404
    data = request.json
    transfer.state = data.get("state", transfer.state)
    
    data_base.session.commit()
    
    
    return jsonify({"message":"State has been updated"}), 200




if __name__ == "__main__":
    with app.app_context():
        data_base.create_all()
        
        app.run(debug = True)