USE burgers_db;

INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ('Luger Burger', false),
    ('Big Mac', true),
    ('Double Animal Style', false),
    ('Cheeseburger', true),
    ('The Company Burger', false),
    ('The Original Burger', true);

SELECT *
FROM burgers;