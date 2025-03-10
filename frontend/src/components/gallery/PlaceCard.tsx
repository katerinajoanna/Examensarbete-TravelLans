import { Link } from "react-router-dom";
import ArrowRight from "../iconsSvg/ArrowRight";
import { Place } from "../../types/place";

const PlaceCard: React.FC<Place> = ({ title, image, country, category, description, linkInfo }) => {
    return (
        <div className="bg-gradient-to-r from-[#f5f5f5] to-[#e8edd2] font-robotoSerif p-4 border border-bgLine rounded-md shadow-imgShadow">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-md shadow-cardShadow border border-bgLine" />
            <h3 className="text-xl text-textPrimary md:text-2xl xl:text-3xl font-bold p-1 mt-2">{title}</h3>
            <p className="text-base md:text-lg xl:text-xl text-bgOverlay font-bold p-1">{country} - {category}</p>
            <p className="mt-2 text-sm text-bgOverlay md:text-base xl:text-lg tracking-widest md:tracking-[.09rem] xl:tracking-wide font-medium font-robotoFlex p-2">{description}</p>
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
