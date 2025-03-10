import { Place } from "./place";

export interface Continent {
    name: string;
    description: string;
    video?: string;
    image?: string | null;
    continent: string;
    places: Place[];
}
