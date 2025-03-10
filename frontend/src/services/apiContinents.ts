const BASE_URL = 'https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/'

export const fetchContinents = async () => {
    try {
        const response = await fetch(`${BASE_URL}continents`);
        if (!response.ok) {
            throw new Error('Det gick inte att hämta kontinenter');
        }
        const jsonResponse = await response.json();
        console.log('API Response:', jsonResponse);

        return jsonResponse.data;
    } catch (error) {
        console.error('Fel vid hämtning av kontinenter:', error);
        throw error;
    }
};