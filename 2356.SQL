// 2356. Number of Unique Subjects Taught by Each Teacher


// +-------------+------+
// | Column Name | Type |
// +-------------+------+
// | teacher_id  | int  |
// | subject_id  | int  |
// | dept_id     | int  |
// +-------------+------+
// (subject_id, dept_id) is the primary key (combinations of columns with unique values) of this table.
// Each row in this table indicates that the teacher with teacher_id teaches the subject subject_id in the department dept_id.
 

// Write a solution to calculate the number of unique subjects each teacher teaches in the university.

// Return the result table in any order.

// The result format is shown in the following example.

 

// Example 1:

// Input: 
// Teacher table:
// +------------+------------+---------+
// | teacher_id | subject_id | dept_id |
// +------------+------------+---------+
// | 1          | 2          | 3       |
// | 1          | 2          | 4       |
// | 1          | 3          | 3       |
// | 2          | 1          | 1       |
// | 2          | 2          | 1       |
// | 2          | 3          | 1       |
// | 2          | 4          | 1       |
// +------------+------------+---------+
// Output:  
// +------------+-----+
// | teacher_id | cnt |
// +------------+-----+
// | 1          | 2   |
// | 2          | 4   |
// +------------+-----+
// Explanation: 
// Teacher 1:
//   - They teach subject 2 in departments 3 and 4.
//   - They teach subject 3 in department 3.
// Teacher 2:
//   - They teach subject 1 in department 1.
//   - They teach subject 2 in department 1.
//   - They teach subject 3 in department 1.
//   - They teach subject 4 in department 1.


SELECT teacher_id, COUNT(DISTINCT subject_id) AS cnt FROM Teacher GROUP BY teacher_id 



-- LET'S BREAK IT DOWN
-- unique : straightup think of using distinct
-- number : straight think of using COUNT function
-- We'll also be using Group by, more to that later on just keep reading

-- Approach
-- 1- SELECT the teacher_id : We'd like to return each teacher's id alongside with the number of unique subjects(more to that later)
-- 2- As I have mentioned number --> use COUNT function
-- But what are we going to count?
-- The number of subjects , we then name the variable as required and showed in the output ( cnt)
-- Let's look at the code

-- count(distinct subject_id ) as cnt
-- But wait it's missing something...
-- If you were to submit , it would probably generate an error and I have mentioned earlier they explicitly specified that we need unique subjects ---> use DISTINCT
-- ps: Whenever you see unique in a question immediately think of using distinct

-- 3- NOW WE USE GROUP BY :

-- We usually use group by with an aggregate function like :COUNT, SUM, AVG, MAX or MIN etc..
-- What it basically does is that it groups rows sharing the same values in a somehow specified column or columns.
-- In our Case we're using ** Group by ** , to group the courses by teacher_id , which means that we will get one row for each unique course.