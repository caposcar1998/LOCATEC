from prometheus_flask_exporter import Counter
from models.product_model import ProductModel
from domain.product.product_interface import ProductInterface
from adapters.mysql.queries import Queries

search_product_cateogry_metric = Counter('leer_categoria_producto', 'Tipo producto', ['tipoProducto'])
search_product_location_metric = Counter('leer_localizacion_producto', 'Localizacion producto', ['localizacion'])

delete_product_cateogry_metric = Counter('eliminar_categoria_producto', 'Tipo producto', ['tipoProducto'])
delete_product_location_metric = Counter('eliminar_localizacion_producto', 'Localizacion producto', ['localizacion'])

update_product_cateogry_metric = Counter('actualizar_categoria_producto', 'Tipo producto', ['tipoProducto'])
update_product_location_metric = Counter('actualizar_localizacion_producto', 'Localizacion producto', ['localizacion'])

change_status_product_cateogry_metric = Counter('cambio_status_categoria_producto', 'Tipo producto', ['tipoProducto'])
change_status_product_location_metric = Counter('cambio_status_localizacion_producto', 'Localizacion producto', ['localizacion'])

create_product_cateogry_metric = Counter('crear_categoria_producto', 'Tipo producto', ['tipoProducto'])
create_product_location_metric = Counter('crear_localizacion_producto', 'Localizacion producto', ['localizacion'])

class Product(ProductInterface):
    
    def __init__(self, database: Queries) -> None:
        self.database = database

    def create(self, product: ProductModel)->str:
        create_product_cateogry_metric.labels(tipoProducto=product["category"]).inc()
        create_product_location_metric.labels(localizacion=product["location"]).inc()
        return self.database.create_product(product)

    def delete(self, id: str)->str:
        res = self.database.read_product(id)
        delete_product_cateogry_metric.labels(tipoProducto=res["Category"]).inc()
        delete_product_location_metric.labels(localizacion=res["Location"]).inc()
        return self.database.delete_product(id)

    def update(self, product: ProductModel, id: str)->str:
        res = self.database.read_product(id)
        update_product_cateogry_metric.labels(tipoProducto=res["Category"]).inc()
        update_product_location_metric.labels(localizacion=res["Location"]).inc()
        return self.database.edit_product(id, product)

    def readAllProducts(self)->list:
        return self.database.read_all_products()

    def readOne(self, id: str)->ProductModel:
        res = self.database.read_product(id)
        search_product_cateogry_metric.labels(tipoProducto=res["Category"]).inc()
        search_product_location_metric.labels(localizacion=res["Location"]).inc()
        return self.database.read_product(id)

    def changeStatus(self, id, status, looker_id)->str:
        res = self.database.read_product(id)
        change_status_product_cateogry_metric.labels(tipoProducto=res["Category"]).inc()
        change_status_product_location_metric.labels(localizacion=res["Location"]).inc()
        return self.database.change_status_product(id, status, looker_id)
