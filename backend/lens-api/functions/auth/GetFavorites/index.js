import { db } from "../../../services/index.js";
import { sendResponse, sendError } from "../../../responses/index.js";

export const getFavorites = async (event) => {
    try {
        const { userId } = event.pathParameters;

        if (!userId) {
            return sendError(400, "User ID is required.");
        }

        const params = {
            TableName: process.env.DYNAMODB_FAVORITES_TABLE,
            KeyConditionExpression: "PK = :pk",
            ExpressionAttributeValues: {
                ":pk": `USER#${userId}`
            }
        };

        const result = await db.query(params);

        const favorites = result.Items.map(item => ({
            id: item.SK.replace("FAVORITE#", ""),
            placeId: item.placeId,
            continent: item.continent,
            createdAt: item.createdAt
        }));

        return sendResponse(200, { favorites });

    } catch (error) {
        console.error("Error fetching favorites:", error);
        return sendError(500, "Error fetching favorites.");
    }
};
