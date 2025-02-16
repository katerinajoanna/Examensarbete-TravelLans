
import logo from '../assets/logo1.svg';
import Terra from '../assets/terralens.svg';
import MenuIcon from './iconsSvg/MenuIcon';
import UserIcon from './iconsSvg/UserIcon';

function Header() {
    return (
        <header className='sticky top-0 left-0 bg-lime-400 w-full flex items-center justify-between p-3 sm:p-4 shadow-md z-50'>

            {/* Lewa strona - Logo i napis */}
            <div className='flex items-center gap-2 sm:gap-4'>
                <img
                    src={logo}
                    alt='logo'
                    className='w-10 sm:w-12 md:w-14 lg:w-16 object-contain'
                />
                <img
                    src={Terra}
                    alt='Terra'
                    className='w-36 sm:w-44 md:w-52 lg:w-60 object-contain'
                />
            </div>

            {/* Prawa strona - Ikony użytkownika i menu */}
            <div className='flex items-center gap-3 sm:gap-4 mr-2'>
                <UserIcon />
                <MenuIcon />
            </div>

        </header>
    );
}

export default Header;

