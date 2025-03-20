const BASE_URL = 'https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/';

// Anrop för att hämta platser
export const fetchPlace = async (continent: string, category: string) => {
    try {
        const response = await fetch(`${BASE_URL}continent/${continent}/places?category=${category}`);
        console.log(`Fetching data from: ${BASE_URL}continent/${continent}/places?category=${category}`);

        if (!response.ok) {
            console.error('Response status:', response.status);
            throw new Error('Misslyckades med att hämta platser')
        }
        return await response.json();
    } catch (error) {
        console.error(`Det gick inte att hämta platser för${category} in ${continent}:`, error);
        throw error;
    }
};

// Anrop för att hämta kategorier för en kontinent
export const fetchCategoryPlaces = async (continent: string, category: string) => {
    const url = `https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/places/${encodeURIComponent(continent)}/${encodeURIComponent(category)}`;
    console.log("Fetching data from:", url);

    const response = await fetch(url);
    const data = await response.json();
    console.log("API Response:", data);

    if (!data.success) {
        throw new Error("Nie udało się pobrać miejsc");
    }

    return data.data.places;
};