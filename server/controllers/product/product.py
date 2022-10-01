from models.product_model import ProductModel
from domain.product.product_interface import ProductInterface
from adapters.mysql.queries import Queries

class Product(ProductInterface):
    
    def __init__(self, database: Queries) -> None:
        self.database = database

    def create(self, product: ProductModel)->str:
        return self.database.create_product(product)

    def delete(self, id: str)->str:
        return self.database.delete_product(id)

    def update(self, product: ProductModel, id: str)->str:
        return self.database.edit_product(id, product)

    def readAllProducts(self)->list:
        return self.database.read_all_products()

    def readOne(self, id: str)->ProductModel:
        return self.database.read_product(id)

    def changeStatus(self, id, status, looker_id)->str:
        return self.database.change_status_product(id, status, looker_id)
