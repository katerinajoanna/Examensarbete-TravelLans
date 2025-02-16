import { HeroSectionProps } from '../types/hero'
import video1 from '../assets/videos/medium.webm';


const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
    return (
        <section className="relative">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={video1} type="video/mp4" />
                Video not supported
            </video>

            <div className="relative z-10 flex flex-col justify-center items-center h-full gap-3">

                <h1 className=" text-3xl text-textSecondary text-center font-robotoSans italic font-extrabold p-2 m-8">{title}</h1>
                <div className=" h-[330px] p-6 rounded-md">
                    <p className=" text-textMuted ">{description}</p>
                </div>
            </div>
        </section>
    );
};




export default HeroSection;

