import { useState } from "react";

interface CardProps {
  sectionName: string;
  description: string;
  imgSrc?: string;
  onClick: () => void;
}

const SectionCard: React.FC<CardProps> = ({
  sectionName,
  description,
  imgSrc,
  onClick,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

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
        hover:-translate-y-[3px]
        cursor-pointer
        w-full
        max-w-[420px]
        mx-auto
      "
    >
      {imgSrc && (
        <div className="w-full h-[180px] sm:h-[220px] lg:h-[260px] overflow-hidden rounded-t-sm relative">
          {/* Skeleton loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse" />
          )}

          {/* Actual image */}
          <img
            src={imgSrc}
            alt={sectionName}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`
              w-full h-full object-cover object-center
              transition-opacity duration-300
              ${imageLoaded ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>
      )}

      {/* Title */}
      <h4
        className="
          font-bold leading-none
          w-full
          text-[var(--text-primary)]
          bg-[var(--background)]
          mb-5 sm:mb-6
          py-3
          rounded-b-sm
        "
      >
        {sectionName}
      </h4>

      {/* Description */}
      <p
        className="
          text-xs sm:text-sm
          leading-snug
          text-[var(--text-primary)]
          max-w-[280px] sm:max-w-[300px] lg:max-w-[340px]
          break-words
          text-center
        "
      >
        {description}
      </p>
    </button>
  );
};

export default SectionCard;
