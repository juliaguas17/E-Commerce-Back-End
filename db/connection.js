const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    // SQL username
    user: 'root',
    // SQL password
    password: '',
    database: 'ecommerce_db'
});

module.exports = db;