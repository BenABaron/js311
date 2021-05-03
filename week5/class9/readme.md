EMPLOYEES
1. I want to get a list of all employees
  I expect an array of employees

2. I want to search for an employee by id
  I expect an individual employee object or a 404 not found

3. I want to search for an employee by first name
  I expect an individual employee object or a 404 not found

DEPARTMENTS
4. I want to get a list of all departments
  I expect an array of departments

5. I want to get the details for the department by department id
  I expect a single department object or a 404 not found

6. I want to get info about the managers for the department by department id
  I expect an array that has the managers info (firstname, lastname, id), and the dates they were active

7. I want to get the list of employees for the department by department id
  I expect an array that has the employees info (firstname, lastname, id), and the dates they were active

SALARIES
8. I want to get info about the salaries for a an employee by an employee id
  I expect an array of salary info (the salary and the effective dates of the salary)

**ALL GETS**

- need to set up the github repo
- probably need to set up the database first!
- figure out sql calls (you can do this in workbench)
- need to set up the js node project
- need to set up the index, controller, router, and connection modules
- need to agree on what the routes (verb + path) look like