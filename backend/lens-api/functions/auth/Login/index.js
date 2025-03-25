import dotenv from "dotenv";
dotenv.config();
console.log("JWT_SECRET:", process.env.JWT_SECRET);
import bcrypt from "bcryptjs";
import { db } from "../../../services/index.js";
import { sendResponse, sendError } from "../../../responses/index.js";
import { validateLogin } from "../../../middleware/validateLogin.js";
import { generateAccessToken, generateRefreshToken } from "../../../utils/generateTokens.js";

export const loginUser = async (event) => {
    try {
        const validationError = validateLogin(event);
        if (validationError) return validationError;

        const { username, email, password } = JSON.parse(event.body);
        const key = username ? `USER#${username}` : `EMAIL#${email}`;
        const userResult = await db.get({
            TableName: process.env.DYNAMODB_USERS_TABLE,
            Key: { PK: key, SK: "PROFILE" },
        });

        if (!userResult.Item) return sendError(400, "Invalid username or email");

        const user = userResult.Item;
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return sendError(400, "Invalid password");

        // Generowanie tokenów
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        return sendResponse(200, { message: "Login successful!", accessToken, refreshToken, role: user.role });

    } catch (error) {
        console.error("Login error:", error);
        return sendError(500, "Something went wrong");
    }
};
