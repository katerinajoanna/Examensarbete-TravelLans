import { db } from '../../services/index.js';
import { sendResponse, sendError } from '../../responses/index.js';


export const getAllContinents = async () => {
    try {
        const params = {
            TableName: process.env.DYNAMODB_TABLE,
        };

        const result = await db.scan(params); // Pobieram całą tabelę

        // Grupowanie danych
        const continentsMap = new Map();

        result.Items.forEach((item) => {
            const continentKey = item.PK.replace('continent#', '');

            if (item.SK === 'metadata') {
                // Tworzye obiekt kontynentu, jeśli go jeszcze nie ma
                if (!continentsMap.has(continentKey)) {
                    continentsMap.set(continentKey, {
                        name: item.name,
                        description: item.description,
                        video: item.video,
                        image: item.image || null,
                        continent: continentKey,
                        places: []
                    });
                }
            } else if (item.SK.startsWith('place#')) {
                // Dodaje miejsce do kontynentu
                const place = {
                    id: parseInt(item.SK.replace('place#', ''), 10),
                    title: item.title,
                    country: item.country,
                    category: item.category,
                    description: item.description,
                    video: item.video,
                    image: item.image,
                    linkInfo: item.linkInfo,
                    location: item.location
                };

                if (!continentsMap.has(continentKey)) {
                    // Kontynentu nie ma jeszcze (może być jakiś błąd, ale to zabezpieczenie)
                    continentsMap.set(continentKey, {
                        name: '',
                        description: '',
                        video: '',
                        image: null,
                        continent: continentKey,
                        places: []
                    });
                }

                continentsMap.get(continentKey).places.push(place);
            }
        });

        // Konwertuje mapę na tablicę
        const continents = Array.from(continentsMap.values());

        // Sortuje miejsca w każdym kontynencie po ID
        continents.forEach(continent => {
            continent.places.sort((a, b) => a.id - b.id);
        });

        return sendResponse(200, continents);
    } catch (error) {
        console.error('Error fetching all continents:', error);
        return sendError(500, 'Error fetching all continents');
    }
};
