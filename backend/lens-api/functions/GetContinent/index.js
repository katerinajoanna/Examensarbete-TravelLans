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

        if (!metadataItem) {
            return sendError(404, `Continent ${continent} not found.`);
        }

        //  sortowanie miejsc po ID
        places.sort((a, b) => a.id - b.id);

        const response = {
            name: metadataItem.name,
            description: metadataItem.description,
            video: metadataItem.video,
            image: metadataItem.image || null,
            places
        };

        return sendResponse(200, response);

    } catch (error) {
        console.error('Error fetching continent data:', error);
        return sendError(500, 'Error fetching continent data');
    }
};