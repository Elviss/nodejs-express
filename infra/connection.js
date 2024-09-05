console.log('Starting server...');

import mysql from "mysql2"
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
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