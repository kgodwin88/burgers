DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id int(11) AUTO_INCREMENT,
    burger_name varchar(100) not null,
    devoured BOOLEAN not null,
    PRIMARY KEY (id)
);