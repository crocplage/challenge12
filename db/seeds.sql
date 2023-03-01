USE employee_db;
INSERT INTO department(id, name)
VALUES
(1, "Human Resrources"),
(2, "Front Desk"),
(3, "Housekeeping"),
(4, "Engineering"),
(5, "Events"),
(6, "Sales");

INSERT INTO role(id, title, salary, department_id)
VALUES
(1, "HR Director", 100000, 1),
(2, "FD Director", 100000, 2),
(3, "HK Supervisor", 40000, 3),
(4, "Engineer", 100000, 4),
(5, "Events Coordinator", 80000, 5),
(6, "Sales Person", 70000, 6);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'Clara", "Villareal', 1, NULL),
(2, "Claudia", "Robinson", 2, NULL),
(3, "Malene", "Kirk", 3, NULL),
(4, "Zak", "Gates", 4, NULL),
(5, "Mo", "Sean", 5, NULL),
(6, "Hobart", "kim", 6, NULL);
