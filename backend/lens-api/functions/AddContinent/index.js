import { db } from '../../services/index.js';
import { sendResponse, sendError } from '../../responses/index.js';

export const addContinent = async (event) => {
    try {
        const body = JSON.parse(event.body);

        const { continent, name, description, video } = body;

        if (!continent || !name || !description || !video) {
            return sendError(400, 'Missing required fields');
        }

        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Item: {
                PK: `continent#${continent}`,
                SK: 'metadata',
                name,
                description,
                video
            }
        };

        await db.put(params);   //dodaje kontynent

        return sendResponse(201, { message: 'Continent created' });
    } catch (error) {
        console.error('Error creating continent:', error);
        return sendError(500, 'Error creating continent');
    }
};
