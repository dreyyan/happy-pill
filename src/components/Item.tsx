// Data
import type { MenuItem } from "../data/MenuData";

const Item: React.FC<MenuItem> = ({ name, imgSrc, price, additionalPrice, additionalDetails, description, onClick }) => {
    return (
        <button onClick={onClick} className="flex flex-col justify-center items-center gap-y-2 py-20 max-h-56 rounded-lg bg-[var(--primary)] transition duration-300 ease-in-out hover:bg-[var(--accent)] hover:translate-y-[-3px] cursor-pointer">
            <h2 className="font-semibold leading-none text-[var(--background)]">{name}</h2>
            <h3 className="font-semibold leading-none text-[var(--background)]">{price.toFixed(2)}</h3>
            <h4 className="font-semibold leading-none text-[var(--background)]">{additionalPrice}</h4>
            <h5 className="font-semibold leading-none text-[var(--background)]">{additionalDetails}</h5>
            <img src={imgSrc} className=""/>
            <p className="font-semibold leading-none text-[var(--background)]">{description}</p>
        </button>
    );
};

export default Item;