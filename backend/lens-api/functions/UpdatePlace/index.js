import { db } from '../../services/index.js';
import { sendResponse, sendError } from '../../responses/index.js';

export const updatePlace = async (event) => {
    const { continent, placeId } = event.pathParameters;
    const body = JSON.parse(event.body);

    const { title, description, video, image, linkInfo } = body;

    // Sprawdzamy, czy przynajmniej jedno pole jest podane
    if (!title && !description && !video && !image && !linkInfo) {
        return sendError(400, 'No fields provided to update');
    }

    // Dynamicznie tworzony UpdateExpression i ExpressionAttributeValues
    const updateExpression = [];
    const expressionValues = {};
    const expressionNames = {};

    if (title) {
        updateExpression.push('#title = :title');
        expressionValues[':title'] = title;
        expressionNames['#title'] = 'title';
    }
    if (description) {
        updateExpression.push('#description = :description');
        expressionValues[':description'] = description;
        expressionNames['#description'] = 'description';
    }
    if (video) {
        updateExpression.push('#video = :video');
        expressionValues[':video'] = video;
        expressionNames['#video'] = 'video';
    }
    if (image) {
        updateExpression.push('#image = :image');
        expressionValues[':image'] = image;
        expressionNames['#image'] = 'image';
    }
    if (linkInfo) {
        updateExpression.push('#linkInfo = :linkInfo');
        expressionValues[':linkInfo'] = linkInfo;
        expressionNames['#linkInfo'] = 'linkInfo';
    }

    const updateParams = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            PK: `continent#${continent}`,
            SK: `place#${placeId}`,
        },
        UpdateExpression: `SET ${updateExpression.join(', ')}`,  // Łączenie wszystkich pól do aktualizacji
        ExpressionAttributeNames: expressionNames,
        ExpressionAttributeValues: expressionValues,
        ReturnValues: 'ALL_NEW',
    };

    try {
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

