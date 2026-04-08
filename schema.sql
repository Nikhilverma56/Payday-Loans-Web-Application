CREATE DATABASE paydayDB;

USE paydayDB;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    dob DATE,
    employment VARCHAR(50),
    income VARCHAR(50),
    loan VARCHAR(50),
    repayment VARCHAR(50),
    bank VARCHAR(10),
    bankname VARCHAR(100)
);