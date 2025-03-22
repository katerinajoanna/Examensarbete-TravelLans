import { useState } from "react";
import { Link } from "react-router-dom";
import { PlaceCardProps } from "../../types/place";
import ArrowRight from "../iconsSvg/ArrowRight";
import Modal from "../../components/Modal";
import FavoriteIcon from "../iconsSvg/FavoriteIcon";

const PlaceCard: React.FC<PlaceCardProps> = ({
    id, title, image, country, description, linkInfo, continent,
    isFavorite, toggleFavorite
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-gradient-to-r from-[#f5f5f5] to-[#e8edd2] font-robotoSerif p-4 border border-bgLine rounded-md shadow-imgShadow">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-md shadow-cardShadow border border-bgLine"
            />
            <div className="flex justify-end m-3">
                <FavoriteIcon isFavorite={isFavorite} onClick={() => toggleFavorite({ id, title, country, description, continent, image, linkInfo })} />
            </div>
            <h3 className="text-xl text-textPrimary md:text-2xl xl:text-3xl font-bold p-1">{title}</h3>
            <p className="text-base md:text-lg xl:text-xl text-bgOverlay font-bold p-1">{country}</p>

            <p className="mt-2 text-sm text-bgOverlay md:text-base xl:text-lg tracking-widest md:tracking-[.09rem] xl:tracking-wide font-medium font-robotoFlex p-2">
                {description.split(" ").slice(0, 15).join(" ")}...
                <span
                    onClick={() => setIsModalOpen(true)}
                    className="text-textPrimary ml-1 underline cursor-pointer"
                >
                    more
                </span>
            </p>

            <Link to={linkInfo} className="text-textPrimary hover:underline focus-visible:underline active:underline mt-2 flex p-1 gap-3 font-medium">
                Read More
                <ArrowRight />
            </Link>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-textPrimary text-2xl font-bold">{title}</h2>
                <p className="text-bgOverlay mt-4">{description}</p>
            </Modal>
        </div>
    );
};

export default PlaceCard;
