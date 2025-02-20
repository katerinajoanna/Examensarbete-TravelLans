
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo1.svg';
import Terra from '../assets/terralens.svg';
import MenuIcon from './iconsSvg/MenuIcon';
import UserIcon from './iconsSvg/UserIcon';
import { HeaderProps } from '../types/headerProps';


const Header: React.FC<HeaderProps> = ({ title }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <header className='sticky top-0 left-0 bg-lime-400 w-full flex items-center justify-between p-3 sm:p-4 shadow-md z-50'>

            {/* Lewa strona - Logo i ewentualnie Terra */}
            <div className='flex items-center gap-2 sm:gap-4'>
                <img
                    src={logo}
                    alt='logo'
                    className='w-10 sm:w-12 md:w-14 lg:w-16 object-contain'
                />
                {isHome && (
                    <img
                        src={Terra}
                        alt="Terra"
                        className='w-36 sm:w-44 md:w-[16rem] lg:w-[18rem] object-contain'
                    />
                )}
            </div>

            {/* Środkowa część - Nazwa strony (jeśli nie Home) */}
            {!isHome && (
                <div className='absolute left-1/2 transform -translate-x-1/2'>
                    <span className='text-xl text-textPrimary font-extrabold font-robotoSerif italic sm:text-2xl md:text-3xl lg:text-4xl'>{title}</span>
                </div>
            )}

            {/* Prawa strona - Ikony użytkownika i menu */}
            <div className='flex items-center gap-3 sm:gap-4 mr-2'>
                <UserIcon />
                <MenuIcon />
            </div>

        </header>
    );
};

export default Header;
