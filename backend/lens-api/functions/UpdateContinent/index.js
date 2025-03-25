import { db } from '../../services/index.js';
import { sendResponse, sendError } from '../../responses/index.js';

export const updateContinent = async (event) => {
    const { continent } = event.pathParameters;
    const body = JSON.parse(event.body);


    const { description, video, image } = body;

    if (!description && !video && !image) {
        return sendError(400, 'No fields provided to update');
    }

    // Budowanie UpdateExpression tylko dla przesłanych pól
    const updateExpressions = [];
    const expressionAttributeNames = {};
    const expressionAttributeValues = {};

    if (description !== undefined) {
        updateExpressions.push('#description = :description');
        expressionAttributeNames['#description'] = 'description';
        expressionAttributeValues[':description'] = description;
    }
    if (video !== undefined) {
        updateExpressions.push('#video = :video');
        expressionAttributeNames['#video'] = 'video';
        expressionAttributeValues[':video'] = video;
    }
    if (image !== undefined) {
        updateExpressions.push('#image = :image');
        expressionAttributeNames['#image'] = 'image';
        expressionAttributeValues[':image'] = image;
    }

    // Parametry aktualizacji w bazie danych
    const updateParams = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            PK: `continent#${continent}`,
            SK: 'metadata',
        },
        UpdateExpression: `SET ${updateExpressions.join(', ')}`,  // Łączenie wyrażeń
        ExpressionAttributeNames: expressionAttributeNames,
        ExpressionAttributeValues: expressionAttributeValues,
        ReturnValues: 'ALL_NEW',     // Zwrócenie zaktualizowanych danych
    };

    try {
        // Asynchroniczna operacja aktualizacji w DynamoDB
        const result = await new Promise((resolve, reject) => {
            db.update(updateParams, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });

        return sendResponse(200, {
            message: `Continent ${continent} updated successfully`,
            updatedData: result.Attributes
        });
    } catch (error) {
        console.error('Error updating continent:', error);
        return sendError(500, 'Error updating continent');
    }
}