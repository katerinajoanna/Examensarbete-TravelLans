export interface Place {
    id: number;
    title: string;
    country: string;
    category: string;
    description: string;
    video?: string | null;
    image: string;
    linkInfo: string;
    location?: {
        lng: number;
        lat: number;
    };
}
