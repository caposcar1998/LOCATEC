import os
import logging
from flask import Flask, request
from prometheus_flask_exporter import PrometheusMetrics
from adapters.mysql import queries
from controllers.product import product
from http_requests import product_http

app = Flask(__name__)

logging.basicConfig(level=logging.INFO)
logging.info("Setting LOGLEVEL to INFO")

metrics = PrometheusMetrics(app)
metrics.info("app_info", "App Info LOCATEC", version='1.0')

mysql_database = queries.Queries()
product_controller = product.Product(mysql_database)
product_http = product_http.ProductHTTP(product_controller)




@metrics.counter("testing","esta es mi prueba")
@app.route('/product/<id>',methods = ['PUT', 'DELETE', 'GET'])
def product_id(id):
    if request.method == 'PUT':
        return product_http.update_product_request(id,request.get_json())
    if request.method == 'DELETE':
        return product_http.delete_product_request(id)
    if request.method == 'GET':
        return product_http.retrieve_one_product_request(id)


@app.route('/product',methods = ['GET', 'POST'])
def product_():
    if request.method == 'GET':
        return product_http.retrieve_product_request()
    if request.method == 'POST':
        return product_http.create_product_request(request.get_json())


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
