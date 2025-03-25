import { IconProps } from "../../types/iconProps";

function MenuIcon({ onClick }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            stroke="#031BBD"
            className="w-6 sm:w-7 md:w-8 lg:w-9 cursor-pointer transform scale-x-[-1]"
            onClick={onClick}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
        </svg>
    );
}

export default MenuIcon;
