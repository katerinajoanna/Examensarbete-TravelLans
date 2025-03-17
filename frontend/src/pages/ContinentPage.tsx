// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchContinents } from "../services/apiContinents";
// import PlaceCard from "../components/gallery/PlaceCard";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { Continent } from "../types/dataContinent";

// const ContinentPage: React.FC = () => {
//     const { continentName } = useParams<{ continentName: string }>();
//     const [continent, setContinent] = useState<Continent | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//     const [note, setNote] = useState<string>(""); // Stan do przechowywania notatki
//     const [notes, setNotes] = useState<string[]>([]); // Tablica notatek

//     useEffect(() => {
//         // Funktion för att ladda kontinent efter namn
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);
//                 const continents = await fetchContinents();

//                 const selectedContinent = continents.find(
//                     (c: Continent) => c.name.toLowerCase() === continentName?.toLowerCase()
//                 );       // Vi letar efter en kontinent vid namn

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

//     const handleAddNote = () => {
//         if (note.trim()) {
//             setNotes([...notes, note]);
//             setNote("");     // Återställ textfältet efter att ha lagt till en anteckning
//         }
//     };

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

//     if (!continent) {
//         return (
//             <div>
//                 <Header title="Continent Not Found" />
//                 <h2 className="text-center text-3xl mt-10">Continent not found</h2>
//                 <Footer />
//             </div>
//         );
//     }

//     return (
//         <div className="flex flex-col min-h-screen">
//             <Header title={continent.name} />
//             <main className="flex-1 max-w-7xl p-4 mx-4 sm:mx-8 md:mx-14 lg:mx-18 xl:mx-auto">
//                 <p className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-textSecondary stroke-gallery font-bold italic tracking-wide p-3 md:p-5 lg:p-6 xl:p-6 mt-6">
//                     {continent.description}
//                 </p>
//                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {continent.places && continent.places.length > 0 ? (
//                         continent.places.map((place) => (
//                             <PlaceCard
//                                 key={place.id}
//                                 title={place.title}
//                                 image={place.image}
//                                 country={place.country}
//                                 category={place.category}
//                                 description={place.description}
//                                 linkInfo={place.linkInfo}
//                                 id={0}
//                             />
//                         ))
//                     ) : (
//                         <p>No places available</p>
//                     )}
//                 </div>
//             </main>

//             <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto my-6"></div>

//             {/* Anteckningar avsnitt */}
//             <div className="w-11/12 mx-auto mb-6">
//                 <h3 className="text-2xl text-textSecondary font-bold mb-4">Your Notes</h3>
//                 <textarea
//                     value={note}
//                     onChange={(e) => setNote(e.target.value)}
//                     placeholder="Write your note here..."
//                     className="w-full p-2 border rounded-md mb-4"
//                 />
//                 <button
//                     onClick={handleAddNote}
//                     className="bg-primary text-green-600 py-2 px-4 rounded-md hover:text-green-400 focus:text-green-400 focus:outline-none"
//                 >
//                     Add Note
//                 </button>

//                 {/* Visa sparade anteckningar */}
//                 <div className="mt-6">
//                     {notes.length > 0 ? (
//                         <ul>
//                             {notes.map((note, index) => (
//                                 <li key={index} className="bg-gray-100 p-3 rounded-md my-2">
//                                     {note}
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p className="text-red-700">No notes added yet.</p>
//                     )}
//                 </div>
//             </div>
//             <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto my-6"></div>
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

const ContinentPage: React.FC = () => {
    const { continentName } = useParams<{ continentName: string }>();
    const [continent, setContinent] = useState<Continent | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [note, setNote] = useState<string>("");
    const [notes, setNotes] = useState<string[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

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
        setIsLoggedIn(!!localStorage.getItem("accessToken"));
    }, [continentName]);

    const handleAddNote = () => {
        if (!isLoggedIn) {
            setMessage("You must be logged in to add a note.");
            return;
        }

        if (note.trim()) {
            setNotes([...notes, note]);
            setNote("");
            setMessage("Note added successfully!");
        }
    };

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
                                linkInfo={place.linkInfo}
                                id={0}
                            />
                        ))
                    ) : (
                        <p>No places available</p>
                    )}
                </div>
            </main>

            <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto my-6"></div>

            <div className="w-11/12 mx-auto mb-6">
                <h3 className="text-2xl text-textSecondary font-bold mb-4">Your Notes</h3>
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Write your note here..."
                    className="w-full p-2 border rounded-md mb-4"
                />
                <button
                    onClick={handleAddNote}
                    className="bg-primary text-green-600 py-2 px-4 rounded-md hover:text-green-400 focus:text-green-400 focus:outline-none"
                >
                    Add Note
                </button>
                {message && <p className="mt-2 text-red-500">{message}</p>}
                <div className="mt-6">
                    {notes.length > 0 ? (
                        <ul>
                            {notes.map((note, index) => (
                                <li key={index} className="bg-gray-100 p-3 rounded-md my-2">
                                    {note}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-red-700">No notes added yet.</p>
                    )}
                </div>
            </div>
            <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto my-6"></div>
            <Footer />
        </div>
    );
};

export default ContinentPage;

