CREATE DATABASE IF NOT EXISTS `locatec`;
use `locatec`;

CREATE TABLE IF NOT EXISTS tecusers(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50),
    Tuiton VARCHAR(20),
    Rol    VARCHAR(20),
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
    Picture         VARCHAR(1000),
    FOREIGN KEY (FinderID) REFERENCES tecusers(ID),
    FOREIGN KEY (LookerID) REFERENCES tecusers(ID)
);

INSERT INTO tecusers (Name, Tuiton, Rol)
        VALUES
            ("Oscar Contreras Palacios", "A01655772", "Estudiante"),
            ("Óscar Alfredo Belmont Rodríguez", "A01654861", "Estudiante"),
            ("David Arturo Villanueva San Juan", "A01337636", "Estudiante"),
            ("Óscar Vargas Pérez", "A01657110", "Colaborador"),
            ("Raul", "A12347572", "Profesor");

INSERT INTO product ( Name, Description, Location, FinderID, Color, LookerID, Found, Category, Picture )
        VALUES
            ("Mochila","Una mochila fabulosa","Cenote",1,"Roja",2,0, "Varios", "https://minisomx.vtexassets.com/arquivos/ids/214154-800-800?v=637922831071800000&width=800&height=800&aspect=true"),
            ("Ipad","Ipad grande ","Aulas 2",2,"Gris",1,0, "Tecnologia", "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-2021-hero-space-wifi-select_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&.v=1631150851000"),
            ("Celular samsung","Samsung S8 roto de la pantalla","GYM",3,"Negro",null,0, "Tecnologia", "https://m.media-amazon.com/images/I/61B0qTsNumL._SL1000_.jpg"),
            ("Nintendo Switch","Nintendo edicion OLED","2 piso biblioteca",4,"Negro",2,1, "Tecnologia", "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/switch/system/three-modes-in-one"),
            ("Computadora Dell","Laptop","Aulas 1",1,"Gris",null,0, "Tecnologia", "https://http2.mlstatic.com/D_NQ_NP_679686-MLM42227838902_062020-O.jpg");