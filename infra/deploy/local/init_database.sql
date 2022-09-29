CREATE DATABASE IF NOT EXISTS `locatec`;
USE `locatec`;
CREATE TABLE IF NOT EXISTS products(
    ID          INT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(255),
    description    VARCHAR(255),
    location      VARCHAR(255),
    finder       VARCHAR(255),
    color VARCHAR(255),
    CreatedAt   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products ( name, description, location, finder, color )
        VALUES
            ("Mochila","Una mochila fabulosa","Cenote","Oscar","Roja")