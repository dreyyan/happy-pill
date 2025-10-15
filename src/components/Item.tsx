// Data
import type { MenuItem } from "../data/MenuData";

const Item: React.FC<MenuItem> = ({ name, imgSrc, price, additionalPrice, additionalDetails, description, onClick, variants }) => {
    return (
        <button onClick={onClick} className="flex flex-col justify-start items-start h-auto gap-y-1 max-h-56 rounded-lg bg-[var(--primary)] transition duration-300 ease-in-out hover:bg-[var(--accent)] hover:translate-y-[-3px] cursor-pointer">
            <img src={imgSrc} className="w-full mx-auto rounded-t-lg bg-[var(--background)]"/>
            <div className="px-2 pt-1 space-y-2 w-full"> 
                <h6 className="font-[600] leading-none text-[var(--background)]">{name}</h6>
                {/* <p className="text-sm leading-none text-[var(--background)]">{additionalDetails}</p> */}
                <p className="font-semibold leading-none text-[var(--background)]">{description}</p>
                {/* Details /w Prices */}
                <div className="leading-none space-y-1 flex flex-col [&>div>p]:text-[var(--background)]">
                    <div className={`flex ${additionalDetails !== undefined ? "justify-between" : "justify-center"} items-center`}>
                        <p className="text-[10px]">{additionalDetails?.[0]}</p>
                        <p className="text-[12px] leading-none text-[var(--background)]">
                            {price.toFixed(2)}
                        </p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="text-xs">{additionalDetails?.[1]}</p>
                        <p className="text-sm font-semibold leading-none text-[var(--background)]">
                            {additionalPrice ? "" : ""}
                            {additionalPrice?.toFixed(2)}
                        </p>
                    </div>
                </div>
                <span className="flex gap-x-2"></span>
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
            </div>
        </button>
    );
};

export default Item;