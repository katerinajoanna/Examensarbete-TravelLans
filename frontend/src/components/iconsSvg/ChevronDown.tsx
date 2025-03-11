
function ChevronDown({ isOpen }: { isOpen: boolean }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-5 h-5 transition-transform duration-700 ${isOpen ? "rotate-180" : ""}`}
            style={{ filter: "drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.9))" }}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg >
    )
};

export default ChevronDown;