const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    // SQL username
    user: 'root',
    // SQL password
    password: 'Jw201734!',
    database: 'ecommerce_db'
});

module.exports = db;