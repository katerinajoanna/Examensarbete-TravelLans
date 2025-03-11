import { ModalProps } from "../types/modal";
import CloseIcon from "./iconsSvg/CloseIcon";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-bgButton bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-gradient-to-r from-[#f5f5f5] to-[#e8edd2]  text-base md:text-lg lg:text-2xl lx:text-2xl font-robotoSerif p-6 border border-bgLine rounded-md shadow-imgShadow 
            w-[90%] max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl relative">

                <button onClick={onClose} className="absolute top-2 right-2">
                    <CloseIcon />
                </button>

                {children}
            </div>
        </div>

    );
};

export default Modal;