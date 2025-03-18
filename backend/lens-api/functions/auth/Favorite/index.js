import { db } from "../../../services/index.js";
import { sendResponse, sendError } from "../../../responses/index.js";
import { v4 as uuidv4 } from "uuid";

export const addFavorite = async (event) => {
    try {
        const { placeId, continent, userId, deviceId } = JSON.parse(event.body);

        if (!placeId || !continent) {
            return sendError(400, "Place ID and continent are required.");
        }

        if (!userId && !deviceId) {
            return sendError(400, "User ID or device ID is required.");
        }

        const pk = userId ? `USER#${userId}` : `DEVICE#${deviceId}`;
        const favoriteId = uuidv4();

        const newFavorite = {
            PK: pk,
            SK: `FAVORITE#${continent}#${favoriteId}`,
            placeId,
            continent,
            createdAt: new Date().toISOString(),
        };

        await db.put({
            TableName: process.env.DYNAMODB_FAVORITES_TABLE, // Nowa tabela!
            Item: newFavorite,
        });

        return sendResponse(201, { message: "Favorite added successfully!", favoriteId });

    } catch (error) {
        console.error("Error adding favorite:", error);
        return sendError(500, "Something went wrong.");
    }
};
