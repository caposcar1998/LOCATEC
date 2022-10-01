from abc import ABC, abstractmethod
from models.product_model import ProductModel

class ProductInterface(ABC):

    @abstractmethod
    def create(self, product)->str:
        pass

    @abstractmethod
    def delete(self, id)->str:
        pass

    @abstractmethod
    def update(self, product, id)->str:
        pass

    @abstractmethod
    def readAllProducts(self)->list:
        pass

    @abstractmethod
    def readOne(self, id)->ProductModel:
        pass

    @abstractmethod
    def changeStatus(self, status, looker_id)->str:
        pass