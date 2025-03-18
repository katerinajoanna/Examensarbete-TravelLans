
// import { db } from '../../../services/index.js';
// import { sendResponse, sendError } from '../../../responses/index.js';

// export const getNotes = async (event) => {
//     const { continent } = event.pathParameters;

//     console.log(`Fetching notes for continent: ${continent}`);

//     const params = {
//         TableName: process.env.DYNAMODB_NOTES_TABLE,
//         FilterExpression: 'begins_with(SK, :notePrefix)',
//         ExpressionAttributeValues: {
//             ':notePrefix': `NOTE#${continent}#`
//         }
//     };

//     try {
//         const result = await db.scan(params);

//         const notes = result.Items.map(item => ({
//             id: item.SK.replace(`NOTE#${continent}#`, ''),
//             username: item.username,
//             city: item.city,
//             country: item.country,
//             content: item.note,
//             createdAt: item.createdAt
//         }));

//         if (notes.length === 0) {
//             return sendResponse(200, { message: `No notes found for ${continent}`, notes: [] });
//         }

//         return sendResponse(200, { notes });

//     } catch (error) {
//         console.error('Error fetching notes:', error);
//         return sendError(500, 'Error fetching notes');
//     }
// };



// //nowy kod po dodaniu tabeli
import { db } from "../../../services/index.js";
import { sendResponse, sendError } from "../../../responses/index.js";

export const getNotes = async (event) => {
    try {
        const { continent } = event.pathParameters;

        if (!continent) {
            return sendError(400, "Continent is required.");
        }

        console.log(`Fetching notes for continent: ${continent}`);

        const params = {
            TableName: process.env.DYNAMODB_NOTES_TABLE,
            KeyConditionExpression: "PK = :pk",
            ExpressionAttributeValues: {
                ":pk": `CONTINENT#${continent}`
            }
        };

        const result = await db.query(params);


        const notes = result.Items.map(item => ({
            id: item.SK.replace("NOTE#", ""),
            username: item.username || "Unknown",
            city: item.city || "Unknown",
            country: item.country || "Unknown",
            content: item.note || "No content",
            createdAt: item.createdAt
        }));

        return sendResponse(200, { notes });

    } catch (error) {
        console.error("Error fetching notes:", error);
        return sendError(500, "Error fetching notes.");
    }
};
