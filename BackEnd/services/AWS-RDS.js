
import { AWS_RDS_db } from '../MySQL_AWS_Aurora.js';


export async function printDatabaserecords() {
    try {
        const [results] = await AWS_RDS_db.query('SELECT * FROM users');
        console.log('Query results:', results);
    } catch (err) {
        console.error('Error executing query:', err);
    }
}

export async function testConnection() {
    try {
        const connection = await AWS_RDS_db.getConnection();
        console.log('Database connected successfully!');
        connection.release();
        return true;
    } catch (error) {
        console.error('Database connection failed:', error);
        return false;
    }
}
