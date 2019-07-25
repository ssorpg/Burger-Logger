// REQUIRES
const conn = require('./connection');



// FUNCTIONS
async function selectAll(table) {
    const [data] = await conn.query('SELECT * FROM ??', [table]);
    return data;
}

async function selectWhere(table, columnCheck, columnCheckVal) {
    const [data] = await conn.query('SELECT * FROM ?? WHERE ?? = ?',
        [
            table,
            columnCheck,
            columnCheckVal
        ]);
    return data;
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
    selectWhere: selectWhere,
    insertOne: insertOne,
    updateOneWhere: updateOneWhere
};