from config import data_base

class Transfer(data_base.Model):
    transfer_id = data_base.Column(data_base.Integer, primary_key = True)
    to_account = data_base.Column(data_base.String(80), unique = True, nullable = False)
    from_account = data_base.Column(data_base.String(120), unique = True, nullable = False)
    amount = data_base.Column(data_base.Float, nullable = False)
    state = data_base.Column(data_base.String, nullable = True)
    
    def to_json(self):
        return {
            "transfer_id": self.id,
            "toAccount": self.to_account,
            "fromAccount": self.from_account,
            "ammount": self.amount,
            "state" : self.state 
        }