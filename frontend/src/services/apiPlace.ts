const BASE_URL = 'https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/';

export const featchPlace = async (continent: string, category: string) => {
    try {
        const response = await fetch(`${BASE_URL}continent/${continent}/places?category=${category}`);
        console.log(`Fetching data from: ${BASE_URL}continent/${continent}/places?category=${category}`);

        if (!response.ok) {
            console.error('Response status:', response.status);
            throw new Error('Misslikades att hämta platser')
        }
        return await response.json();
    } catch (error) {
        console.error(`Det gick inte att hämta platser för${category} in ${continent}:`, error);
        throw error;
    }
}