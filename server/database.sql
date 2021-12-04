CREATE DATABASE plant;

CREATE TABLE products(
    productID SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price INT ,
    description VARCHAR(1255),
    images VARCHAR(1255) 
)