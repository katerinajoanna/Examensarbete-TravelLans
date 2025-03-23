import { db } from "../../../services/index.js";
import { sendResponse, sendError } from "../../../responses/index.js";
import { verifyToken } from "../../../middleware/verifyToken.js";

export const getUser = async (event) => {
    try {

        const userData = verifyToken(event);
        //console.log("Token decoded:", userData);

        if (!userData || !userData.username) {
            return sendError(400, "Invalid token or missing username");
        }

        const username = userData.username;
        const pk = `USER#${username}`;

        const params = {
            TableName: process.env.DYNAMODB_USERS_TABLE,
            Key: {
                PK: pk,
                SK: "PROFILE",
            },
        };

        const result = await db.get(params);

        if (!result.Item) {
            return sendError(404, "User not found");
        }

        return sendResponse(200, {
            username: result.Item.username,
            city: result.Item.city,
            country: result.Item.country,
        });

    } catch (error) {
        console.error("Error getting user data:", error);
        return sendError(500, "Error fetching user data");
    }
};
