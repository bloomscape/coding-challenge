from src import db


class ProductModel(db.Model):
    uuid = db.Column(db.String(36), primary_key=True, unique=True)
    name = db.Column(db.String(80), unique=False)
    price = db.Column(db.Float, unique=False)
    image = db.Column(db.String(80), unique=False)
    stock = db.Column(db.Integer, unique=False)
    bar_code = db.Column(db.String(80), unique=False)

    def __repr__(self):
        return f"<Product {name}>"
