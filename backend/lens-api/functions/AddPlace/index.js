
// import { db } from '../../services/index.js';
// import { sendResponse, sendError } from '../../responses/index.js';

// export const addPlace = async (event) => {
//     try {
//         const body = JSON.parse(event.body);

//         const { continent, title, description, video, image, linkInfo, category, country, location } = body;

//         if (!continent || !title || !description || !category || !country) {
//             return sendError(400, 'Missing required fields');
//         }

//         // Pobierz aktualną liczbę miejsc w danym kontynencie
//         const queryParams = {
//             TableName: process.env.DYNAMODB_TABLE,
//             KeyConditionExpression: 'PK = :pk AND begins_with(SK, :placePrefix)',
//             ExpressionAttributeValues: {
//                 ':pk': `continent#${continent}`,
//                 ':placePrefix': 'place#'
//             }
//         };

//         const result = await db.query(queryParams);

//         const nextId = result.Count + 1;  // Nowy placeId = liczba istniejących miejsc + 1

//         const params = {
//             TableName: process.env.DYNAMODB_TABLE,
//             Item: {
//                 PK: `continent#${continent}`,
//                 SK: `place#${nextId}`,
//                 id: nextId,  // moge dodać to, by miec id w objekcie
//                 title,
//                 description,
//                 video,
//                 image,
//                 linkInfo,
//                 category,
//                 country,
//                 location
//             }
//         };

//         await db.put(params);

//         return sendResponse(201, { message: 'Place created', placeId: nextId });
//     } catch (error) {
//         console.error('Error creating place:', error);
//         return sendError(500, 'Error creating place');
//     }
// };


import { v4 as uuidv4 } from 'uuid';
import { db } from '../../services/index.js';
import { sendResponse, sendError } from '../../responses/index.js';

export const addPlace = async (event) => {
    try {
        const body = JSON.parse(event.body);

        const { continent, title, description, video, image, linkInfo, category, country, location } = body;

        if (!continent || !title || !description || !category || !country) {
            return sendError(400, 'Missing required fields');
        }

        // Pobieram aktualną liczbę miejsc w danym kontynencie
        const queryParams = {
            TableName: process.env.DYNAMODB_TABLE,
            KeyConditionExpression: 'PK = :pk AND begins_with(SK, :placePrefix)',
            ExpressionAttributeValues: {
                ':pk': `continent#${continent}`,
                ':placePrefix': 'place#'
            }
        };

        const result = await db.query(queryParams);

        const nextId = result.Count + 1;  // Nowy placeId = liczba istniejących miejsc + 1

        //  ID będzie 4-cyfrowe
        const placeId = nextId.toString().padStart(4, '0');  // Dodanie zer wiodących, np. 0001, 0002 itd.

        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Item: {
                PK: `continent#${continent}`,
                SK: `place#${placeId}`,  // 4-cyfrowe ID
                id: placeId,  // Używam 4-cyfrowego ID
                title,
                description,
                video,
                image,
                linkInfo,
                category,
                country,
                location
            }
        };

        await db.put(params);

        return sendResponse(201, { message: 'Place created', placeId });
    } catch (error) {
        console.error('Error creating place:', error);
        return sendError(500, 'Error creating place');
    }
};
