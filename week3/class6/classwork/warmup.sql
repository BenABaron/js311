-- where clause: restrict the records

-- set the column names and the associated data types
-- create a new table called users
create table users (
  id int, -- number
  username varchar, --  string
  firstname varchar,
  lastname varchar,
  age int
);

-- will fetch all the columns and all the records in the users table
select * from users;

-- will fetch only the id and username for all the records in the users table
select id, username from users;

-- will fetch all the columns for the records where the firstname is equal to 'Mike' in the users table
select * from users where firstname = 'Mike';

-- will fetch all the columns for the records where the username is equal to 'mjohnson' or the lastname is equal to 'Smith'
select * from users where username = 'mjhonson' or lastname = 'Smith';

-- will fetch the username column for the records where age is greater than 65 or less than 18
-- will fetch the username of all "seniors and minors" in our database
select username from users where age > 65 or age < 18;

-- insert a record into sql
insert into users values (1, 'hsmith', 'Henry', 'Smith', 34);

insert into users (id, firstname, lastname) values (2, 'Maggie', 'Smith');

-- delete all records in the users table
-- REALLY DANGEROUS
delete from users;

-- delete user whose id = 7
delete from users where id = 7;

-- delete seniors and minors
delete from users where age > 65 or age < 18;

-- update every record in the users table to have the age = 21
update users set age = 21;

-- set the active column to false for the record with the id 7 
update users set active = false where id = 7;

