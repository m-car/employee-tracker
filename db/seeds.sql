USE employee_db;

-- create roles
INSERT INTO roles (id, title, salary)
VALUES (1, "Sales Lead", 100000),
        (2, "Salesperson", 80000),
        (3, "Lead Engineer", 150000),
        (4, "Software Engineer", 120000),
        (5, "Accountant", 125000),
        (6, "Legal Team Lead", 250000),
        (7, "Lawyer", 190000);

-- SELECT * FROM roles;