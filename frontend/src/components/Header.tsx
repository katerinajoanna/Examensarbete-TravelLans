import logo from '../assets/logo-niebnieski2.svg';

function Header() {
    return (
        <div className="sticky top-0 left-0 bg-lime-400 w-full flex justify-start items-center gap-1 p-2 shadow-md z-10 ">
            <img src={logo} className='w-24 p-1 animate-slideIn delay-150' alt="logo" />
        </div>
    );
}

export default Header;
