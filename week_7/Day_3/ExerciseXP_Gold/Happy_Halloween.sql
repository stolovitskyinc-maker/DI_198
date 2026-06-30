SELECT 
    s.store_id,
    ci.city,
    co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;

SELECT 
    i.store_id,
    SUM(f.length) AS total_minutes,
    ROUND(SUM(f.length) / 60.0, 2) AS total_hours,
    ROUND(SUM(f.length) / 1440.0, 2) AS total_days
FROM inventory i
JOIN film f ON i.film_id = f.film_id
WHERE i.inventory_id NOT IN (
    -- Exclude any inventory item that is currently checked out
    SELECT inventory_id 
    FROM rental 
    WHERE return_date IS NULL
)
GROUP BY i.store_id;

SELECT 
    c.first_name, 
    c.last_name, 
    c.email, 
    ci.city
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
WHERE ci.city_id IN (
    SELECT a2.city_id 
    FROM store s 
    JOIN address a2 ON s.address_id = a2.address_id
);

SELECT 
    c.first_name, 
    c.last_name, 
    c.email, 
    co.country
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
WHERE co.country_id IN (
    SELECT ci2.country_id 
    FROM store s 
    JOIN address a2 ON s.address_id = a2.address_id
    JOIN city ci2 ON a2.city_id = ci2.city_id
);

-- Step A: Create a temporary safe table with a CHECK constraint
CREATE TEMPORARY TABLE safe_movies (
    film_id INT,
    title VARCHAR(255),
    description TEXT,
    length INT,
    -- The CHECK constraint enforces the safety rules strictly
    CONSTRAINT horror_safety_check CHECK (
        LOWER(title) NOT LIKE '%beast%' AND LOWER(description) NOT LIKE '%beast%' AND
        LOWER(title) NOT LIKE '%monster%' AND LOWER(description) NOT LIKE '%monster%' AND
        LOWER(title) NOT LIKE '%ghost%' AND LOWER(description) NOT LIKE '%ghost%' AND
        LOWER(title) NOT LIKE '%dead%' AND LOWER(description) NOT LIKE '%dead%' AND
        LOWER(title) NOT LIKE '%zombie%' AND LOWER(description) NOT LIKE '%zombie%' AND
        LOWER(title) NOT LIKE '%undead%' AND LOWER(description) NOT LIKE '%undead%'
    )
);

INSERT INTO safe_movies (film_id, title, description, length)
SELECT f.film_id, f.title, f.description, f.length
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name != 'Horror'
  -- Filter these out here so they never trigger the CHECK constraint error
  AND LOWER(f.title) NOT LIKE '%beast%' AND LOWER(f.description) NOT LIKE '%beast%'
  AND LOWER(f.title) NOT LIKE '%monster%' AND LOWER(f.description) NOT LIKE '%monster%'
  AND LOWER(f.title) NOT LIKE '%ghost%' AND LOWER(f.description) NOT LIKE '%ghost%'
  AND LOWER(f.title) NOT LIKE '%dead%' AND LOWER(f.description) NOT LIKE '%dead%'
  AND LOWER(f.title) NOT LIKE '%zombie%' AND LOWER(f.description) NOT LIKE '%zombie%'
  AND LOWER(f.title) NOT LIKE '%undead%' AND LOWER(f.description) NOT LIKE '%undead%';
