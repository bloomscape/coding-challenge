import json

from flask_restful import Resource, reqparse, abort, fields, marshal_with
from flask import jsonify

from src.models.products import Product
from src import db


products_args = reqparse.RequestParser()

products_args.add_argument(
    'uuid', type=str, required=True, help='UUID is required')
products_args.add_argument(
    'name', type=str, required=True, help='Name is required')
products_args.add_argument(
    'price', type=float, required=True, help='Price is required')


resource_fields = {
    'uuid': fields.String,
    'name': fields.String,
    'price': fields.Float
}


def abort_if_product_doesnt_exist(product_id):
    product = Product.query.filter_by(uuid=product_id).first()
    if not product:
        abort(404, message="Product {} doesn't exist".format(product_id))


class Products(Resource):

    @marshal_with(resource_fields)
    def get(self):
        data = Product.query.all()
        return data, 200

    def put(self):
        args = products_args.parse_args()
        try:
            product = Product(uuid=args['uuid'],
                              name=args['name'], price=args['price'])
            db.session.add(product)
            db.session.commit()
            return {"created": args}, 201
        except(e):
            return {"error": e}, 400

    def patch(self, product_id):
        abort_if_product_doesnt_exist(product_id)
        try:
            product = Product.query.get(uuid=product_id)
            return {"updated": product.uuid}, 200
        except Exception as e:
            return {"error": e}, 400

    def delete(self, product_id):
        abort_if_product_doesnt_exist(product_id)
        try:
            product = Product.query.get(uuid=product_id)
            return {"deleted": product.uuid}, 200
        except Exception as e:
            return {"error": e}, 400
