import { HeroSectionProps } from '../types/hero'
import SearchHome from './SearchHome';

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
    return (
        <section className='relative flex-grow my-2'>
            {/* Bakgrund från video */}
            <video
                className='absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-imgShadow'
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="https://mytrawellens.s3.eu-north-1.amazonaws.com/heroVideo.webm" type='video/mp4' />
                Video not supported
            </video>

            {/* Textlager på video */}
            <div className='relative z-10 flex flex-col items-center h-full gap-4 p-4 sm:gap-6 sm:p-8 lg:p-12'>

                <h1 className='text-3xl font-extrabold sm:text-4xl md:text-5xl md:font-extrabold lg:text-6xl xl:text-7xl text-textSecondary text-center font-robotoFlex italic tracking-wide stroke-gallery p-2 mb-12 sm:-mt-4 md:mt-1 md:mb-24 animate-slideIn'>
                    {title}
                </h1>

                <div className='bg-[#181a1e] bg-opacity-40 flex justify-center items-center p-4 sm:p-6 md:p-8 rounded-md searchShadow max-w-11/12 sm:max-w-11/12 md:max-w-11/12 lg:max-w-11/12 xl:max-w-5xl'>
                    <p className='text-xs sm:text-base md:text-1xl lg:text-2xl text-textMuted leading-6 sm:leading-7 md:leading-8 lg:leading-[2.6rem] font-robotoSerif italic tracking-wide animate-fadeIn delay-3000'>
                        {description}
                    </p>
                </div>

                <SearchHome
                    label=""
                    placeholder=""
                />

            </div>
        </section >
    );
};

export default HeroSection;
