import { Link } from "react-router-dom";
import Styles from "../styles/Styles";
import SecondaryButton from "./SecondaryButton";

const Header = () => {
    return (
        <div className="flex flex-row bg-[var(--primary)] text-[var(--background)]">
            {/* Banner */}
            <div className="hidden px-8">
                <Link to="/"><img src="happy-pill-banner.png" className="w-22 my-2"/></Link>
            </div>
            {/* Navigation Links */}
            <div className="flex justify-end items-center gap-x-4 w-full py-4 pr-6 text-md dm-serif-display">
                <Link to="/menu" className={Styles.navigationLink}>Menu</Link>
                <Link to="/gallery" className={Styles.navigationLink}>Gallery</Link>
                <Link to="/about-us" className={Styles.navigationLink}>About Us</Link>
                <SecondaryButton text="Contact Us"/>
            </div>
        </div>
    );
};

export default Header;