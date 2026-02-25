-- Write your PostgreSQL query statement below
select name AS Customers from Customers
where id not in(select customerId from Orders)