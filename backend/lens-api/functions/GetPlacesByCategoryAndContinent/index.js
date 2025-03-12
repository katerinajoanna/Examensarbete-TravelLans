import { db } from '../../services/index.js';
import { sendResponse, sendError } from '../../responses/index.js';

export const getPlacesByCategoryAndContinent = async (event) => {
    const { continent, category } = event.pathParameters;
    console.log(`Fetching places for continent: ${continent} and category: ${category}`);

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        KeyConditionExpression: 'PK = :pk AND begins_with(SK, :placePrefix)',
        ExpressionAttributeValues: {
            ':pk': `continent#${continent}`,
            ':placePrefix': 'place#'
        }
    };

    try {
        const result = await db.query(params);

        //Filtruje miejsca po kategorii
        const places = result.Items
            .filter(item => item.category.toLowerCase() === category.toLowerCase())
            .map(item => ({
                id: parseInt(item.SK.replace('place#', ''), 10),
                title: item.title,
                country: item.country,
                category: item.category,
                description: item.description,
                video: item.video,
                image: item.image,
                linkInfo: item.linkInfo,
                location: item.location
            }));

        if (places.length === 0) {
            return sendError(404, `No places found for category: ${category} in continent: ${continent}`);
        }
        return sendResponse(200, { continent, category, places });


    } catch (error) {
        console.error('Error fetching places:', error);
        return sendError(500, 'error fetching places');
    }
};
