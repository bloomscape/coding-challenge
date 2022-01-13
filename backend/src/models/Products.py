from src import db


class Product(db.Model):
    uuid = db.Column(db.String(36), primary_key=True, unique=True)
    name = db.Column(db.String(80), unique=False)
    price = db.Column(db.Float, unique=False)

    def __repr__(self):
        return f"<Product {self.name}>"
