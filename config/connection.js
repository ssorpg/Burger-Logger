// REQUIRES
const mysql = require('mysql2/promise');
const keys = require('./keys');



// MYSQL PARAMS
const pool = mysql.createPool({
    host: keys.mySQL.host,
    user: keys.mySQL.username,
    password: keys.mySQL.password,
    database: keys.mySQL.database
});



// FUNCTION CALLS
module.exports = pool;