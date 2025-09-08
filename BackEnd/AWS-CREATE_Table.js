import AWS from 'aws-sdk';




// Configure AWS SDK
AWS.config.update({
    region: 'us-east-1',
    accessKeyId: process.env.DB_USER,
    secretAccessKey: process.env.DB_PASS
});

const rdsdataservice = new AWS.RDSDataService();

const params = {
    resourceArn: 'arn:aws:rds:us-east-1:140023364293:cluster:your-cluster-name', // Your Aurora cluster ARN
    secretArn: 'arn:aws:secretsmanager:us-east-1:140023364293:secret:your-secret-name', // Secret ARN for DB credentials
    database: 'userCredentialsDB',
    sql: `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            name VARCHAR(100) NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    `
};

async function createTable() {
    try {
        const result = await rdsdataservice.executeStatement(params).promise();
        console.log('Table created successfully:', result);
    } catch (error) {
        console.error('Error creating table:', error);
    }
}

createTable();