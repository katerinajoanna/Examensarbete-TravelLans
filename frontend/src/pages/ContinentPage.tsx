
import { useParams } from "react-router-dom";
import { continentData } from "../data/continentData";
import PlaceCard from "../components/gallery/PlaceCard";
import Header from "../components/Header";  // Import nagłówka
import Footer from "../components/Footer";  // Import stopki

const ContinentPage: React.FC = () => {
    const { continentName } = useParams();
    const continent = continentData[continentName as keyof typeof continentData];

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

                <p className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-textSecondary stroke-gallery font-bold italic tracking-wide p-3 md:p-5 lg:p-6 xl:p-6 mt-6">{continent.description}</p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {continent.places.map((place) => (
                        <PlaceCard
                            key={place.id}
                            title={place.title}
                            image={place.image}
                            country={place.country}
                            category={place.category}
                            description={place.description}
                            linkInfo={place.linkInfo}
                        />
                    ))}
                </div>
            </main>
            <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto my-6"></div>
            <Footer />
        </div>
    );
};

export default ContinentPage;

