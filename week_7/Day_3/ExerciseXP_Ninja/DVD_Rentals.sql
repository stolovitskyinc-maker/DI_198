SELECT DISTINCT f.film_id, f.title, f.rating, f.description
FROM film f
JOIN inventory i ON f.film_id = i.film_id
WHERE f.rating IN ('G', 'PG')
  AND i.inventory_id NOT IN (
      SELECT inventory_id 
      FROM rental 
      WHERE return_date IS NULL
  )
ORDER BY f.title;

CREATE TABLE kids_waiting_list (
    waiting_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL REFERENCES film(film_id) ON DELETE CASCADE,
    customer_id INT NOT NULL REFERENCES customer(customer_id) ON DELETE CASCADE,
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- Prevents the same child from signing up for the same movie twice
    CONSTRAINT unique_child_movie UNIQUE (film_id, customer_id) 
);

INSERT INTO kids_waiting_list (film_id, customer_id) VALUES 
(1, 4), -- Customer 4 waiting for Film 1
(1, 5), -- Customer 5 waiting for Film 1
(2, 6); -- Customer 6 waiting for Film 2

SELECT 
    f.film_id,
    f.title,
    f.rating,
    COUNT(w.waiting_id) AS total_children_waiting
FROM film f
LEFT JOIN kids_waiting_list w ON f.film_id = w.film_id
WHERE f.rating IN ('G', 'PG')
GROUP BY f.film_id, f.title, f.rating
HAVING COUNT(w.waiting_id) > 0
ORDER BY total_children_waiting DESC;

