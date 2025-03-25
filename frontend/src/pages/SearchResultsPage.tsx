import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategoryPlaces } from "../services/apiPlace";
import PlaceCard from "../components/gallery/PlaceCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Place } from "../types/place";
import { useFavoritesContext } from "../contexts/FavoritesContext";

const SearchResultsPage: React.FC = () => {
    const { continentName, category } = useParams<{ continentName: string; category: string }>();

    const [places, setPlaces] = useState<Place[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const { favorites, toggleFavorite } = useFavoritesContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                if (!continentName || !category) {
                    throw new Error("Missing required parameters in URL");
                }

                const placesData = await fetchCategoryPlaces(continentName, category);
                setPlaces(placesData);
            } catch (err) {
                setError("Error fetching search results");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [continentName, category]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="flex flex-col min-h-screen">
            <Header title={`Search results for "${category}" in ${continentName}`} />
            <main className="flex-1 max-w-7xl p-4 mx-4 sm:mx-8 md:mx-14 lg:mx-18 xl:mx-auto">
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {places.length > 0 ? (
                        places.map((place) => (
                            <PlaceCard
                                key={place.id}
                                id={place.id}
                                title={place.title}
                                image={place.image}
                                country={place.country}
                                category={place.category}
                                description={place.description}
                                linkInfo={place.linkInfo}
                                continent={continentName!}
                                isFavorite={favorites.some((fav) => fav.id === place.id && fav.continent === continentName)}
                                toggleFavorite={toggleFavorite}

                            />
                        ))
                    ) : (
                        <p>No results found.</p>
                    )}
                </div>
            </main>
            <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto my-6"></div>
            <Footer />
        </div>
    );
};

export default SearchResultsPage;
