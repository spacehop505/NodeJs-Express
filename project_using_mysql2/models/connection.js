const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-fruit',
    password: 'admin'
});

module.exports = pool.promise();