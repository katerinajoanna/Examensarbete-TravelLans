
import { useNavigate } from "react-router-dom";
import { continentData } from "../../data/continentData"; // Import danych

const Galleries = () => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-3 gap-4">
            {Object.entries(continentData).map(([key, continent]) => (
                <div
                    key={key}
                    className="relative w-full aspect-video rounded-md overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => navigate(`/continent/${key}`)}
                >
                    <video
                        src={continent.video}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
                        {continent.name}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Galleries;
