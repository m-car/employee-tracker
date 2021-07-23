DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  employee_name VARCHAR(100) NOT NULL,
  category VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

-- DROP DATABASE IF EXISTS great_bay_bonus_db;
-- CREATE DATABASE great_bay_bonus_db;

-- USE great_bay_bonus_db;

-- CREATE TABLE roles(
--   id INT NOT NULL AUTO_INCREMENT,
--   role VARCHAR(30) UNIQUE NOT NULL,
--   PRIMARY KEY (id)
-- );

-- -- create roles
-- INSERT INTO roles (id, role)
-- VALUES (1, "user"), (2, "admin");

-- CREATE TABLE users(
--   id INT NOT NULL AUTO_INCREMENT,
--   username VARCHAR(30) UNIQUE NOT NULL,
--   -- storing plain text passwords is not secure!
--   password VARCHAR(50) NOT NULL,
--   role_id INT DEFAULT 1, -- defaults to "user" role
--   PRIMARY KEY (id),
--   FOREIGN KEY (role_id) REFERENCES roles(id)
-- );

-- CREATE TABLE auctions(
--   id INT NOT NULL AUTO_INCREMENT,
--   item_name VARCHAR(100) NOT NULL,
--   category VARCHAR(45) NOT NULL,
--   seller_id INT NOT NULL,
--   starting_bid INT default 0,
--   highest_bidder_id INT,
--   highest_bid INT default 0,
--   is_closed BOOLEAN DEFAULT false,
--   PRIMARY KEY (id),
--   FOREIGN KEY (seller_id) REFERENCES users(id),
--   FOREIGN KEY (highest_bidder_id) REFERENCES users(id)
-- );
