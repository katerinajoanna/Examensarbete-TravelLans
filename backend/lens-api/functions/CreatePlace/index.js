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

        const placeId = uuidv4();  // unikalne id dla miejsca

        const params = {
            TableName: 'TravelLensTable',
            Item: {
                PK: `continent#${continent}`,
                SK: `place#${placeId}`,
                title,
                description,
                video,
                image,
                linkInfo,
                category,
                country
            }
        };

        await db.put(params);   // dodaje miejsca

        return sendResponse(201, { message: 'Place created', placeId });
    } catch (error) {
        console.error('Error creating place:', error);
        return sendError(500, 'Error creating place');
    }
};
