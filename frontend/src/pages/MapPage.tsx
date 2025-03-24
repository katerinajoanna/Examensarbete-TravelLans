import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ContinentData, PlaceMap } from "../services/apiMap";

const MapPage = () => {
    const [places, setPlaces] = useState<PlaceMap[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await fetch(
                    "https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/continents"
                );
                const data = await response.json();

                if (data.success) {
                    const extractedPlaces: PlaceMap[] = data.data.flatMap(
                        (continent: ContinentData) =>
                            continent.places.map((place) => ({
                                ...place,
                                title: `${place.title} (${continent.name})`,
                            }))
                    );
                    //console.log("Fetched places:", extractedPlaces);
                    setPlaces(extractedPlaces);
                }
            } catch (error) {
                console.error("Error fetching places:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, []);


    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Map" />
            <main className="flex flex-col items-center justify-center flex-1 p-4">
                <p className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-textSecondary font-bold italic tracking-wide p-3 mt-6 animate-slideInLeft">
                    Here you can explore all the places available on our continents.
                </p>

                <MapContainer
                    center={[20, 0]}
                    zoom={2}
                    className="w-full max-w-4xl h-[500px] rounded shadow-lg mt-6 z-0 relative"
                    style={{ height: "480px" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {!loading &&
                        places.map((place) => (
                            <Marker key={`${place.id}-${place.title}`} position={[place.location.lat, place.location.lng]}>
                                <Popup>
                                    <strong>{place.title}</strong> <br />
                                    {place.country}
                                    <img src={place.image} alt={place.title} className="max-w-full h-auto mt-2 rounded " />
                                </Popup>
                            </Marker>
                        ))}
                </MapContainer>
            </main>
            <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto mb-2"></div>
            <Footer />
        </div>
    );
};

export default MapPage;
