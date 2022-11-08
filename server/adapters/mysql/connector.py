import mysql.connector
import os
from dotenv import load_dotenv

# Nombre en docker compose
def connect_database():
    load_dotenv()
    return mysql.connector.connect(
    host=os.environ.get("database"),
    user="root",
    password="root",
    database="locatec",
    port=3306
    )
