USE burgers_db;

INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ('Big Mac', false),
    ('Big Mac', true),
    ('Cheeseburger', false),
    ('Cheeseburger', true),
    ('Onion and Avocado', false),
    ('Onion and Avocado', true);

SELECT *
FROM burgers;