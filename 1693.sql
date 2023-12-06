-- 1693. Daily Leads and Partners

-- Table: DailySales

-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | date_id     | date    |
-- | make_name   | varchar |
-- | lead_id     | int     |
-- | partner_id  | int     |
-- +-------------+---------+
-- There is no primary key (column with unique values) for this table. It may contain duplicates.
-- This table contains the date and the name of the product sold and the IDs of the lead and partner it was sold to.
-- The name consists of only lowercase English letters.
 

-- For each date_id and make_name, find the number of distinct lead_id's and distinct partner_id's.

-- Return the result table in any order.

-- The result format is in the following example.




SELECT date_id, make_name, COUNT(DISTINCT lead_id) AS unique_leads,COUNT(DISTINCT partner_id)  AS unique_partners FROM DailySales GROUP BY date_id, make_name 


-- Intuition
-- The intuition behind the solution is to use the GROUP BY clause to group the rows of the DailySales table based on the date_id and make_name columns. This allows us to calculate the number of distinct lead_id's and partner_id's within each group.

-- Approach
-- The query uses the GROUP BY clause to group the rows of the DailySales table based on the date_id and make_name columns.

-- Within each group, we use the COUNT(DISTINCT lead_id) function to calculate the number of distinct lead_id's and the COUNT(DISTINCT partner_id) function to calculate the number of distinct partner_id's.

-- The result is a table with the date_id, make_name, unique_leads, and unique_partners columns, representing the distinct lead_id count and partner_id count for each date and make.

-- The query returns the result table in any order.