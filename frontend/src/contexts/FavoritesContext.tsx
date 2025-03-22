import { createContext, useContext, useEffect, useState } from "react";
import { FavoritesContextType, Place } from "../types/place";

const FAVORITES_STORAGE_KEY = "favorite_places";
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Place[]>([]);

    // hämtar favorites
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]");
        setFavorites(storedFavorites);
    }, []);

    // lägger till favorites
    const toggleFavorite = (place: Place & { continent: string }) => {
        setFavorites((prevFavorites) => {
            const exists = prevFavorites.some(
                (fav) => fav.id === place.id && fav.continent === place.continent
            );

            let updatedFavorites;
            if (exists) {
                updatedFavorites = prevFavorites.filter(
                    (fav) => !(fav.id === place.id && fav.continent === place.continent)
                );
            } else {
                updatedFavorites = [...prevFavorites, place];
            }

            // skriver i localstorage
            localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedFavorites));

            return updatedFavorites;
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFavoritesContext = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavoritesContext must be used within a FavoritesProvider");
    }
    return context;
};
