import { verifyToken } from "../../../middleware/verifyToken.js";
import { db } from "../../../services/index.js";
import { sendResponse, sendError } from "../../../responses/index.js";
import { v4 as uuidv4 } from "uuid";

export const addNote = async (event) => {
    try {
        const userData = verifyToken(event);
        if (!userData || !userData.id) {
            return sendError(401, "Unauthorized.");
        }

        const { note, continent, city, country } = JSON.parse(event.body);

        if (!note || !continent) {
            return sendError(400, "Note and continent are required.");
        }

        const noteId = uuidv4();
        const newNote = {
            PK: `CONTINENT#${continent}`,
            SK: `NOTE#${uuidv4()}`,
            username: userData.username || "Unknown",
            city: userData.city || "Unknown",
            country: userData.country || "Unknown",
            note,
            continent,
            userId: userData.id,
            createdAt: new Date().toISOString(),
        };

        await db.put({
            TableName: process.env.DYNAMODB_NOTES_TABLE,
            Item: newNote,
        });

        return sendResponse(201, { message: "Note added successfully!", noteId });

    } catch (error) {
        console.error("Error adding note:", error);
        return sendError(500, "Something went wrong.");
    }
};
