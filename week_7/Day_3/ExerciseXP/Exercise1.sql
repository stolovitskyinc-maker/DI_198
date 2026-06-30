SELECT * 
FROM language;

SELECT 
    f.title, 
    f.description, 
    l.name AS language_name
FROM film f
INNER JOIN language l 
    ON f.language_id = l.language_id;

SELECT 
    f.title, 
    f.description, 
    l.name AS language_name
FROM film f
RIGHT JOIN language l 
    ON f.language_id = l.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES 
('Inception'),
('Interstellar'),
('The Matrix');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text) VALUES 
(1, 1, 'Mind-bending Masterpiece', 10, 'An absolutely incredible movie with a great plot and score.'),
(2, 1, 'Visually Stunning', 9, 'Great acting and existential themes, though a bit long.');

DELETE FROM new_film 
WHERE id = 1;

