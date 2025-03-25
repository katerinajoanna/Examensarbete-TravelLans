import { db } from '../../services/index.js';
import { sendResponse, sendError } from '../../responses/index.js';

export const deletePlace = async (event) => {
    const { continent, placeId } = event.pathParameters;

    console.log(`Deleting place: ${placeId} from continent: ${continent}`);

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            PK: `continent#${continent}`,
            SK: `place#${placeId}`
        }
    };

    try {
        const result = await db.delete(params);

        if (result) {
            return sendResponse(200, { message: `Place ${placeId} deleted successfully` });
        }

        return sendError(404, `Place ${placeId} not found.`);
    } catch (error) {
        console.error('Error deleting place:', error);
        return sendError(500, 'Error deleting place');
    }
};
