import { Link } from "react-router-dom";
import ArrowRight from "../iconsSvg/ArrowRight";
import { PlaceCardProps } from "../../types/placeCard";

const PlaceCard: React.FC<PlaceCardProps> = ({ title, image, country, category, description, linkInfo }) => {
    return (

        <div className="bg-gradient-to-r from-[#f5f5f5] to-[#e8edd2] font-robotoSerif p-4 border border-bgLine rounded-md shadow-imgShadow">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-md shadow-cardShadow" />
            <h3 className="text-xl text-textPrimary xl:text-2xl font-bold p-1 mt-2">{title}</h3>
            <p className="text-base text-bgOverlay font-bold p-1">{country} - {category}</p>
            <p className="mt-2 text-sm text-bgOverlay tracking-widest md:tracking-[.09rem] font-medium p-2">{description}</p>
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
