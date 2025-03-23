// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchContinents } from "../services/apiContinents";
// import PlaceCard from "../components/gallery/PlaceCard";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { Continent } from "../types/dataContinent";
// import { useFavoritesContext } from "../contexts/FavoritesContext";

// const ContinentPage: React.FC = () => {
//     const { continentName } = useParams<{ continentName: string }>();
//     const [continent, setContinent] = useState<Continent | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//     const { favorites, toggleFavorite } = useFavoritesContext();
//     const continentFavorites = favorites.filter((fav) => fav.continent === continentName);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);
//                 const continents = await fetchContinents();

//                 const selectedContinent = continents.find(
//                     (c: Continent) => c.name.toLowerCase() === continentName?.toLowerCase()
//                 );

//                 if (selectedContinent) {
//                     setContinent(selectedContinent);
//                 } else {
//                     setError("Continent not found");
//                 }
//             } catch (err) {
//                 setError("Error fetching continent data");
//                 console.error(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [continentName]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return (
//             <div>
//                 <Header title="Continent Not Found" />
//                 <h2 className="text-center text-3xl mt-10">{error}</h2>
//                 <Footer />
//             </div>
//         );
//     }

//     return (
//         <div className="flex flex-col min-h-screen">
//             <Header title={continent?.name || "Unknown Continent"} />
//             <main className="flex-1 max-w-7xl p-4 mx-4 sm:mx-8 md:mx-14 lg:mx-18 xl:mx-auto">
//                 <p className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-textSecondary font-bold italic tracking-wide p-3 md:p-5 lg:p-6 xl:p-6 mt-6 animate-slideInLeft">
//                     {continent?.description || "No description available."}
//                 </p>
//                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {continent?.places?.length ? (
//                         continent.places.map((place) => (
//                             <PlaceCard
//                                 key={place.id}
//                                 {...place}
//                                 continent={continentName || ""}
//                                 isFavorite={continentFavorites.some((fav) => fav.id === place.id && fav.continent === continentName)}
//                                 toggleFavorite={toggleFavorite}
//                             />
//                         ))
//                     ) : (
//                         <p>No places available</p>
//                     )}
//                 </div>
//             </main>

//             <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto mb-2"></div>
//             <Footer />
//         </div>
//     );
// };

// export default ContinentPage;




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchContinents } from "../services/apiContinents";
import PlaceCard from "../components/gallery/PlaceCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Continent } from "../types/dataContinent";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import Notes from "../components/Notes";

const ContinentPage: React.FC = () => {
    const { continentName } = useParams<{ continentName: string }>();
    const [continent, setContinent] = useState<Continent | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { favorites, toggleFavorite } = useFavoritesContext();
    const continentFavorites = favorites.filter((fav) => fav.continent === continentName);

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        // Sprawdzamy, czy użytkownik jest zalogowany na podstawie tokena w localStorage
        setIsLoggedIn(!!localStorage.getItem("accessToken"));
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const continents = await fetchContinents();

                const selectedContinent = continents.find(
                    (c: Continent) => c.name.toLowerCase() === continentName?.toLowerCase()
                );

                if (selectedContinent) {
                    setContinent(selectedContinent);
                } else {
                    setError("Continent not found");
                }
            } catch (err) {
                setError("Error fetching continent data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [continentName]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                <Header title="Continent Not Found" />
                <h2 className="text-center text-3xl mt-10">{error}</h2>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header title={continent?.name || "Unknown Continent"} />
            <main className="flex-1 max-w-7xl p-4 mx-4 sm:mx-8 md:mx-14 lg:mx-18 xl:mx-auto">
                <p className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-textSecondary font-bold italic tracking-wide p-3 md:p-5 lg:p-6 xl:p-6 mt-6 animate-slideInLeft">
                    {continent?.description || "No description available."}
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {continent?.places?.length ? (
                        continent.places.map((place) => (
                            <PlaceCard
                                key={place.id}
                                {...place}
                                continent={continentName || ""}
                                isFavorite={continentFavorites.some((fav) => fav.id === place.id && fav.continent === continentName)}
                                toggleFavorite={toggleFavorite}
                            />
                        ))
                    ) : (
                        <p>No places available</p>
                    )}
                </div>
            </main>

            <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto mb-2"></div>

            <Notes continentName={continentName} isLoggedIn={isLoggedIn} />

            <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto mb-2"></div>
            <Footer />
        </div>
    );
};

export default ContinentPage;
