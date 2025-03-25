
import { useState } from 'react';

function ArrowRight() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <span onClick={handleClick}>
            <svg
                className={`w-6 h-6 text-[#031BBD] transition-transform duration-300 transform 
                    ${isClicked ? 'scale-125' : 'hover:scale-110'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.7"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                />
            </svg>
        </span>
    );
}

export default ArrowRight;

