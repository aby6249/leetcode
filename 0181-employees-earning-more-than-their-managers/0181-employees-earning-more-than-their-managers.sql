-- Write your PostgreSQL query statement below
SELECT e.name AS Employee FROM Employee e JOIN Employee f
ON e.managerId=f.id
WHERE e.salary > f.salary
 