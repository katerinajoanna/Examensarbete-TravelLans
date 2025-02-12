
function MenuIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            stroke="#031BBD"
            className="w-6, h-6"
            transform="scale(-1, 1)" // Obrót lustrzany w poziomie
            onClick={() => console.log("Kliknięto ikonę!")}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
        </svg>
    );
}

export default MenuIcon;
