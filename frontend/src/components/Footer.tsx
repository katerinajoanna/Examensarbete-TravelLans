import Envelope from "./iconsSvg/Envelope";
import Facebook from "./iconsSvg/Facebook";
import Instagram from "./iconsSvg/Instagram";
import Twitter from "./iconsSvg/Twitter";

const Footer: React.FC = () => {
    return (
        <footer className='bg-bgPrimary text-bgLine  text-base md:text-lg lg:text-2xl p-5'>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-[.1rem] mx-8'>

                <div className='flex items-center text gap-0.5 font-robotoFlex italic p-1'>
                    <p className='text-[#ADDA4A]'>&copy; 2025 Trawel Lans</p>
                </div>

                <div className='flex items-center gap-2 p-1'>
                    <Envelope />
                    <p className='text-bgLine italic '>lanstravel@trawel.com</p>
                </div>

                <div className='flex gap-3 p-1'>
                    <Twitter />
                    <Facebook />
                    <Instagram />
                </div>
            </div>
        </footer>
    );
};

export default Footer;