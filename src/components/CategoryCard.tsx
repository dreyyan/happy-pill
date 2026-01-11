import { useState } from "react";

interface CardProps {
  text: string;
  iconSrc?: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CardProps> = ({ text, iconSrc, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <button
      onClick={onClick}
      className="
        flex flex-col justify-center items-center 
        gap-y-3 sm:gap-y-4 
        py-12 sm:py-16   /* slightly less vertical padding for balance */
        w-full 
        max-w-[420px] 
        mx-auto 
        rounded-lg 
        bg-[var(--card)] 
        transition duration-300 ease-in-out 
        hover:bg-[var(--accent)] 
        hover:translate-y-[-3px] 
        cursor-pointer
      "
    >
      {iconSrc && (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20"> {/* smaller than before */}
          {/* Skeleton / shimmer */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse before:absolute before:inset-0 before:bg-gradient-to-r before:from-gray-300/70 before:via-gray-200/30 before:to-gray-300/70 before:animate-[shine_1.5s_infinite]" />
          )}

          {/* Actual Image */}
          <img
            src={iconSrc}
            alt={text}
            className={`
              w-full h-full object-contain 
              transition-opacity duration-500
              ${imageLoaded ? "opacity-100" : "opacity-0"}
            `}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </div>
      )}

      <p className="
        playfair-display 
        font-bold 
        text-2xl sm:text-[28px] 
        text-[var(--text-primary)] 
        leading-none
      ">
        {text}
      </p>
    </button>
  );
};

export default CategoryCard;
