CREATE TABLE movies (
  movie_id SERIAL,
  movie_title VARCHAR(45) NOT NULL,
  released_date date NOT NULL,
  PRIMARY KEY (movie_id)
);

/*
 one to one: a movie has one scenario
*/

CREATE TABLE scenarios (
  pk_movie_id INTEGER NOT NULL,
  scenario_story TEXT NOT NULL,
  PRIMARY KEY (pk_movie_id),
  CONSTRAINT fk_movie_id FOREIGN KEY (pk_movie_id) REFERENCES movies (movie_id)
);

INSERT into movies(movie_title, released_date) VALUES 
('Good Will Hunting', '1997-12-02'),
('The Martian', '2015-09-11'),
('Oceans Twelve', '2004-12-10'),
('Up in the Air', '2009-09-5');

INSERT into scenarios(pk_movie_id, scenario_story) VALUES 
((SELECT movie_id FROM movies where movie_title = 'Up in the Air'),
'Ryan Bingham enjoys living out of a suitcase for his job, 
traveling around the country firing people, but finds that lifestyle 
threatened by the presence of a potential love interest, and a new hire.'),
((SELECT movie_id FROM movies where movie_title = 'The Martian'),
'In 2035, the crew of the Ares III mission to Mars is exploring 
Acidalia Planitia on Martian solar day (sol) 18 of their 31-sol expedition. ');

SELECT movies.movie_title, movies.released_date, scenarios.scenario_story as scenario
FROM movies
FULL OUTER JOIN scenarios
ON movies.movie_id = scenarios.pk_movie_id;

-- 1. Create the directors table first
CREATE TABLE directors (
  director_id SERIAL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (director_id)
);

-- 2. Add the new column to the existing movies table
ALTER TABLE movies 
ADD COLUMN fk_director_id INTEGER;

-- 3. Link the column to the directors table as a foreign key
ALTER TABLE movies
ADD CONSTRAINT fk_director
FOREIGN KEY (fk_director_id) 
REFERENCES directors(director_id) 
ON DELETE CASCADE;

CREATE TABLE actors_movies (
  actor_id INTEGER NOT NULL,
  movie_id INTEGER NOT NULL,
  actor_role VARCHAR(30) NOT NULL,
  is_lead_role BOOLEAN NOT NULL,
  PRIMARY KEY (actor_id, movie_id),
  FOREIGN KEY (actor_id) REFERENCES actors(actor_id) ON UPDATE CASCADE,
  FOREIGN KEY (movie_id) REFERENCES movies(movie_id) ON UPDATE CASCADE
);

INSERT into actors_movies(actor_id, movie_id, actor_role, is_lead_role) VALUES 
((SELECT actor_id FROM actors where first_name = 'George' AND last_name = 'Clooney' ), 
(SELECT movie_id FROM movies where movie_title = 'Up in the Air'), 'Ryan Bingham', TRUE),

((SELECT actor_id FROM actors where first_name = 'George' AND last_name = 'Clooney' ), 
(SELECT movie_id FROM movies where movie_title = 'Oceans Twelve'), 'Danny Ocean', FALSE),

((SELECT actor_id FROM actors where first_name = 'Matt' AND last_name = 'Damon' ),
(SELECT movie_id FROM movies where movie_title = 'Good Will Hunting'),'Will Hunting', TRUE);

-- select * FROM actors_movies