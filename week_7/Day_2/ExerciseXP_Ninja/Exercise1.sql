SELECT first_name, last_name 
FROM customers 
ORDER BY first_name DESC, last_name DESC 
LIMIT 2;

DELETE FROM purchases 
WHERE customer_id = (
    SELECT id 
    FROM customers 
    WHERE first_name = 'Scott'
);

SELECT * 
FROM customers 
WHERE first_name = 'Scott';

SELECT 
    p.id AS purchase_id, 
    c.first_name, 
    c.last_name, 
    p.item_id, 
    p.quantity_purchased
FROM purchases p
LEFT JOIN customers c 
    ON p.customer_id = c.customer_id 
   AND c.first_name != 'Scott';

SELECT 
    p.id AS purchase_id, 
    c.first_name, 
    c.last_name, 
    p.item_id, 
    p.quantity_purchased
FROM purchases p
INNER JOIN customers c 
    ON p.customer_id = c.customer_id
WHERE c.first_name != 'Scott';
