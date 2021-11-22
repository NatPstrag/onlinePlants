CREATE DATABASE plant;

CREATE TABLE products(
    productID SERIAL PRIMARY KEY,
    name VARCHAR(20),
    price INT,
    description VARCHAR(255),
    images VARCHAR(255)
)