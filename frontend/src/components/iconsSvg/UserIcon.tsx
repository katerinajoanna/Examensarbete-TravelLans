import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserFromToken } from "../../utils/authUserToken";

function UserIcon() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const user = getUserFromToken();

    const handleLogout = () => {
        localStorage.removeItem("accessToken"); // Borttagning av token
        setIsOpen(false);
        navigate("/");
    };

    return (
        <div className="relative">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#031BBD"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 sm:w-7 md:w-8 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 text-sm p-1 md:w-38 md:text-xl lg:w-40 lg:text-xl bg-gradient-to-r from-[#f5f5f5] to-[#d4dfa6] border border-bgLine shadow-md rounded-md">
                    {user ? (
                        <>
                            <p className="text-center text-bgButton font-bold">{user.username}</p>
                            <button
                                onClick={handleLogout}
                                className="block w-full mt-2 text-center text-red-500 font-semibold hover:bg-bgButton p-2 rounded"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => navigate("/login")}
                            className="block w-full text-center text-bgButton font-bold tracking-wide hover:bg-bgButton hover:text-textMuted p-2 rounded-md"
                        >
                            Login
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default UserIcon;

