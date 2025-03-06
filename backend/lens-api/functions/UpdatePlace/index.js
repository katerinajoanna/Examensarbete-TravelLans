import { db } from '../../services/index.js';
import { sendResponse, sendError } from '../../responses/index.js';


export const updatePlace = async (event) => {
    const { continent, placeId } = event.pathParameters;
    const body = JSON.parse(event.body);

    const { title, description, video, image, linkInfo } = body;

    if (!title && !description && !video && !image && !linkInfo) {
        return sendError(400, 'No fields provided to update');
    }

    const updateParams = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            PK: `continent#${continent}`,
            SK: `place#${placeId}`,
        },
        UpdateExpression: 'SET #title = :title, #description = :description, #video = :video, #image = :image, #linkInfo = :linkInfo',
        ExpressionAttributeNames: {
            '#title': 'title',
            '#description': 'description',
            '#video': 'video',
            '#image': 'image',
            '#linkInfo': 'linkInfo',
        },
        ExpressionAttributeValues: {
            ':title': title || null,
            ':description': description || null,
            ':video': video || null,
            ':image': image || null,
            ':linkInfo': linkInfo || null,
        },
        ReturnValues: 'ALL_NEW',
    };

    try {
        //newPromis , opakowuje w obiekt Promise by await byl uzyty asynchronicznie
        const result = await new Promise((resolve, reject) => {
            db.update(updateParams, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });

        return sendResponse(200, { message: `Place ${placeId} updated successfully`, updatedData: result.Attributes });
    } catch (error) {
        console.error('Error updating place:', error);
        return sendError(500, 'Error updating place');
    }
};
