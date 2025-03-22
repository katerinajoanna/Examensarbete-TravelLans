export interface Place {
    continent: string;
    id: number;
    title: string;
    country: string;
    category?: string;
    description: string;
    video?: string | null;
    image: string;
    linkInfo: string;
    location?: {
        lng: number;
        lat: number;
    };
}

export interface FavoritesContextType {
    favorites: Place[];
    toggleFavorite: (place: Place) => void;
}

export interface PlaceCardProps extends Place {
    continent: string;
    isFavorite: boolean;
    toggleFavorite: (place: Place) => void;
}