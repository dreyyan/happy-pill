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
        <button onClick={onClick} className="flex flex-col justify-center items-center gap-y-2 py-20 max-h-20 w-full rounded-lg bg-[var(--card)] transition duration-300 ease-in-out hover:bg-[var(--accent)] hover:translate-y-[-3px] cursor-pointer">
            <img src={iconSrc} className="size-12"/>
            <p className="playfair-display font-bold text-[28px] text-[var(--text-primary)] leading-none">{text}</p>
        </button>
    );
};

export default CategoryCard;