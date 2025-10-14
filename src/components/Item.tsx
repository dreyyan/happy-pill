// Data
import type { MenuItem } from "../data/MenuData";

const Item: React.FC<MenuItem> = ({ name, imgSrc, price, additionalPrice, additionalDetails, description, onClick, variants }) => {
    return (
        <button onClick={onClick} className="flex flex-col justify-start items-center h-full px-4 pt-6 py-20 gap-y-1 max-h-56 rounded-lg bg-[var(--primary)] transition duration-300 ease-in-out hover:bg-[var(--accent)] hover:translate-y-[-3px] cursor-pointer">
            <h3 className="font-semibold leading-none text-[var(--background)]">{name}</h3>
            <p className="text-sm leading-none text-[var(--background)]">{additionalDetails}</p>
            {/* <img src={imgSrc} className="h-14"/> */}
            <div className="hidden w-full bg-[var(--background)]">IMAGE</div>
            <p className="font-semibold leading-none text-[var(--background)]">{description}</p>
            <h4 className="font-semibold leading-none text-[var(--background)]">₱{price.toFixed(2)}</h4>
            <p className="texet-xs leading-none text-[var(--background)]">{additionalPrice ? "₱" : ""}{additionalPrice?.toFixed(2)}</p>
            {/* Variants at the bottom */}
            {variants && variants.length > 0 && (
                <div className="mt-auto flex gap-2 justify-start pt-2">
                {variants.map((variant, index) => (
                    <div
                    key={index}
                    className="w-6 h-6 rounded border border-[var(--secondary)] bg-[var(--accent)] flex items-center justify-center text-[var(--background)] text-xs"
                    >
                    {variant}
                    </div>
                ))}
                </div>
            )}
        </button>
    );
};

export default Item;