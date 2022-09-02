import os
from flask import Flask
import logging
from prometheus_flask_exporter import PrometheusMetrics

app = Flask(__name__)

logging.basicConfig(level=logging.INFO)
logging.info("Setting LOGLEVEL to INFO")

metrics = PrometheusMetrics(app)
metrics.info("app_info", "App Info LOCATEC", version='1.0')

@app.route('/')
@metrics.counter("testing","esta es mi prueba")
def hello():
    return 'Hello, World!'

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)