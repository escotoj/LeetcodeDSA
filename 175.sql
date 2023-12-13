-- 175. Combine Two Tables

-- Table: Person

-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | personId    | int     |
-- | lastName    | varchar |
-- | firstName   | varchar |
-- +-------------+---------+
-- personId is the primary key (column with unique values) for this table.
-- This table contains information about the ID of some persons and their first and last names.
 

-- Table: Address

-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | addressId   | int     |
-- | personId    | int     |
-- | city        | varchar |
-- | state       | varchar |
-- +-------------+---------+
-- addressId is the primary key (column with unique values) for this table.
-- Each row of this table contains information about the city and state of one person with ID = PersonId.
 

-- Write a solution to report the first name, last name, city, and state of each person in the Person table. If the address of a personId is not present in the Address table, report null instead.

-- Return the result table in any order.

-- The result format is in the following example.

 

-- Example 1:

-- Input: 
-- Person table:
-- +----------+----------+-----------+
-- | personId | lastName | firstName |
-- +----------+----------+-----------+
-- | 1        | Wang     | Allen     |
-- | 2        | Alice    | Bob       |
-- +----------+----------+-----------+
-- Address table:
-- +-----------+----------+---------------+------------+
-- | addressId | personId | city          | state      |
-- +-----------+----------+---------------+------------+
-- | 1         | 2        | New York City | New York   |
-- | 2         | 3        | Leetcode      | California |
-- +-----------+----------+---------------+------------+
-- Output: 
-- +-----------+----------+---------------+----------+
-- | firstName | lastName | city          | state    |
-- +-----------+----------+---------------+----------+
-- | Allen     | Wang     | Null          | Null     |
-- | Bob       | Alice    | New York City | New York |
-- +-----------+----------+---------------+----------+
-- Explanation: 
-- There is no address in the address table for the personId = 1 so we return null in their city and state.
-- addressId = 1 contains information about the address of personId = 2.





-- SOLUTION
SELECT Person.firstName, Person.lastName, Address.city, Address.state FROM Person LEFT JOIN Address ON Person.PersonId = Address.PersonId

-- SELECT Clause:
-- The SELECT clause specifies the columns that you want to retrieve in the result set.

SELECT Person.firstName, Person.lastName, Address.city, Address.state

-- This part of the query is selecting four columns:
-- Person.firstName: The first name of a person from the Person table.
-- Person.lastName: The last name of a person from the Person table.
-- Address.city: The city from the Address table.
-- Address.state: The state from the Address table.
-- FROM Clause:

-- The FROM clause specifies the tables involved in the query.

FROM Person LEFT JOIN Address ON Person.PersonId = Address.PersonId

-- Person is the main table from which you want to retrieve data.
-- LEFT JOIN Address indicates that you want to include records from the Person table even if there are no matching records in the Address table.
-- ON Person.PersonId = Address.PersonId is the condition for the join. It specifies that records should be matched based on the PersonId column in both tables.

-- Result:
-- The query will return a result set containing columns firstName, lastName, city, and state where each row represents a combination of data from the Person and Address tables.