--create database shop_db
-- CREATE TABLE products (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(50) NOT NULL,
--     price INTEGER NOT NULL
-- );

insert into products (name, price)
values
('ipad', 700),
	('iphone', 800),
	('iwatch', 600),
	('icar', 900)

select * from products

-- delete from products where id > 4

create table products_desc (
	id serial primary key,
	description varchar(500) not null,
	product_id integer not null set default -1,
	constraint fk_product 
		foreign key (product_id) 
			references products(id)
)

insert into products_desc (description, product_id)
values
('Amazing ipad', 1),
('Great iphone', 2),
('Best watch', 3),
('Fastest car', 4)

select * from products_desc

select name, p.price, pd.description from products p
inner join products_desc pd on p.id = product_id
-- Options 1 RESTRICT
delete from products_desc where product_id = 1
delete from products where id = 1

--option 2 SET NULL
alter table products_desc drop constraint fk_product

alter table products_desc
	add constraint fk_product 
		foreign key (product_id) 
			references products(id)
				on delete set null

delete from products where id = 4 

-- option 3 CASCADE
alter table products_desc drop constraint fk_product

alter table products_desc
	add constraint fk_product 
		foreign key (product_id) 
			references products(id)
				on delete cascade

delete from products where id = 3

--table relations
--one to one

create table users (
	user_id serial primary key,
	username varchar(50) unique not null,
	password varchar (1000)
)

create table user_profiles (
	profile_id serial primary key,
	user_id int unique not null references users(user_id),
	name varchar(50)
)
--one to many

create table posts (
	post_id		SERIAL PRIMARY KEY,
	user_id		INT References users(user_id),
	
)
--many to many



-- export / import
--COPY
--/copy

select * from products

copy products(name, price) to  '/tmp/products.csv' delimiter ',' csv header


create table products_import (
id integer,
name varchar(50),
price integer
)

select * from products

create or replace function apply_discount(original_price integer)
returns integer
language sql
as $$
	select(original_price * 0.90)::integer;
$$

select name, price, apply_discount(price) as sale_price from products