from models.product_model import ProductModel
from .connector import connect_database


PRODUCT_DATABASE = "product"
USERS_DATABASE = "tecusers"


class Queries:

    def __init__(self):
        self.connection = connect_database()
        self.mycursor = self.connection.cursor()

    # PRODUCTS

    def create_product(self, product: ProductModel):
        sql = f"INSERT INTO {PRODUCT_DATABASE} (Name, Description, Location, FinderID, Color, LookerID, Found, Category) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        val = (product["name"], product["description"], product["location"], product["finder"], product["color"], product["looker"], False, product['category'])
        self.mycursor.execute(sql, val)

        self.connection.commit()

        return "ok"

    def read_all_products(self) -> list:
        products_found = []
        self.mycursor.execute(f"SELECT * FROM {PRODUCT_DATABASE}")

        myresult = self.mycursor.fetchall()

        for res in myresult:
            products_found.append({
            "ID": res[0],
            "Name": res[1],
            "Description": res[2],
            'Location': res[3],
            'Finder': res[4],
            'Color': res[5],
            'CreatedAt': res[6],
            'Looker': res[7],
            'Found': res[8],
            'Category': res[9]
        })

        return products_found

    def read_product(self, id: int):
        products_found = []
        sql = f"SELECT * FROM {PRODUCT_DATABASE} WHERE id ={id}"

        self.mycursor.execute(sql)

        myresult = self.mycursor.fetchall()

        for product in myresult:
            products_found.append(product)

        res = products_found[0]
        
        product_return = {
            "ID": res[0],
            "Name": res[1],
            "Description": res[2],
            'Location': res[3],
            'Finder': res[4],
            'Color': res[5],
            'CreatedAt': res[6],
            'Looker': res[7],
            'Found': res[8],
            'Category': res[9]
        }

        return product_return

    def delete_product(self, id: int) ->str :
        sql = f"DELETE FROM {PRODUCT_DATABASE} WHERE id = {id}"

        self.mycursor.execute(sql)

        self.connection.commit()

        return "ok"

    def edit_product(self, id: int, product: ProductModel) -> str:
        sql = f"UPDATE {PRODUCT_DATABASE} SET Name = %s , Description = %s, Location = %s, FinderID = %s, Color = %s, LookerID = %s WHERE id = {id}"
        val = (product["name"], product["description"], product["location"], product["finder"], product["color"], product["looker"])

        self.mycursor.execute(sql, val)

        self.connection.commit()

        return "ok"

    def change_status_product(self, id, found: bool, looker_id: int) -> str:
        sql = f"UPDATE {PRODUCT_DATABASE} SET LookerID = {looker_id}, Found = {found} WHERE id = {id}"
        self.mycursor.execute(sql)

        self.connection.commit()

        return "ok"


    # LOCATEC USERS

    def create_user(self, user):
        sql = f"INSERT INTO {USERS_DATABASE} (Name, Tuiton, Rol) VALUES (%s, %s, %s)"
        val = (user["name"], user["tuiton"], user["rol"])
        self.mycursor.execute(sql, val)

        self.connection.commit()

        return "ok"

    def read_all_users(self) -> list:
        users_found = []
        self.mycursor.execute(f"SELECT * FROM {USERS_DATABASE}")

        myresult = self.mycursor.fetchall()

        for res in myresult:
            users_found.append({
            "ID": res[0],
            "Name": res[1],
            "Tuiton": res[2],
            'Rol': res[3]
        })

        return users_found

    def read_user(self, id: int):
        user_found = []
        sql = f"SELECT * FROM {USERS_DATABASE} WHERE id ={id}"

        self.mycursor.execute(sql)

        myresult = self.mycursor.fetchall()

        for user in myresult:
            user_found.append(user)

        res = user_found[0]
        
        user_return = {
            "ID": res[0],
            "Name": res[1],
            "Tuiton": res[2],
            'Rol': res[3]
        }

        return user_return

    def delete_user(self, id: int) ->str :
        sql = f"DELETE FROM {USERS_DATABASE} WHERE id = {id}"

        self.mycursor.execute(sql)

        self.connection.commit()

        return "ok"

    def edit_user(self, id: int, user) -> str:
        sql = f"UPDATE {USERS_DATABASE} SET Name = %s , Tuiton = %s, Rol = %s WHERE id = {id}"
        val = (user["name"], user["tuiton"], user["rol"])

        self.mycursor.execute(sql, val)

        self.connection.commit()

        return "ok"