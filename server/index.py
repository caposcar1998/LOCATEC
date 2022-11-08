from crypt import methods
import os
import logging
from flask import Flask, request
from prometheus_flask_exporter import PrometheusMetrics
from adapters.mysql import queries
from controllers.product import product
from controllers.locatec_users import locatec_users
from http_requests import product_http
from http_requests import user_http
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)
logging.info("Setting LOGLEVEL to INFO")

metrics = PrometheusMetrics(app)
metrics.info("app_info", "App Info LOCATEC", version='1.0')

mysql_database = queries.Queries()
product_controller = product.Product(mysql_database)
user_controller = locatec_users.Locatec_users(mysql_database)
user_http = user_http.UsersHTTP(user_controller)
product_http = product_http.ProductHTTP(product_controller)


@app.route('/tuiton/<tuiton>', methods= ['GET'])
def getTuiton(tuiton):
    if request.method == 'GET':
        return user_http.retrieve_one_tuiton(tuiton)


@app.route('/product/<id>',methods = ['PUT', 'DELETE', 'GET'])
def product_id(id):
    if request.method == 'PUT':
        return product_http.update_product_request(id,request.get_json())
    if request.method == 'DELETE':
        return product_http.delete_product_request(id)
    if request.method == 'GET':
        return product_http.retrieve_one_product_request(id)


@app.route('/product/<id>/status/<status>/looker/<looker>',methods = ['PUT'])
def product_update(id, status, looker):
    if request.method == 'PUT':
        return product_http.change_status_product(id, status, looker )

@app.route('/product',methods = ['GET', 'POST'])
def product_():
    if request.method == 'GET':
        return product_http.retrieve_product_request()
    if request.method == 'POST':
        return product_http.create_product_request(request.get_json())


@app.route('/user',methods = ['GET', 'POST'])
def user_():
    if request.method == 'GET':
        return user_http.retrieve_user_request()
    if request.method == 'POST':
        return user_http.create_user_request(request.get_json())


@app.route('/user/<id>',methods = ['PUT', 'DELETE', 'GET'])
def user_id(id):
    if request.method == 'PUT':
        return user_http.update_user_request(id,request.get_json())
    if request.method == 'DELETE':
        return user_http.delete_user_request(id)
    if request.method == 'GET':
        return user_http.retrieve_one_user_request(id)


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port, ssl_context='adhoc'))
