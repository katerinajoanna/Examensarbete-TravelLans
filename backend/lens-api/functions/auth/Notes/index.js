import { verifyToken } from "../../../middleware/verifyToken.js";
import { db } from "../../../services/index.js";
import { sendResponse, sendError } from "../../../responses/index.js";
import { v4 as uuidv4 } from "uuid";

export const addNote = async (event) => {
    try {
        const userData = verifyToken(event); // Kontrollerar om användaren är inloggad
        //console.log("Dane użytkownika:", userData); 

        const { note, continent } = JSON.parse(event.body); // Vi laddar ner anteckningens innehåll och plats-ID

        if (!note || !continent) {
            return sendError(400, "Note and place ID are required.");
        }

        const noteId = uuidv4();
        const newNote = {
            PK: `USER#${userData.id}`,
            SK: `NOTE#${continent}#${noteId}`,
            username: userData.username,
            country: userData.country,
            city: userData.city,
            note,
            continent,
            createdAt: new Date().toISOString(),
        };

        console.log("New note to save:", newNote);

        await db.put({
            TableName: process.env.DYNAMODB_USERS_TABLE,
            Item: newNote,
        });

        return sendResponse(201, { message: "Note added successfully!", noteId });

    } catch (error) {
        return sendError(401, error.message);
    }
};
