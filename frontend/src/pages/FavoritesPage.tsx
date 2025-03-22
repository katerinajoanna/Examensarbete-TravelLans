import { useFavoritesContext } from "../contexts/FavoritesContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PlaceCard from "../components/gallery/PlaceCard";

const FavoritesPage = () => {
    const { favorites, toggleFavorite } = useFavoritesContext();

    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Favorites" />
            <main className="flex-1 max-w-7xl p-4 mx-4 sm:mx-8 md:mx-14 lg:mx-18 xl:mx-auto">
                <p className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-textSecondary font-bold italic tracking-wide p-3 md:p-5 lg:p-6 xl:p-6 mt-6 animate-slideInLeft">
                    Your Favorite Places
                </p>

                {favorites.length > 0 ? (
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {favorites.map((place, index) => (
                            <PlaceCard
                                key={`${place.id}-${index}`}
                                {...place}
                                isFavorite={true}
                                toggleFavorite={toggleFavorite}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-lg text-gray-500 mt-8">
                        You haven't added any favorites yet.
                    </p>
                )}
            </main>
            <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto mb-2"></div>
            <Footer />
        </div>
    );
};

export default FavoritesPage;
