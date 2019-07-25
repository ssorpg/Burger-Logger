// REQUIRES
const mysql = require('mysql2/promise');
const keys = require('./keys');



// MYSQL PARAMS
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: keys.mySQL.password,
    database: 'burgers_db'
});



// FUNCTION CALLS
module.exports = pool;