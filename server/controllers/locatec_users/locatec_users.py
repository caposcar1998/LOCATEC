from prometheus_flask_exporter import Counter
from typing import Any
from domain.locate_users.locatec_users_interface import LocatecUsersInterface
from adapters.mysql.queries import Queries

create_user_cateogry_metric = Counter('crear_rol_usuario', 'Rol usuario', ['rolUsuario'])
delete_user_cateogry_metric = Counter('eliminar_rol_usuario', 'Rol usuario', ['rolUsuario'])

class Locatec_users(LocatecUsersInterface):
    
    def __init__(self, database: Queries) -> None:
        self.database = database

    def create(self, user)->str:
        create_user_cateogry_metric.labels(rolUsuario=user["rol"]).inc()
        return self.database.create_user(user)

    def delete(self, id: str)->str:
        res = self.readOne(id)
        delete_user_cateogry_metric.labels(rolUsuario=res["Rol"]).inc()
        return self.database.delete_user(id)

    def update(self, user, id: str)->str:
        return self.database.edit_user(id, user)

    def readAllUsers(self)->list:
        return self.database.read_all_users()

    def readOne(self, id: str)->Any:
        return self.database.read_user(id)