import logo from '../assets/logo3.svg';
import Terra from '../assets/Terra.svg';



function Header() {
    return (
        <div className="sticky top-0 left-0 bg-lime-400 w-full flex justify-center items-center gap-1 p-2 shadow-md z-10">
            {/* Terra image */}
            <img
                src={Terra}
                className="w-56 h-auto p-1 animate-slideIn sm:w-48 md:w-56 lg:w-64 xl:w-72 max-w-full"
                alt="Terra Lens"
            />
            {/* Logo image */}
            <img
                src={logo}
                className="w-24 p-1 animate-slideIn delay-150 sm:w-20 md:w-24 lg:w-28 xl:w-32 max-w-full"
                alt="logo"
            />
        </div>
    );
}

export default Header;


