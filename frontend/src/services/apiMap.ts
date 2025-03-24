// Interfejsy dla danych
export interface PlaceMap {
    id: number;
    title: string;
    country: string;
    image: string;
    location: { lat: number; lng: number };
}

export interface ContinentData {
    name: string;
    places: PlaceMap[];
}