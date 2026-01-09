// Data
import type { MenuItem } from "../data/MenuData";

const Item: React.FC<MenuItem> = ({
  name,
  imgSrc,
  price,
  additionalPrice,
  additionalDetails,
  description,
  onClick,
  variants,
}) => {
  return (
    <button
      onClick={onClick}
      className="
        group
        flex flex-col justify-start items-start
        h-auto rounded-lg
        bg-[var(--card)]
        transition duration-300 ease-in-out
        hover:bg-[var(--accent)]
        hover:translate-y-[-3px]
        cursor-pointer
        w-full max-w-[420px] mx-auto
        overflow-hidden
      "
    >
      {/* Image */}
      <div className="w-full overflow-hidden bg-[var(--background)]">
        <img
          src={imgSrc || "happy-pill-banner.png"}
          alt={name}
          className="
            w-full h-auto max-h-48 sm:max-h-60
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="px-4 sm:px-5 pt-3 sm:pt-4 pb-4 sm:pb-5 w-full space-y-3 sm:space-y-4">
        {/* Name */}
        <h6 className="font-semibold text-base sm:text-lg leading-tight text-[var(--text-primary)]">
          {name}
        </h6>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm leading-snug text-[var(--text-secondary)] line-clamp-2">
            {description}
          </p>
        )}

        {/* Price & Details */}
        <div className="space-y-2 text-sm sm:text-base">
          <div className="flex justify-between items-baseline">
            <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
              {additionalDetails?.[0] || ""}
            </span>
            <span className="font-bold text-[var(--price-main)]">
              ₱{price.toFixed(2)}
            </span>
          </div>

          {additionalPrice !== undefined && (
            <div className="flex justify-between items-baseline">
              <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                {additionalDetails?.[1] || ""}
              </span>
              <span className="font-bold text-[var(--price-secondary)]">
                ₱{additionalPrice.toFixed(2)}
              </span>
            </div>
          )}
        </div>

        {/* Variants */}
        {variants && variants.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {variants.map((variant, index) => (
              <span
                key={index}
                className="
                  px-2.5 py-1
                  text-xs sm:text-sm font-medium
                  rounded-md
                  bg-[var(--accent)]/20
                  text-[var(--text-primary)]
                  border border-[var(--accent)]/30
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