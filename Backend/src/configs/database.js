const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'YOUR_USER_NAME',
    password: 'YOUR_PASSWORD',
    database: 'YOUR_DATABASE_NAME'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database .');
});

module.exports = db;
