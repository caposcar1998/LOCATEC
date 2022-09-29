import mysql.connector

# Nombre en docker compose
def connect_database():
    return mysql.connector.connect(
    host="database",
    user="root",
    password="root",
    database="locatec",
    port=3306,
    )
