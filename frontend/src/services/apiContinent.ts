const BASE_URL = 'https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/';

export const fetchContinent = async (continent: string) => {
    try {
        const response = await fetch(`${BASE_URL}continent/${continent}`);
        if (!response.ok) {
            throw new Error('Det gick inte att hämta kontinent data');
        }
        return await response.json();
    } catch (error) {
        console.error('Fel vid hämtning continent ${continent}:', error);
        throw error;
    }
};