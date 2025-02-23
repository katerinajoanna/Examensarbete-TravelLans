import { useNavigate } from 'react-router-dom';

const Menu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const navigate = useNavigate();
    const menuItems = [
        { name: "Galleries", path: "/galleries" },
        { name: "About Us", path: "/about" },
        { name: "Login/Register", path: "/login" },
        { name: "My Page", path: "/mypage" },
        { name: "Contact", path: "/contact" },
        { name: "Map", path: "/map" },
    ];

    return (
        <div className="fixed top-0 right-[26px] h-[100vh] w-1/2 sm:w-1/2 md:w-1/3 xl:w-1/3 xl:h-[100vh] bg-[#0D1023] bg-opacity-65 text-textSecondary shadow-lg z-50 animate-slideIn">
            {/* header menu */}
            <div className="bg-lime-400 text-end p-4">

                <button onClick={onClose} className="text-bgButton text-2xl sm:text-3xl md:text-4xl md:p-[7px] lg:text-4xl lg:p-[11px]">
                    X
                </button>
            </div>

            {/* navigation */}
            <nav className="mt-16 flex flex-col items-center gap-2 space-y-4 md:space-y-7 xl:space-y-9">
                {menuItems.map((item, index) => (
                    <button
                        key={item.name}
                        onClick={() => {
                            navigate(item.path);
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
