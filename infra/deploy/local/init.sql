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
    Category        VARCHAR(100),
    FOREIGN KEY (FinderID) REFERENCES tecusers(ID),
    FOREIGN KEY (LookerID) REFERENCES tecusers(ID)
);

INSERT INTO tecusers (Name, Tuiton, Rol, idLogin, Isadmin)
        VALUES
            ("Oscar Contreras Palacios", "A01655772", "Student", "12342354324534", 1),
            ("Óscar Alfredo Belmont Rodríguez", "A01654861", "Student", "12342354324534", 1),
            ("David Arturo Villanueva San Juan", "A01337636", "Student", "12342354324534", 1),
            ("Óscar Vargas Pérez", "A01657110", "Student", "12342354324534", 0),
            ("Raul", "A12347572", "Proffessor", "09876754321" ,0);

INSERT INTO product ( Name, Description, Location, FinderID, Color, LookerID, Found, Category )
        VALUES
            ("Mochila","Una mochila fabulosa","Cenote",1,"Roja",2,0, "Varios"),
            ("Ipad","Ipad grande ","Aulas 2",2,"Gris",1,0, "Tecnologia"),
            ("Celular samsung","Samsung S8 roto de la pantalla","GYM",3,"Negro",null,0, "Tecnologia"),
            ("Nintendo Switch","Nintendo edicion OLED","2 piso biblioteca",4,"Negro",2,1, "Tecnologia"),
            ("Computadora Dell","Laptop","Aulas 1",1,"Gris",null,0, "Tecnologia");