select * from items, customers

CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    item_id INT REFERENCES items(item_id),
    quantity_purchased INT NOT NULL
);

-- Scott Scott bought one fan
INSERT INTO purchases (customer_id, item_id, quantity_purchased) VALUES (
    (SELECT customer_id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
    (SELECT item_id FROM items WHERE item_name = 'Fan'),
    1
);

-- Melanie Johnson bought ten large desks
INSERT INTO purchases (customer_id, item_id, quantity_purchased) VALUES (
    (SELECT customer_id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
    (SELECT item_id FROM items WHERE item_name = 'Large desk'),
    10
);

-- Greg Jones bought two small desks
INSERT INTO purchases (customer_id, item_id, quantity_purchased) VALUES (
    (SELECT customer_id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
    (SELECT item_id FROM items WHERE item_name = 'Small Desk'),
    2
);

SELECT * FROM purchases;

SELECT p.id, c.first_name, c.last_name, p.item_id, p.quantity_purchased
FROM purchases p
INNER JOIN customers c ON p.customer_id = c.customer_id;

SELECT * FROM purchases WHERE customer_id = 5;

SELECT p.*, i.item_name 
FROM purchases p
INNER JOIN items i ON p.item_id = i.item_id
WHERE i.item_name IN ('Large desk', 'Small Desk');

SELECT c.first_name, c.last_name, i.item_name
FROM purchases p
INNER JOIN customers c ON p.customer_id = c.customer_id
INNER JOIN items i ON p.item_id = i.item_id;

INSERT INTO purchases (customer_id, item_id, quantity_purchased) 
VALUES (5, NULL, 1);

-- 1. Remove the experimental row that has the NULL value
DELETE FROM purchases WHERE item_id IS NULL;

-- 2. Now run the constraint change again (it will succeed)
ALTER TABLE purchases ALTER COLUMN item_id SET NOT NULL;

