-- 1378. Replace Employee ID With The Unique Identifier

-- Table: Employees
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | name          | varchar |
-- +---------------+---------+
-- id is the primary key (column with unique values) for this table.
-- Each row of this table contains the id and the name of an employee in a company. 

-- Table: EmployeeUNI

-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | unique_id     | int     |
-- +---------------+---------+
-- (id, unique_id) is the primary key (combination of columns with unique values) for this table.
-- Each row of this table contains the id and the corresponding unique id of an employee in the company.
 

-- Write a solution to show the unique ID of each user, If a user does not have a unique ID replace just show null.

-- Return the result table in any order.

-- The result format is in the following example.

 

-- Example 1:

-- Input: 
-- Employees table:
-- +----+----------+
-- | id | name     |
-- +----+----------+
-- | 1  | Alice    |
-- | 7  | Bob      |
-- | 11 | Meir     |
-- | 90 | Winston  |
-- | 3  | Jonathan |
-- +----+----------+
-- EmployeeUNI table:
-- +----+-----------+
-- | id | unique_id |
-- +----+-----------+
-- | 3  | 1         |
-- | 11 | 2         |
-- | 90 | 3         |
-- +----+-----------+
-- Output: 
-- +-----------+----------+
-- | unique_id | name     |
-- +-----------+----------+
-- | null      | Alice    |
-- | null      | Bob      |
-- | 2         | Meir     |
-- | 3         | Winston  |
-- | 1         | Jonathan |
-- +-----------+----------+
-- Explanation: 
-- Alice and Bob do not have a unique ID, We will show null instead.
-- The unique ID of Meir is 2.
-- The unique ID of Winston is 3.
-- The unique ID of Jonathan is 1.


-- SOLUTION 
SELECT Employees.name, EmployeeUNI.unique_id FROM Employees LEFT JOIN EmployeeUNI ON Employees.id = EmployeeUNI.id

-- Intuition
-- The given SQL query selects the unique ID and name of employees from two different tables, Employees and EmployeeUNI, using a left join. The left join ensures that all the records from the Employees table are selected, along with matching records from the EmployeeUNI table, if any. If there are no matching records in the EmployeeUNI table, the result will still include the record from the Employees table, with null values for the EmployeeUNI columns.

-- Approach
-- To retrieve the required data, the SQL query uses a left join to match the ID columns from both the Employees and EmployeeUNI tables. The "ON" clause specifies that the ID column in the Employees table should match the ID column in the EmployeeUNI table. This will join the two tables based on the matching IDs, allowing the query to retrieve the required data from both tables.

-- The "SELECT" statement specifies that the unique_id and name columns should be retrieved from the resulting table. This will produce a table with two columns, one containing the unique ID and the other containing the name of the employee.