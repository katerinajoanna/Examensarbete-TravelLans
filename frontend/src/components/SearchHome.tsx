import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchHomeProps } from "../types/searchProps";
import SearchGlass from "./iconsSvg/SearchGlass";

const SearchHome: React.FC<SearchHomeProps> = ({ label }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();
    const isActive = searchQuery !== ''; // Kontrollerar om användaren har angett något
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = () => {
        if (searchQuery.trim()) {
            const firstSpaceIndex = searchQuery.indexOf(" ");
            if (firstSpaceIndex === -1) {
                console.error("Incorrect search format");
                return;
            }

            const continentName = searchQuery.slice(0, firstSpaceIndex);
            const category = searchQuery.slice(firstSpaceIndex + 1);

            if (!continentName || !category) {

                return;
            }

            navigate(`/places/${continentName.toLowerCase()}/${encodeURIComponent(category.toLowerCase())}`);
        }
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto">
            <label
                htmlFor="search"
                className={`absolute left-1 text-textMuted transition-all duration-300 
                    ${isActive ? "top-1 text-md text-textMuted" : "top-3 text-base"}`}
            >
                {label}
            </label>
            <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                placeholder="Enter a continent and categories (e.g., 'northamerica mountains')"
                className="search-input w-full p-3 pt-3 pr-12 border border-bgLine border-opacity-50 rounded-md focus:outline-none bg-[#181a1e] bg-opacity-40
                   focus:border-bgLine text-textMuted shadow-searchShadow sm:text-md md:text-xl lg:text-2xl"
            />
            <div
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-textMuted cursor-pointer"
                onClick={handleSearchSubmit}
            >
                <SearchGlass />
            </div>
        </div>
    );
};

export default SearchHome;
