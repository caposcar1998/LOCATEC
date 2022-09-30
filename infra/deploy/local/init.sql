CREATE DATABASE IF NOT EXISTS `locatec`;
use `locatec`;
CREATE TABLE IF NOT EXISTS product(
    ID              INT AUTO_INCREMENT PRIMARY KEY,
    Name            VARCHAR(255),
    Description     VARCHAR(255),
    Location        VARCHAR(255),
    Finder          VARCHAR(255),
    Color           VARCHAR(255),
    CreatedAt       TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO product ( Name, Description, Location, Finder, Color )
        VALUES
            ("Mochila","Una mochila fabulosa","Cenote","Oscar","Roja");