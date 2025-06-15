import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
dotenv.config();

const client = new DynamoDBClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWSDynamoDBAccessKey,
        secretAccessKey: process.env.AWSDynamoDBSecretAccessKey,
    },
});

const dynamoDB = DynamoDBDocumentClient.from(client);

export const writeEntry = async (email, entry) => {
    const params = {
        TableName: "UserEntries",
        Item: {
            email,
            dayStamp: new Date().toISOString().split("T")[0],
            entry,
            createdAt: new Date().toISOString(),
        },
    };

    try {
        await dynamoDB.send(new PutCommand(params));
        console.log("Entry saved!");
    } catch (err) {
        console.error("Error writing entry:", err);
        throw err;
    }
};

export const getEntries = async (email) => {
    const params = {
        TableName: "UserEntries",
        KeyConditionExpression: "email = :email",
        ExpressionAttributeValues: {
            ":email": email,
        },
    };

    try {
        const result = await dynamoDB.send(new QueryCommand(params));
        return result.Items;
    } catch (err) {
        console.error("Error getting entries:", err);
        throw err;
    }
};
