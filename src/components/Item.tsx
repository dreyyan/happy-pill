const Item: React.FC<MenuItem & { isSelected?: boolean }> = ({
  name,
  imgSrc,
  price,
  additionalPrice,
  additionalDetails,
  description,
  onClick,
  variants,
  isSelected = false,  // ← new optional prop
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        group
        flex flex-col
        h-full rounded-xl overflow-hidden
        bg-[var(--card)]
        transition-all duration-300 ease-out
        hover:bg-[var(--accent)]/5
        hover:shadow-xl
        hover:-translate-y-1.5
        cursor-pointer
        w-full
        shadow-sm
        ${isSelected 
          ? 'border-2 border-[var(--accent)]' 
          : 'border border-[var(--card-border)]/40'
        }
      `}
    >
      {/* Image - better responsive height */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] overflow-hidden bg-[var(--background)]">
        <img
          src={imgSrc}
          alt={name}
          className={`
            w-full h-full
            object-cover
            transition-transform duration-700
            group-hover:scale-105
            flex justify-center items-center
            text-[var(--text-secondary)]
          `}
          loading="lazy"
        />
      </div>
      {/* Content - much better scaling */}
      <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow space-y-3 sm:space-y-4">
        {/* Name */}
        <p className="
          font-semibold
          text-base sm:text-lg lg:text-xl
          leading-tight
          text-[var(--text-primary)]
        ">
          {name}
        </p>
        {/* Description - remove clamp on larger screens */}
        {description && (
          <p className="
            text-sm sm:text-base
            leading-relaxed
            text-[var(--text-secondary)]
            line-clamp-3 sm:line-clamp-none
          ">
            {description}
          </p>
        )}
        {/* Price & Details */}
        <div className={`
          mt-auto
          ${ (additionalPrice !== undefined || (variants && variants.length > 0)) 
            ? 'pt-2 border-t-1 border-[var(--text-primary)]/60 space-y-2.5' 
            : '' 
          }
        `}>
          <div className="flex justify-between items-baseline gap-3">
            <span className="text-sm sm:text-sm text-[var(--text-secondary)]">
              {additionalDetails?.[0] || " "}
            </span>
            <span className="font-bold text-lg sm:text-xl text-[var(--price-main)]">
              ₱{price.toFixed(2)}
            </span>
          </div>

          {additionalPrice !== undefined && (
            <div className="flex justify-between items-baseline gap-3">
              <span className="text-sm font-bold sm:text-sm text-[var(--text-secondary)]">
                {additionalDetails?.[1] || " "}
              </span>
              <span className="font-bold text-base sm:text-lg text-[var(--price-secondary)]">
                ₱{additionalPrice.toFixed(2)}
              </span>
            </div>
          )}
        </div>

        {/* Variants */}
        {variants && variants.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-3">  {/* ← pt-3 when it exists */}
            {variants.map((variant, i) => (
              <span
                key={i}
                className="
                  px-2.5 py-1
                  text-xs sm:text-sm
                  font-medium
                  rounded-full
                  bg-[var(--accent)]/10
                  text-[var(--accent)]
                  border border-[var(--accent)]/20
                "
              >
                {variant}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
};
export default Item;