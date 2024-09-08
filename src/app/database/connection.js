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

/**
 * Execute a sql with or without values
 * @param {string} sql sql instruction to be executed
 * @param {string=id | [selecao, id]} values values to passed into the sql
 * @param {string} rejectMessage message to be showed
 * @returns {Promise<unknown>}
 */
export const query = (sql, values = '', rejectMessage) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (error, result) => {
            if (error) return reject(rejectMessage)

            const rows = JSON.parse(JSON.stringify(result))
            return resolve(rows)
        })
    })
}

export default connection