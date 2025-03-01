
import { db } from '../../services/index.js';
import { sendResponse, sendError } from '../../responses/index.js';
import { v4 as uuidv4 } from 'uuid';

export const addPlace = async (event) => {
    try {
        const body = JSON.parse(event.body);

        const { continent, title, description, video, image, linkInfo, category, country } = body;

        if (!continent || !title || !description || !category || !country) {
            return sendError(400, 'Missing required fields');
        }

        const placeId = uuidv4().replace(/-/g, '').substring(0, 5);  // usuwamy myślniki i bierzemy pierwsze 5 znaków
        console.log(placeId);

        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Item: {
                PK: `continent#${continent}`,
                SK: `place#${placeId}`,   // tutaj krótkie ID
                title,
                description,
                video,
                image,
                linkInfo,
                category,
                country
            }
        };

        await db.put(params);

        return sendResponse(201, { message: 'Place created', placeId });
    } catch (error) {
        console.error('Error creating place:', error);
        return sendError(500, 'Error creating place');
    }
};
