import logo from '../assets/logo1.svg';
import Terra from '../assets/terralens.svg';

function Header() {
    return (
        <div className="sticky top-0 left-0 bg-lime-400 w-full flex justify-start items-center gap-1 p-2 shadow-md z-10">
            {/* Terra image */}
            <img
                src={Terra}
                alt="Terra"
                className="p-1 ml-4 animate-slideIn max-w-full object-contain w-48 sm:w-56 md:w-64 lg:w-72"
            />

            {/* Logo image */}
            <img
                src={logo}
                alt="logo"
                className="p-1 animate-slideIn delay-150 max-w-full object-contain w-12 sm:w-14 md:w-16 lg:w-18"
            />
        </div>
    );
}

export default Header;

