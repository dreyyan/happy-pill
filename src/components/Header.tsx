import { Link } from "react-router-dom";
import Styles from "../styles/Styles";
import SecondaryButton from "./SecondaryButton";

const Header = () => {
    // Handles
    const handleContactUsButton = () => {
        
    };
    
    return (
        <div className="flex flex-row text-[var(--text-primary)]">
            {/* Banner */}
            <div className="sm:flex items-center hidden px-8">
                <Link to="/home"><img src="happy-pill-banner.png" className="w-22 my-2"/></Link>
            </div>
            {/* Navigation Links */}
            <div className="flex justify-center items-center gap-x-4 w-full py-4 text-md header-nav-link">
                <Link to="/menu" className={Styles.navigationLink}>MENU</Link>
                <Link to="/gallery" className={Styles.navigationLink}>GALLERY</Link>
                <Link to="/about-us" className={Styles.navigationLink}>ABOUT US</Link>
                <SecondaryButton text="CONTACT US" onClick={() => window.open("https://www.facebook.com/profile.php?id=61555806119974")}/>
            </div>
        </div>
    );
};

export default Header;