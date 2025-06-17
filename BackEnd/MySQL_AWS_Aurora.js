import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
dotenv.config();

// console.log('DB Config:', {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS ? '***hidden***' : 'undefined',
//     database: process.env.DB_NAME
// });
export const AWS_RDS_db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

