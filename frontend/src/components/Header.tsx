import { useLocation, useNavigate } from "react-router-dom";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import logo from "../assets/logo1.svg";
import Terra from "../assets/terralens.svg";
import MenuIcon from "./iconsSvg/MenuIcon";
import UserIcon from "./iconsSvg/UserIcon";
import { HeaderProps } from "../types/headerProps";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import FavoriteTopIcon from "./iconsSvg/FavoriteTopIcon";

const Header: React.FC<HeaderProps> = ({ title }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === "/";
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { favorites } = useFavoritesContext();
    const [favoriteCount, setFavoriteCount] = useState(favorites.length);

    useEffect(() => {
        console.log("Favorites update, new number:", favorites.length);
        setFavoriteCount(favorites.length);
    }, [favorites]);

    return (
        <>
            <header className="sticky top-0 left-0 bg-lime-400 w-full flex items-center justify-between p-3 sm:p-4 shadow-md z-50">
                <div className="flex items-center gap-2 sm:gap-4">
                    <button onClick={() => navigate("/")} className="focus:outline-none">
                        <img src={logo} alt="logo" className="w-10 sm:w-12 md:w-14 lg:w-16 object-contain" />
                    </button>
                    {isHome && (
                        <img src={Terra} alt="Terra" className="w-36 sm:w-44 md:w-[18rem] lg:w-[22rem] object-contain" />
                    )}
                </div>

                {!isHome && (
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <span className="text-xl text-textPrimary font-extrabold font-robotoSerif italic sm:text-2xl md:text-3xl lg:text-4xl">
                            {title}
                        </span>
                    </div>
                )}

                <div className="flex items-center gap-3 sm:gap-4 mr-2">
                    <FavoriteTopIcon favoriteCount={favoriteCount} />
                    <UserIcon />
                    <MenuIcon onClick={() => setIsMenuOpen(true)} />
                </div>
            </header>

            {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
        </>
    );
};

export default Header;
