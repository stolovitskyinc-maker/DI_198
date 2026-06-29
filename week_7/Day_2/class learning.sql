-- CREATE TABLE departments (
-- 	dept_id SERIAL PRIMARY KEY,
-- 	dept_name VARCHAR(100) NOT NULL
-- )

-- CREATE TABLE employees (
-- 	emp_id  SERIAL PRIMARY KEY,
-- 	name	VARCHAR(100) NOT NULL,
-- 	age		INTEGER,
-- 	salary	NUMERIC(10,2),
-- 	city	VARCHAR(100),
-- 	dept_id	INTEGER REFERENCES departments(dept_id)
-- )

INSERT INTO departments (dept_name)
VALUES
('Engineering'), ('Marketing'), ('HR'), ('Finance')

select * from departments