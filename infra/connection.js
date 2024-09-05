console.log('Starting server...');

import mysql from "mysql2"

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'node-express',
})

connection.connect((error) => {
    if (error) {
        console.error('Database connection failed:', error);
    } else {
        console.log('Connected to database.');
    }
});

export default connection