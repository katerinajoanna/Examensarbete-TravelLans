import { db } from '../../services/index.js';
import { sendResponse, sendError } from '../../responses/index.js';

export const getContinent = async (event) => {
    const { continent } = event.pathParameters;

    console.log(`Fetching data for continent: ${continent}`);

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        KeyConditionExpression: 'PK = :pk',
        ExpressionAttributeValues: {
            ':pk': `continent#${continent}`
        }
    };

    try {
        const result = await db.query(params);

        // Wyciągnięcie danych
        const metadataItem = result.Items.find(item => item.SK === 'metadata');
        const places = result.Items
            .filter(item => item.SK.startsWith('place#'))
            .map(item => ({
                id: item.SK.replace('place#', ''),
                title: item.title,
                country: item.country,
                category: item.category,
                description: item.description,
                video: item.video,
                image: item.image,
                linkInfo: item.linkInfo,
            }));

        if (!metadataItem) {
            return sendError(404, `Continent ${continent} not found.`);
        }

        const response = {
            name: metadataItem.name,
            description: metadataItem.description,
            video: metadataItem.video,
            places
        };

        return sendResponse(200, response);

    } catch (error) {
        console.error('Error fetching continent data:', error);
        return sendError(500, 'Error fetching continent data');
    }
};