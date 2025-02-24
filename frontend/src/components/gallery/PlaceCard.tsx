import { Link } from "react-router-dom";

interface PlaceCardProps {
    title: string;
    image: string;
    country: string;
    category: string;
    description: string;
    linkInfo: string;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ title, image, country, category, description, linkInfo }) => {
    return (

        <div className="p-4 border border-gray-300 rounded-md shadow-md">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-2">{title}</h3>
            <p className="text-gray-600">{country} - {category}</p>
            <p className="mt-2 text-sm text-gray-700">{description}</p>
            <Link to={linkInfo} className="text-blue-500 hover:underline mt-2 block">Read More</Link>
        </div>
    );
};

export default PlaceCard;
