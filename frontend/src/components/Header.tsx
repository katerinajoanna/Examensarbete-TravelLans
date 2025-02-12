import logo from '../assets/logo1.svg';
import Terra from '../assets/terralens.svg';
import MenuIcon from './iconsSvg/MenuIcon';

function Header() {
    return (
        <div className="sticky top-0 left-0 bg-lime-400 w-full flex justify-between items-center p-2 shadow-md z-10">
            <div className="flex items-center">
                {/* Terra image */}
                <img
                    src={Terra}
                    alt="Terra"
                    className="p-1 ml-4 animate-slideIn delay-100 max-w-full object-contain w-48 sm:w-56 md:w-64 lg:w-72"
                />

                {/* Logo image */}
                <img
                    src={logo}
                    alt="logo"
                    className="p-1 animate-slideIn delay-200 max-w-full object-contain w-12 sm:w-14 md:w-16 lg:w-18"
                />
            </div>
            <div className='flex items-end mr-4 gap-4'>
                <MenuIcon />
            </div>

        </div>
    );
}

export default Header;

