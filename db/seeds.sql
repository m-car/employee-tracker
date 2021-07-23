USE employee_db;

INSERT INTO department (id, dept_name)
VALUES (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"),
        (4, "Legal");
     
-- create roles
INSERT INTO roles (id, title, salary)
VALUES (1, "Sales Lead", 100000),
        (2, "Salesperson", 80000),
        (3, "Lead Engineer", 150000),
        (4, "Software Engineer", 120000),
        (5, "Accountant", 125000),
        (6, "Legal Team Lead", 250000),
        (7, "Lawyer", 190000);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1,"john","Doe", 1 ),
(2, "Mike","Chan", 2 ),
(3, "Ashley","Rodriguez", 3 ),
(4, "Kevin","Tupik", 4 ),
(5, "Malia","Brown", 5 ),
(6, "Sarah","Lourd", 6 ),
(7, "Tom","Allen", 7 ),
(8, "Christian","Eckenrode", 3 );

-- SELECT * FROM roles;