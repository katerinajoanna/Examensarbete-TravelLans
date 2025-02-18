
// import { HeroSectionProps } from '../types/hero'
// import video1 from '../assets/videos/medium.webm';

// const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
//     return (
//         <section className='relative mt-2 w-full h-screen'>
//             <video
//                 className='absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-imgShadow aspect-video'
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//             >
//                 <source src={video1} type='video/mp4' />
//                 Video not supported
//             </video>

//             <div className='relative flex flex-col justify-center items-center h-full gap-4 p-4 sm:gap-6 sm:p-8 lg:p-12'>

//                 <h1 className='absolute top-12 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-textSecondary text-center font-robotoSans italic font-bold tracking-wide text-stroke p-2 '>
//                     {title}
//                 </h1>

//                 <div className='bg-[#090909] bg-opacity-40 flex justify-center items-center p-4 sm:p-6 md:p-8 rounded-md max-w-[90%] sm:max-w-[80%] md:max-w-[80%] lg:max-w-[90%] xl:max-w-[80%]'>
//                     <p className='text-textMuted text-base sm:text-lg md:text-xl lg:text-2xl font-robotoSerif italic tracking-wide leading-relaxed'>
//                         {description}
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;



import { HeroSectionProps } from '../types/hero'
import video1 from '../assets/videos/medium.webm';

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
    return (
        <section className='relative w-full h-screen'>
            {/* Tło z wideo */}
            <video
                className='absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-imgShadow'
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={video1} type='video/mp4' />
                Video not supported
            </video>

            {/* Warstwa z tekstem na wideo */}
            <div className='relative z-10 flex flex-col justify-between items-center h-full gap-4 p-4 sm:gap-6 sm:p-8 lg:p-12'>

                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl text-textSecondary text-center font-robotoSans italic font-bold tracking-wide text-stroke p-2 mb-12 sm:-mt-4 md:mt-12'>
                    {title}
                </h1>

                <div className='bg-[#090909] bg-opacity-40 flex justify-center items-center p-4 sm:p-6 md:p-8 rounded-md max-w-[90%] sm:max-w-[80%] md:max-w-[80%] lg:max-w-[90%] xl:max-w-[80%]'>
                    <p className='text-xs sm:text-base md:text-1xl lg:text-2xl text-textMuted leading-6 md:leading-[3rem] lg:leading-[3rem] font-robotoSerif italic tracking-wide'>
                        {description}
                    </p>
                </div>
                <div>
                    <h5 className='text-white'>cos tam</h5>
                </div>
            </div>
        </section >
    );
};

export default HeroSection;
