export interface FavoriteProps {
    isFavorite: boolean;
    onClick: () => void;
}

export interface FavoriteItem {
    placeId: string;
    continent: string;
}
