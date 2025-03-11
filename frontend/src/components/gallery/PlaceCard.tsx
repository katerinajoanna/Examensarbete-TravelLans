import { useState } from "react";
import { Link } from "react-router-dom";
import { Place } from "../../types/place";
import ChevronDown from "../iconsSvg/ChevronDown";
import ArrowRight from "../iconsSvg/ArrowRight";


const PlaceCard: React.FC<Place> = ({ title, image, country, description, linkInfo }) => {
    const [isOpen, setIsOpen] = useState(false); // stat för att hantera beskrivningsexpansion

    // Funkcja do wyciągania pierwszych 15 słów z opisu
    const getShortDescription = (text: string, wordLimit: number) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "..."; // Dodanie "..." jeśli opis jest dłuższy
        }
        return text;
    };

    return (
        <div className="bg-gradient-to-r from-[#f5f5f5] to-[#e8edd2] font-robotoSerif p-4 border border-bgLine rounded-md shadow-imgShadow">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-md shadow-cardShadow border border-bgLine" />
            <h3 className="text-xl text-textPrimary md:text-2xl xl:text-3xl font-bold p-1 mt-2">{title}</h3>
            <p className="text-base md:text-lg xl:text-xl text-bgOverlay font-bold p-1">{country}</p>

            {/* Visar en kort eller fullständig beskrivning */}
            <p className="mt-2 text-sm text-bgOverlay md:text-base xl:text-lg tracking-widest md:tracking-[.09rem] xl:tracking-wide font-medium font-robotoFlex p-2">
                {isOpen ? description : getShortDescription(description, 15)}
                {description.split(" ").length > 15 && (
                    <span
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer text-textPrimary ml-1 inline-flex items-center relative top-2 left-2"
                    >
                        <ChevronDown isOpen={isOpen} />
                    </span>
                )}
            </p>

            <Link
                to={linkInfo}
                className="text-textPrimary hover:underline focus-visible:underline active:underline mt-2 flex p-1 gap-3 font-medium">
                Read More
                <ArrowRight />
            </Link>
        </div>
    );
};

export default PlaceCard;
