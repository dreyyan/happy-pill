interface CardProps {
  text: string;
  iconSrc?: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CardProps> = ({ text, iconSrc, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex flex-col justify-center items-center 
        gap-y-3 sm:gap-y-4 
        py-16 sm:py-20 
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
        <img 
          src={iconSrc} 
          alt={text} 
          className="size-10 sm:size-12" 
          loading="lazy"
        />
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