-- Create Customer table
CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- Create Customer Profile table
CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    is_logged_in BOOLEAN DEFAULT false,
    customer_id INT UNIQUE REFERENCES customer(id) ON DELETE CASCADE
);

-- Insert Customers
INSERT INTO customer (first_name, last_name) VALUES 
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- Insert Profiles using subqueries
INSERT INTO customer_profile (is_logged_in, customer_id) 
VALUES (true, (SELECT id FROM customer WHERE first_name = 'John'));

INSERT INTO customer_profile (is_logged_in, customer_id) 
VALUES (false, (SELECT id FROM customer WHERE first_name = 'Jerome'));

SELECT c.first_name 
FROM customer c
INNER JOIN customer_profile p ON c.id = p.customer_id
WHERE p.is_logged_in = true;

SELECT c.first_name, COALESCE(p.is_logged_in, false) AS is_logged_in
FROM customer c
LEFT JOIN customer_profile p ON c.id = p.customer_id;

SELECT COUNT(*) 
FROM customer c
LEFT JOIN customer_profile p ON c.id = p.customer_id
WHERE p.is_logged_in = false OR p.is_logged_in IS NULL;
