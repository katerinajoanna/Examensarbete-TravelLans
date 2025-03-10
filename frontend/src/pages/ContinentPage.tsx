import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchContinents } from "../services/apiContinents";
import PlaceCard from "../components/gallery/PlaceCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Continent } from "../types/dataContinent";

const ContinentPage: React.FC = () => {
    const { continentName } = useParams<{ continentName: string }>();
    const [continent, setContinent] = useState<Continent | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Funktion för att ladda ner kontinent efter namn
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null); // Återställningsfel före ny fråga
                const continents = await fetchContinents();

                const selectedContinent = continents.find(
                    (c: Continent) => c.name.toLowerCase() === continentName?.toLowerCase()
                ); // Hitta en kontinent med namn (baserat på namn)

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
    }, [continentName]); // Beroende av "continentName"

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

    if (!continent) {
        return (
            <div>
                <Header title="Continent Not Found" />
                <h2 className="text-center text-3xl mt-10">Continent not found</h2>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header title={continent.name} />
            <main className="flex-1 max-w-7xl p-4 mx-4 sm:mx-8 md:mx-14 lg:mx-18 xl:mx-auto">
                <p className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-textSecondary stroke-gallery font-bold italic tracking-wide p-3 md:p-5 lg:p-6 xl:p-6 mt-6">
                    {continent.description}
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {continent.places && continent.places.length > 0 ? (
                        continent.places.map((place) => (
                            <PlaceCard
                                key={place.id}
                                title={place.title}
                                image={place.image}
                                country={place.country}
                                category={place.category}
                                description={place.description}
                                linkInfo={place.linkInfo} id={0} />
                        ))
                    ) : (
                        <p>No places available</p>
                    )}

                </div>
            </main>
            <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto my-6"></div>
            <Footer />
        </div>
    );
};

export default ContinentPage;
