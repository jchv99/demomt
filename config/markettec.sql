-- Database: markettec

-- DROP DATABASE IF EXISTS markettec;

CREATE DATABASE markettec
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
	
create table USUARIO(
	id SERIAL primary key NOT NULL UNIQUE,
	username text NOT NULL UNIQUE,
	email text NOT NULL UNIQUE,	
	password text NOT NULL,
	first_name text NOT NULL,
	last_name text NOT NULL,
	contact_info text NOT NULL
);

create table PRODUCTO(
	id SERIAL primary key NOT NULL,
	name TEXT NOT NULL,
	price float NOT NULL,
	ownerID int,
	foreign key(ownerID) references USUARIO
);

create table SHOPPING_SESSION(
	sessionID SERIAL primary key NOT NULL,
	userID int NOT NULL,
	total float NOT NULL,
	foreign key(userID) references USUARIO
);

create table TOBUY_ITEM(
	tbID SERIAL primary key NOT NULL,
	productID int NOT NULL,
	shSessionID int NOT NULL,
	quantity int NOT NULL,
	foreign key(productID) references PRODUCTO,
	foreign key(shSessionID) references SHOPPING_SESSION
);

drop table TOBUY_ITEM;
drop table SHOPPING_SESSION;
drop table PRODUCTO;
drop table USUARIO;

insert into USUARIO (username, email, password, first_name, last_name, contact_info) values ('fernymart', 'fermtz020700@hotmail.com', 'pass123', 'Fernando', 'Martinez', '8125733616');

insert into PRODUCTO (name, price, ownerID) values ('GALLETAS', 10.5, 1);

UPDATE PRODUCTO SET name=


select * from usuario;
select * from producto;