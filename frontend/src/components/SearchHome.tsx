import { useState } from "react";
import { SearchHomeProps } from "../types/searchProps";
import SearchGlass from "./iconsSvg/SearchGlass";


const SearchHome: React.FC<SearchHomeProps> = ({ label }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const isActive = searchQuery !== ''; // Sprawdza, czy użytkownik coś wpisał

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto">
            {/* Label jako placeholder */}
            <label
                htmlFor="search"
                className={`absolute left-1 text-textMuted transition-all duration-300 
                    ${isActive ? "top-1 text-md text-textMuted " : "top-3 text-base"}`}
            >
                {label}
            </label>

            <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Type a place or continent"
                className="w-full
                   p-3 pt-3 pr-12 border border-bgLine border-opacity-50 rounded-md focus:outline-none bg-[#181a1e] bg-opacity-40
                   focus:border-bgLine text-textMuted shadow-searchShadow  sm:text-md md:text-xl lg:text-2xl"

            />

            <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-textMuted">
                <SearchGlass />
            </div>
        </div>
    );
};

export default SearchHome;