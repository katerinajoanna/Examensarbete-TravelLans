
import { useNavigate } from "react-router-dom";
import { continentData } from "../../data/continentData"; // Import danych

const Galleries = () => {
    const navigate = useNavigate();

    return (
        <section className='max-w-7xl mx-auto p-3'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl text-textSecondary text-center font-robotoSans italic font-bold tracking-wider stroke-gallery mb-8 md:mb-12 lg:mb-14'>
                Galleries
            </h2>
            <div className="grid grid-cols-1 font-robotoFlex tracking-[0.05em] sm:grid-cols-2 lg:grid-cols-3 gap-6 text-2xl">
                {Object.entries(continentData).map(([key, continent]) => (
                    <div
                        key={key}
                        className="relative w-full aspect-video rounded-md overflow-hidden cursor-pointer border border-bgLine border-opacity-75 shadow-imgShadow"
                        onClick={() => navigate(`/continent/${key}`)}
                    >
                        <video
                            src={continent.video}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-bgOverlay  bg-opacity-50 text-textMuted text-2xl xl:text-3xl text-stroke text-center p-2">
                            {continent.name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Galleries;
