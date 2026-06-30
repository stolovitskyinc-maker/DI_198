CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL
);

-- Batch inserting the provided data
INSERT INTO students (first_name, last_name, birth_date) VALUES 
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');

-- Inserting your own record (the database automatically assigns id: 7)
INSERT INTO students (first_name, last_name, birth_date) VALUES 
('Alex', 'Smith', '1995-05-20');

SELECT * FROM students;

SELECT first_name, last_name FROM students;

SELECT first_name, last_name FROM students WHERE id = 2;

SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';

SELECT first_name, last_name FROM students WHERE first_name LIKE 'A%';

SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';

-- The underscore (_) matches exactly one character
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';

-- Note: A single row's ID cannot be both 1 and 3 simultaneously. 
-- Assuming you mean fetching rows where the ID is either 1 or 3:
SELECT first_name, last_name FROM students WHERE id IN (1, 3);

SELECT * FROM students WHERE birth_date >= '2000-01-01';
