import { useNavigate } from "react-router-dom";
import Styles from "../styles/Styles";

interface CardProps {
    text: string;
    iconSrc?: string;
    onClick: () => void;
};

const CategoryCard: React.FC<CardProps> = ({ text, iconSrc, onClick }) => {
    const navigate = useNavigate();

    return (
        <button onClick={onClick} className="flex flex-col justify-center items-center gap-y-2 py-20 max-h-56 rounded-lg bg-[var(--primary)] transition duration-300 ease-in-out hover:bg-[var(--accent)] hover:translate-y-[-3px] cursor-pointer">
            <img src={iconSrc} className=""/>
            <h2 className="font-semibold leading-none text-[var(--background)]">{text}</h2>
        </button>
    );
};

export default CategoryCard;