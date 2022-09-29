import os
import logging
from flask import Flask, request
from prometheus_flask_exporter import PrometheusMetrics
from adapters.mysql import queries
from controllers.product import product

app = Flask(__name__)

logging.basicConfig(level=logging.INFO)
logging.info("Setting LOGLEVEL to INFO")

metrics = PrometheusMetrics(app)
metrics.info("app_info", "App Info LOCATEC", version='1.0')

mysql_database = queries.Queries()
product_controller = product.Product(mysql_database)




@metrics.counter("testing","esta es mi prueba")
@app.route('/product/<id>',methods = ['UPDATE', 'DELETE', 'GET'])
def product_id(id):
    if request.method == 'UPDATE':
        return product_controller.update(id,request.get_json())
    if request.method == 'DELETE':
        return product_controller.delete(id)
    if request.method == 'GET':
        return product_controller.readOne(id)


@app.route('/product',methods = ['GET', 'POST'])
def product_():
    if request.method == 'GET':
        return str(product_controller.readAllProducts())
    if request.method == 'POST':
        return product_controller.create(request.get_json())


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
