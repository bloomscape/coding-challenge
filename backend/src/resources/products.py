from flask_restful import Resource, reqparse, abort

products_args = reqparse.RequestParser()

products_args.add_argument(
    'uuid', type=str, required=True, help='UUID is required')
products_args.add_argument(
    'name', type=str, required=True, help='Name is required')
products_args.add_argument(
    'price', type=float, required=True, help='Price is required')
products_args.add_argument(
    'image', type=str, required=True, help='Image is required')
products_args.add_argument(
    'stock', type=int, required=True, help='Stock is required')
products_args.add_argument(
    'bar_code', type=str, required=True, help='Bar code is required')


def abort_if_product_doesnt_exist(product_id):
    abort(404, message="Product {} doesn't exist".format(product_id))


class Products(Resource):
    def get(self):
        return {"products": {}}, 200

    def put(self):
        args = products_args.parse_args()
        return {"created": args['uuid']}, 201

    def patch(self, product_id):
        abort_if_product_doesnt_exist(product_id)
        return {"updated": product_id}, 200

    def delete(self, product_id):
        abort_if_product_doesnt_exist(product_id)
        return {"deleted": product_id}, 204
