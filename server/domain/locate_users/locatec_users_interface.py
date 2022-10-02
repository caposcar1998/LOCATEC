from abc import ABC, abstractmethod

class LocatecUsersInterface(ABC):

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
    def readAllUsers(self)->list:
        pass