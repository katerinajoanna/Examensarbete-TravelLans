import Envelope from "./iconsSvg/Envelope";
import Facebook from "./iconsSvg/Facebook";
import Instagram from "./iconsSvg/Instagram";
import Twitter from "./iconsSvg/Twitter";

const Footer: React.FC = () => {
    return (
        <footer className='w-full bg-bgPrimary text-bgLine p-5'>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-6 mx-5'>
                {/* Copyright i rok */}
                <div className='flex items-center gap-0.5 font-robotoFlex italic'>
                    <p className='text-[#ADDA4A]'>&copy;</p>
                    <p className='text-[#ADDA4A]'>2025 Trawel Lans</p>
                </div>

                {/* Email */}
                <div className='flex items-center gap-2'>
                    <Envelope />
                    <p className='text-[#ADDA4A] italic'>lanstravel@trawel.com</p>
                </div>

                {/* Ikony społecznościowe */}
                <div className='flex gap-4'>
                    <Twitter />
                    <Facebook />
                    <Instagram />
                </div>
            </div>
        </footer>
    );
};

export default Footer;


