import dotenv from "dotenv";
dotenv.config();        // Laddar miljövariabler

import { db } from "../../../services/index.js";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { sendResponse, sendError } from "../../../responses/index.js";
import { validateUser } from "../../../middleware/validateUser.js";

async function generateUniqueId(db) {
    while (true) {
        const uniqueId = uuidv4().slice(0, 7);
        const result = await db.get({
            TableName: process.env.DYNAMODB_USERS_TABLE,
            Key: { PK: `USER_ID#${uniqueId}`, SK: `PROFILE` },
        });

        if (!result.Item) return uniqueId;
    }
}

export const registerUser = async (event) => {
    try {
        // Validering av indata
        const validationError = validateUser(event);
        if (validationError) return validationError;

        const { username, email, password, country, city } = JSON.parse(event.body);

        // Kontrollerar om användaren redan finns
        const checkUser = await db.get({
            TableName: process.env.DYNAMODB_USERS_TABLE,
            Key: { PK: `USER#${username}`, SK: `PROFILE` },
        });

        if (checkUser.Item) return sendError(400, "The username is already taken.");

        // Kontrollera om e-post redan används
        const checkEmail = await db.scan({
            TableName: process.env.DYNAMODB_USERS_TABLE,
            FilterExpression: "email = :email",
            ExpressionAttributeValues: { ":email": email },
        });

        const adminEmails = process.env.ADMIN_EMAILS.split(","); // Hämtar administratörslista från .env
        const role = adminEmails.includes(email) ? "admin" : "user";


        if (checkEmail.Items?.length > 0) return sendError(400, "This email is already registered.");

        // Lösenordshasning
        const hashedPassword = await bcrypt.hash(password, 10);

        // Skapar ett unikt ID
        const userId = await generateUniqueId(db);

        // Skapa en användare
        const user = {
            PK: `USER#${username}`,
            SK: "PROFILE",
            id: userId,
            email,
            username,
            password: hashedPassword,
            country,
            city,
            role,
            createdAt: new Date().toISOString(),
        };

        await db.put({
            TableName: process.env.DYNAMODB_USERS_TABLE,
            Item: user,
        });

        return sendResponse(201, { message: "Registration completed successfully!" });

    } catch (error) {
        console.error("Registration error:", error);
        return sendError(500, "Something went wrong");
    }
};
