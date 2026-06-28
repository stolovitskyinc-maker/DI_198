-- 1. Create the table with matching data types
CREATE TABLE actors (
    actor_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    age DATE NOT NULL, -- Named 'age' in the image schema, stores birthdates
    number_oscars SMALLINT NOT NULL
);

-- 2. Insert the data rows from the output
INSERT INTO actors (actor_id, first_name, last_name, age, number_oscars) VALUES
(3, 'Angelina', 'Jolie', '1975-06-04', 1),
(2, 'George', 'Clooney', '1961-06-05', 2),
(4, 'Jennifer', 'Aniston', '1969-02-11', 0),
(1, 'Matt', 'Damon', '1970-08-10', 5);


SELECT COUNT(*) AS total_actors FROM actors;


INSERT INTO actors (actor_id, first_name) VALUES (5, 'Brad');


INSERT INTO actors (actor_id, first_name, last_name, age, number_oscars) 
VALUES (5, 'Brad', '', '1963-12-18', 0);
