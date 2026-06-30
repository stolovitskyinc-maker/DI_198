-- 1. Create Users Table (Bonus)
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL
);

-- 2. Create Product Orders Table
CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

-- 3. Create Items Table
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    order_id INT REFERENCES product_orders(order_id) ON DELETE CASCADE
);

-- Insert Users
INSERT INTO users (username, email) VALUES 
('alice_green', 'alice@email.com'),
('bob_blue', 'bob@email.com');

-- Insert Orders 
-- Alice (user_id 1) gets order 1 and 2. Bob (user_id 2) gets order 3.
INSERT INTO product_orders (order_id, user_id) VALUES 
(1, 1), 
(2, 1), 
(3, 2);

-- Insert Items linked to specific orders
INSERT INTO items (item_name, price, order_id) VALUES 
('Wireless Mouse', 25.50, 1),
('Mechanical Keyboard', 85.00, 1),
('USB-C Cable', 12.99, 2),
('Gaming Monitor', 299.99, 3),
('HDMI Cable', 15.00, 3);

CREATE OR REPLACE FUNCTION get_order_total(target_order_id INT)
RETURNS DECIMAL(10, 2) AS $$
DECLARE
    total_price DECIMAL(10, 2);
BEGIN
    SELECT COALESCE(SUM(price), 0.00) INTO total_price
    FROM items
    WHERE order_id = target_order_id;
    
    RETURN total_price;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_user_order_total(target_user_id INT, target_order_id INT)
RETURNS DECIMAL(10, 2) AS $$
DECLARE
    total_price DECIMAL(10, 2);
BEGIN
    SELECT COALESCE(SUM(i.price), 0.00) INTO total_price
    FROM items i
    INNER JOIN product_orders o ON i.order_id = o.order_id
    WHERE o.user_id = target_user_id AND o.order_id = target_order_id;
    
    RETURN total_price;
END;
$$ LANGUAGE plpgsql;

SELECT get_order_total(1) AS order_one_total;

SELECT get_user_order_total(1, 1) AS alice_order_one;

SELECT get_user_order_total(1, 3) AS unauthorized_check;