import requests
import uuid

BASE = "http://127.0.0.1:5000"

responseGET = requests.get(BASE + "/")
print(responseGET.json())

responsePOST = requests.post(
    BASE + "/", json={"uuid": str(uuid.uuid4()), "name": "test", "price": 1.0, "image": "test", "stock": 1, "bar_code": "test"})
print(responsePOST.json())

responsePUT = requests.put(
    BASE + "/" + str(uuid.uuid4()))
print(responsePUT.json())

responseDELETE = requests.delete(
    BASE + "/" + str(uuid.uuid4()))
print(responseDELETE.json())
