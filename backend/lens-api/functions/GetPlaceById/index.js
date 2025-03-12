// import { db } from '../../services/index.js';
// import { sendResponse, sendError } from '../../responses/index.js';

// export const getPlaceById = async (event) => {
//     const { continent, placeId } = event.pathParameters;
//     console.log(`Fetching place with ID: ${placeId} from continent: ${continent}`);

//     const params = {
//         TableName: process.env.DYNAMODB_TABLE,
//         KeyConditionExpression: 'PK = :pk AND SK = :sk',
//         ExpressionAttributeValues: {
//             ':pk': `continent#${continent}`,
//             ':sk': `place#${placeId}`
//         }
//     };
//     try {
//         const result = await db.query(params);
//         if (result.Items.lenght === 0) {
//             return sendError(404, `Place with ID ${placeId} not found in continent: ${continent}`);
//         }

//         const place = result.Items[0];
//         const response = {
//             id: placeId,
//             title: place.title,
//             country: place.country,
//             category: place.category,
//             description: place.description,
//             video: place.video,
//             image: place.image,
//             linkInfo: place.linkInfo,
//             location: place.location
//         };

//         return sendResponse(200, response);

//     } catch (error) {
//         console.error('Error fetching place:', error);
//         return sendError(500, 'Error fetching place');
//     }

// };


import { db } from '../../services/index.js';
import { sendResponse, sendError } from '../../responses/index.js';

export const getPlaceById = async (event) => {
    const { continent, placeId } = event.pathParameters;
    console.log(`Fetching place with ID: ${placeId} from continent: ${continent}`);

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            PK: `continent#${continent}`,
            SK: `place#${placeId}`
        }
    };

    try {
        const result = await db.get(params);

        if (!result.Item) {
            return sendError(404, `Place with ID ${placeId} not found in continent: ${continent}`);
        }

        const place = result.Item;
        const response = {
            id: placeId,
            title: place.title,
            country: place.country,
            category: place.category,
            description: place.description,
            video: place.video,
            image: place.image,
            linkInfo: place.linkInfo,
            location: place.location
        };

        return sendResponse(200, response);

    } catch (error) {
        console.error('Error fetching place:', error);
        return sendError(500, 'Error fetching place');
    }
};
