// REQUIRES
const conn = require('../config/connection');



// FUNCTIONS
async function selectAll(table) {
    const [data] = await conn.query('SELECT * FROM ??', [table]);
    return data;
}

async function selectLastInsert(table) {
    const [data] = await conn.query('SELECT * FROM ?? WHERE id = (SELECT LAST_INSERT_ID())', [table]);
    return data[0];
}

async function insertOne(table, item) {
    await conn.query('INSERT INTO ?? SET ?',
        [
            table,
            item
        ]);
}

async function updateOneWhere(table, columnMod, columnModVal, columnCheck, columnCheckVal) {
    await conn.query('UPDATE ?? SET ?? = ? WHERE ?? = ?',
        [
            table,
            columnMod,
            columnModVal,
            columnCheck,
            columnCheckVal
        ]);
}



// EXPORTS
module.exports = {
    selectAll: selectAll,
    selectLastInsert: selectLastInsert,
    insertOne: insertOne,
    updateOneWhere: updateOneWhere
};