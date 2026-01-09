import { useNavigate } from "react-router-dom";
import Styles from "../styles/Styles";

interface CardProps {
  sectionName: string;
  description: string;
  imgSrc?: string;
  onClick: () => void;
}

const SectionCard: React.FC<CardProps> = ({ sectionName, description, imgSrc, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex flex-col items-center 
        px-4 sm:px-6 py-5 sm:py-6 
        h-full 
        rounded-lg 
        bg-[var(--card)] 
        transition duration-300 ease-in-out 
        hover:bg-[var(--accent)] 
        hover:translate-y-[-3px] 
        cursor-pointer 
        w-full 
        max-w-[420px] 
        mx-auto
      "
    >
      {/* Image - remove default bottom gap */}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={sectionName}
          className="w-full h-auto rounded-t-sm block"  // block → removes ~4px default gap
          loading="lazy"
        />
      )}

      {/* Title */}
      <h4 className="
        font-bold leading-none 
        w-full 
        text-[var(--text-primary)] 
        bg-[var(--background)] 
        mb-5 sm:mb-6 
        py-3 
        rounded-b-sm
      ">
        {sectionName}
      </h4>

      {/* Description */}
        <p className="
        text-xs sm:text-sm               /* smaller on mobile, slightly larger on tablet+ */
        leading-snug
        text-[var(--text-primary)]
        max-w-[280px] sm:max-w-[300px] lg:max-w-[340px]   /* scales with screen */
        break-words
        text-center                     /* optional but improves readability */
        ">
        {description}
      </p>
    </button>
  );
};

export default SectionCard;