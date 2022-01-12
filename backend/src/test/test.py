import requests
import uuid

BASE = "http://127.0.0.1:5000/api/v1/products"

responseGET = requests.get(BASE)
print(responseGET.json())

responsePUT = requests.put(
    BASE, json={"uuid": str(uuid.uuid4()), "name": "test", "price": 1.0, "image": "test", "stock": 1, "bar_code": "test"})
print(responsePUT.json())

responsePATCH = requests.patch(
    BASE + "/" + str(uuid.uuid4()))
print(responsePATCH.json())

responseDELETE = requests.delete(
    BASE + "/" + str(uuid.uuid4()))
print(responseDELETE.json())
