from models.product_model import ProductModel
from .connector import connect_database


PRODUCT_DATABASE = "product"


class Queries:

    def __init__(self):
        self.connection = connect_database()
        self.mycursor = self.connection.cursor()


    def create_product(self, product: ProductModel):
        sql = f"INSERT INTO ${PRODUCT_DATABASE} (name, description, location, finder, color) VALUES (%s, %s, %s, %s, %s)"
        val = (product.name, product.description, product.location, product.finder, product.color)
        self.mycursor.execute(sql, val)

        self.connection.commit()

    def read_all_products(self) -> list:
        products_found = []
        self.mycursor.execute(f"SELECT * FROM ${PRODUCT_DATABASE}")

        myresult = self.mycursor.fetchall()

        for product in myresult:
            products_found.append(product)

        return products_found

    def read_product(self, id: int):
        products_found = []
        sql = f"SELECT * FROM customers WHERE id =${id}"

        self.mycursor.execute(sql)

        myresult = self.mycursor.fetchall()

        for product in myresult:
            products_found.append(product)

        return products_found[0]

    def delete_product(self, id: int) ->str :
        sql = f"DELETE FROM ${PRODUCT_DATABASE} WHERE id = f{id}"

        self.mycursor.execute(sql)

        self.connection.commit()

        return "ok"

    def edit_product(self, id: int, product: ProductModel) -> str:
        sql = f"UPDATE ${PRODUCT_DATABASE} SET name = %s , description = %s, location = %s, finder = %s, color = %s WHERE id = ${id}"
        val = (product.name, product.description, product.location, product.finder, product.color)

        self.mycursor.execute(sql, val)

        self.connection.commit()

        return "ok"