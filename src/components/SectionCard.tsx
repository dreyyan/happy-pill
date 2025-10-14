import { useNavigate } from "react-router-dom";
import Styles from "../styles/Styles";

interface CardProps {
    sectionName: string;
    description: string;
    imgSrc?: string;
    onClick: () => void;
};

const SectionCard: React.FC<CardProps> = ({ sectionName, description, imgSrc, onClick }) => {
    const navigate = useNavigate();

    return (
        <button onClick={onClick} className="flex flex-col justify-between items-center gap-y-3 px-6 py-10 h-full rounded-lg bg-[var(--primary)] transition duration-300 ease-in-out hover:bg-[var(--accent)] hover:translate-y-[-3px] cursor-pointer">
            <h4 className="font-bold leading-none text-[var(--background)]">{sectionName}</h4>
            <img src={imgSrc} className="hidden border border-[var(--background)] w-full h-10"/>
            <p className="text-xs leading-snug text-[var(--background)] max-w-[300px] break-words">{description}</p>
        </button>
    );
};

export default SectionCard;