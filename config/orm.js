// REQUIRES
const conn = require('./connection');



// FUNCTIONS
async function selectAll() {
    const [data] = await conn.query('SELECT * FROM burgers');

    console.table(data);
}

async function insertOne(burger) {
    await conn.query('INSERT INTO burgers SET ?',
        [
            burger
        ]);

    await selectAll();
}

async function updateOne(burger) {
    await conn.query('UPDATE burgers SET ? WHERE id = ?',
        [
            burger,
            burger.id
        ]);

    await selectAll();
}



// FUNCTION CALLS
updateOne({ id: 1, burger_name: 'McFatty', devoured: true });