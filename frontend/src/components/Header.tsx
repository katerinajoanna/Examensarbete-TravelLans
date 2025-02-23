
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo1.svg';
import Terra from '../assets/terralens.svg';
import MenuIcon from './iconsSvg/MenuIcon';
import UserIcon from './iconsSvg/UserIcon';
import { HeaderProps } from '../types/headerProps';
import { useState } from 'react';
import Menu from './Menu';

const Header: React.FC<HeaderProps> = ({ title }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className='sticky top-0 left-0 bg-lime-400 w-full flex items-center justify-between p-3 sm:p-4 shadow-md z-50'>

                {/* Logo i  Terra */}
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
                            className='w-36 sm:w-44 md:w-[18rem] lg:w-[22rem] object-contain'
                        />
                    )}
                </div>

                {!isHome && (
                    <div className='absolute left-1/2 transform -translate-x-1/2'>
                        <span className='text-xl text-textPrimary font-extrabold font-robotoSerif italic sm:text-2xl md:text-3xl lg:text-4xl'>{title}</span>
                    </div>
                )}

                <div className='flex items-center gap-3 sm:gap-4 mr-2'>
                    <UserIcon />
                    {/* otwieram menu */}
                    <MenuIcon onClick={() => setIsMenuOpen(true)} />
                </div>

            </header>

            {/* usuwam menu */}
            {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
        </>
    );
};

export default Header;
