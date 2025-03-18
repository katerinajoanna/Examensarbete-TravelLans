import { useNavigate } from "react-router-dom";
import CloseIcon from "../components/iconsSvg/CloseIcon";

const Menu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const navigate = useNavigate();
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Galleries", path: "/#gallery" },
        { name: "About Us", path: "/about" },
        { name: "Login/Register", path: "/login" },
        { name: "Favorites", path: "/favorite" },
        { name: "Contact", path: "/contact" },
        { name: "Map", path: "/map" },
    ];

    return (
        <div className="fixed top-16 sm:top-[4rem] md:top-[5.4rem] lg:top-[5.9rem] right-[26px] h-[100vh] w-1/2 sm:w-1/2 md:w-1/3 xl:w-1/3 xl:h-[100vh] bg-[#0D1023] bg-opacity-65 text-textSecondary shadow-lg z-50 animate-slideIn">
            <div className="flex justify-end p-4">
                <button
                    onClick={onClose}
                    className="p-2 focus:outline-none"
                >
                    <CloseIcon />
                </button>
            </div>

            {/* navigation */}
            <nav className="mt-16 flex flex-col items-center gap-2 space-y-4 md:space-y-7 xl:space-y-9">
                {menuItems.map((item, index) => (
                    <button
                        key={item.name}
                        onClick={() => {
                            if (item.path === "/#gallery") {
                                navigate("/");
                                setTimeout(() => {
                                    const section = document.getElementById("gallery");
                                    if (section) section.scrollIntoView({ behavior: "smooth" });
                                }, 500);
                            } else {
                                navigate(item.path);
                            }
                            onClose();
                        }}
                        className="text-base sm:text-xl md:text-2xl xl:text-3xl font-robotoSerif italic font-semibold p-1 hover:underline animate-fadeIn"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {item.name}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default Menu;
