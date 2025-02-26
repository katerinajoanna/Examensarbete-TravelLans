
import { useNavigate } from "react-router-dom";
import { GalleryCardProps } from "../../types/galleryCard";
import { continentData } from "../../data/continentData"; // Importuj dane kontynentów

const GalleryCard: React.FC<GalleryCardProps> = ({ title, image }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // hittar nyckeln i continentData baserat på namnet
        const continentKey = Object.keys(continentData).find(key =>
            continentData[key].name.toLowerCase() === title.toLowerCase()
        );

        if (continentKey) {
            navigate(`/continent/${continentKey}`);
        } else {
            console.error("Continent not found:", title);
        }
    };

    return (
        <div
            className="relative w-full max-w-[650px] aspect-[13/8] rounded-md flex items-end overflow-hidden mx-auto border border-bgLine border-opacity-40 shadow-imgShadow cursor-pointer"
            onClick={handleClick}
        >
            <img
                src={image}
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
