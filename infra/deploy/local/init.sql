CREATE DATABASE IF NOT EXISTS `locatec`;
use `locatec`;

CREATE TABLE IF NOT EXISTS tecusers(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50),
    Tuiton VARCHAR(20),
    Rol    VARCHAR(20),
    idLogin VARCHAR(100),
    Isadmin BOOLEAN,
    CreatedAt       TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS product(
    ID              INT AUTO_INCREMENT PRIMARY KEY,
    Name            VARCHAR(255),
    Description     VARCHAR(255),
    Location        VARCHAR(255),
    FinderID        INT,
    Color           VARCHAR(255),
    CreatedAt       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    LookerID        INT,
    Found           BOOLEAN,
    FOREIGN KEY (FinderID) REFERENCES tecusers(ID),
    FOREIGN KEY (LookerID) REFERENCES tecusers(ID)
);

INSERT INTO tecusers (Name, Tuiton, Rol, idLogin, Isadmin)
        VALUES
            ("Oscar", "A01655772", "Student", "12342354324534", 1),
            ("Raul", "A12347572", "Proffessor", "09876754321" ,0);

INSERT INTO product ( Name, Description, Location, FinderID, Color, LookerID, Found )
        VALUES
            ("Mochila","Una mochila fabulosa","Cenote",1,"Roja",2,0),
            ("Ipad","Ipad grande ","Aulas 2",2,"Gris",1,0),
            ("Computadora Dell","Laptop","Aulas 1",1,"Gris",null,0);