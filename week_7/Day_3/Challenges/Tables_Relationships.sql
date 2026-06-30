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

-- Create Book table
CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);

-- Create Student table with age constraint
CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);

-- Create Library junction table
CREATE TABLE library (
    book_fk_id INT REFERENCES book(book_id) ON UPDATE CASCADE ON DELETE CASCADE,
    student_fk_id INT REFERENCES student(student_id) ON UPDATE CASCADE ON DELETE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);

-- Insert Books
INSERT INTO book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

-- Insert Students
INSERT INTO student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- Insert into Junction Table using subqueries
INSERT INTO library (student_fk_id, book_fk_id, borrowed_date) VALUES
((SELECT student_id FROM student WHERE name = 'John'), (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'), '2022-02-15'),
((SELECT student_id FROM student WHERE name = 'Bob'), (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'), '2021-03-03'),
((SELECT student_id FROM student WHERE name = 'Lera'), (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'), '2021-05-23'),
((SELECT student_id FROM student WHERE name = 'Bob'), (SELECT book_id FROM book WHERE title = 'Harry Potter'), '2021-08-12');

SELECT * FROM library;

SELECT s.name, b.title 
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id;

SELECT ROUND(AVG(s.age), 2) AS average_age
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

DELETE FROM student WHERE name = 'John';

