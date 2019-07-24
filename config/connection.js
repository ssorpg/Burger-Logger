// REQUIRES
const keys = require('./keys');
const mysql = require('mysql2/promise');



// MYSQL PARAMS
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: keys.mySQL.password,
    database: 'burgers_db'
});



// FUNCTION CALLS
module.exports = pool;