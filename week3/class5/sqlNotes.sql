-- You can comment sql script, using --

-- in sql a javascript string is equivalent to a sql VARCHAR (varying characters)

-- in sql we use single quotes for varchars

-- to add a record
INSERT INTO users VALUES(1, 'MIKE', 'Developer', 1);

-- to fetch all the records and all the columns
SELECT * FROM users;

-- to fetch some of the columns you can specify them in the select clause
SELECT name, occupation FROM users;

-- to fetch some of the rows but not all, add a WHERE clause clause to limit the data

-- this will return all active users
SELECT * FROM users where is_active = 1;

-- this will return all users with id 2
SELECT * FROM users where _id = 2;

-- you can combine limiting rows and columns in the query
-- fetch the names of the active users
SELECT name FROM users where is_active = 1;

-- to delete users with _id 1
DELETE FROM users where _id = 1;

-- to delete all not active users
DELETE FROM users where is_active = 0;

-- WHERE clause is used to limit records/rows
-- WHERE clause can match on multiple criteria

-- fetch users that are active and are developers
SELECT * FROM users
where is_active = 1 AND occupation = 'Developer'

-- fetch users that are bakers and have an id > 20
SELECT * FROM users
where occupation = 'Baker' AND _id > 20;

-- fetch users that are either bakers or developers with id > 20
SELECT * FROM users
where occupation = 'Baker' OR (occupation = 'Developer' AND _id > 20);

