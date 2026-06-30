SELECT 
    r.rental_id,
    r.rental_date,
    f.title AS film_title
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL;

SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    c.email,
    COUNT(r.rental_id) AS total_unreturned_films
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name, c.email
ORDER BY total_unreturned_films DESC;

SELECT title, description, category
FROM film_list
WHERE category = 'Action'
  AND actors LIKE '%Joe Swank%';

SELECT f.title, f.description
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE c.name = 'Action'
  AND a.first_name = 'JOE'
  AND a.last_name = 'SWANK';


