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
        <button onClick={onClick} className="flex flex-col justify-between items-center gap-y-3 px-6 py-6 h-full rounded-lg bg-[var(--card)] transition duration-300 ease-in-out hover:bg-[var(--accent)] hover:translate-y-[-3px] cursor-pointer">
            <img src={imgSrc} className="border border-[var(--text-primary)] w-full rounded-sm"/>
            <h4 className="font-bold leading-none text-[var(--text-primary)]">{sectionName}</h4>
            <p className="text-xs leading-snug text-[var(--text-primary)] max-w-[300px] break-words">{description}</p>
            
        </button>
    );
};

export default SectionCard;