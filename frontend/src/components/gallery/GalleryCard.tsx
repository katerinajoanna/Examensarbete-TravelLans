import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GalleryCardProps } from "../../types/galleryCard";
import { fetchContinents } from "../../services/apiContinents";
import { Continent } from "../../types/dataContinent"

const GalleryCard: React.FC<GalleryCardProps> = ({ title, image }) => {
    const navigate = useNavigate();
    const [apiContinents, setApiContinents] = useState<Continent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Ladda ner kontinenter från API
    useEffect(() => {
        const getContinents = async () => {
            try {
                const continents = await fetchContinents();
                setApiContinents(continents);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching continents:", error);
                setLoading(false);
            }
        };

        getContinents();
    }, []);

    const handleClick = () => {
        const continent = apiContinents.find(
            (continent) => continent.name.toLocaleLowerCase() === title.toLocaleLowerCase()
        );

        if (continent) {
            navigate(`/continent/${continent.continent}`);
        } else {
            console.error("Continent not found:", title);
        }
    };

    if (loading) {
        return <div>Loading...</div>;  // Den visar "Loading..." medan data laddas
    }

    return (
        <div
            className="relative w-full max-w-[650px] aspect-[13/8] rounded-md flex items-end overflow-hidden mx-auto border border-bgLine border-opacity-40 shadow-imgShadow cursor-pointer"
            onClick={handleClick}
        >
            <img
                src={image || '/default-image.jpg'}  // Lägg till en standardbild om det inte finns någon
                alt={title}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-bgOverlay bg-opacity-40 text-textMuted font-robotoFlex font-semibold text-center tracking-wide py-2">
                {title}
            </div>
        </div>
    );
};

export default GalleryCard;
