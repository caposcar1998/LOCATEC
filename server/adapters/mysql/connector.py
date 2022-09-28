import mysql.connector


def connect_database():
    return mysql.connector.connect(
    host="localhost",
    user="user",
    password="root"
    )
