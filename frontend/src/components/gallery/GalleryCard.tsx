import { GalleryCardProps } from "../../types/galleryCard";

const GalleryCard: React.FC<GalleryCardProps> = ({ title, image }) => {
    return (
        <div className='relative w-full max-w-[650px] aspect-[13/8] rounded-md flex items-end overflow-hidden mx-auto border border-bgLine border-opacity-40 shadow-imgShadow'>
            {/* Obrazek */}
            <img
                src={image}
                alt={title}
                className='absolute top-0 left-0 w-full h-full object-cover'
            />

            {/* Tekst na obrazku */}
            <div className='absolute bottom-0 left-0 w-full bg-bgOverlay bg-opacity-40 text-textMuted font-robotoFlex font-semibold text-center tracking-wide py-2'>
                {title}
            </div>
        </div>
    );
};

export default GalleryCard;
