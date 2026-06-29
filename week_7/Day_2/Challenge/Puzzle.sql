CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab

-- Table1 – FirstTab
-- ID  Name
-- 5   Pawan
-- 6   Sharlee
-- 7   Krish
-- NULL    Avtaar


-- Table2 – SecondTab
-- ID
-- 5
-- NULL

-- Q1. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- The subquery evaluates strictly to (NULL). The main query expands to WHERE ft.id != NULL. In SQL, any direct comparison with NULL (other than using IS NULL) evaluates to UNKNOWN. No rows pass this evaluation.
-- Expected Output: 0

-- Q2. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- Assumption: The subquery filters out the null row and yields exactly (5). The comparison behaves predictably:
-- 5 NOT IN (5) - False
-- 6 NOT IN (5) - True (Matches row 'Sharlee'
-- 7 NOT IN (5) - True (Matches row 'Krish')
-- NULL NOT IN (5) - Unknown (Fails row 'Avtaar') Only IDs 6 and 7 qualify.
-- Expected Output: 2

-- Q3. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- Assumption (Mental Simulation): The subquery returns the full evaluation pool: (5, NULL). Because the list contains a NULL, the structure unpacks to: WHERE ft.id != 5 AND ft.id != NULL. The second half forces the logic into an UNKNOWN state across every single evaluation loop, completely wiping out matches.
-- Expected Output: 0

-- Q4. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

-- Assumption (Mental Simulation): The inner clause strips out the problem element (WHERE id IS NOT NULL), returning exactly (5). This isolates the query parameters identically to Q2, checking for entries distinct from 5. Only row IDs 6 and 7 qualify.
-- Expected Output: 2