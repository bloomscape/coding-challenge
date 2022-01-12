# Requirements

To run this app you have to install:
1 Python
2 Node

# Installation

To install this app
1 Open a terminal
2 Enter the frontend folder and run yarn/npm install
3 Enter the backend folder and run pip install -r requirements.txt

To Run this app
1 Open two termianls
2 In the first terminal cd to the backend folder and run python run.py
3 In the second terminal cd to the frontend folder and run npm start or yarn start

# BackEnd

The backend consist of 1 endpoint:
1 GET /api/v1/products -> Returns all the products in the database
2 PUT /api/v1/products -> Add a product -> Required Fields ["uuid": string(36), "name": string(80), "price":float]
3 PATCH /api/v1/products -> Update a product -> Required Fields ["uuid": string(36)] and the fields that you want to update ["name": string(80), "price":float]
3 DELETE /api/v1/products -> Deletes a product -> Required Fields ["uuid": string(36)]
