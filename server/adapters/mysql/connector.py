import mysql.connector


def connect_database():
    return mysql.connector.connect(
    host="database",
    user="user",
    password="root",
    database="locatec"
    )
