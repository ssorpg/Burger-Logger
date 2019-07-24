// REQUIRES
const conn = require('./connection');



// FUNCTIONS
async function selectAll() {
    const [data] = await conn.query('SELECT * FROM burgers WHERE devoured = false');

    console.table(data);

    return data;
}

async function insertOne(burger) {
    await conn.query('INSERT INTO burgers SET ?',
        [
            burger
        ]);
}

async function updateOne(burger) {
    await conn.query('UPDATE burgers SET ? WHERE id = ?',
        [
            burger,
            burger.id
        ]);
}



// EXPORTS
module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
};