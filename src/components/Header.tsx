import { Link } from "react-router-dom";
import { useState } from "react";
import Styles from "../styles/Styles";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sticky Header Wrapper */}
      <div className="sticky top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm">
        <div className="flex flex-row text-[var(--text-primary)]">
          {/* Banner */}
          <div className="sm:flex items-center hidden px-8">
            <Link to="/home">
              <img src="happy-pill-banner.png" className="w-22 my-2" />
            </Link>
          </div>

          {/* [MOBILE] Burger Menu */}
          <div className="flex sm:hidden w-full px-4">
            <button
              onClick={() => setOpen(prev => !prev)}
              className="ml-auto"
            >
              <img
                src="burger-menu-icon.svg"
                alt="burger-menu-icon"
                className="w-8 h-8 mt-4 cursor-pointer ml-auto"
              />
            </button>
          </div>

          {/* [DESKTOP] Navigation Links */}
          <div className="hidden sm:flex justify-end items-center gap-x-4 w-full px-8 py-6 text-md header-nav-link">
            <Link to="/home" className={Styles.navigationLink}>HOME</Link>
            <Link to="/menu" className={Styles.navigationLink}>MENU</Link>
            <Link to="/gallery" className={Styles.navigationLink}>GALLERY</Link>
            <Link to="/about-us" className={Styles.navigationLink}>ABOUT US</Link>
            <SecondaryButton
              text="CONTACT / RESERVE"
              onClick={() =>
                window.open("https://www.facebook.com/profile.php?id=61555806119974")
              }
            />
          </div>
        </div>
      </div>

      {/* [MOBILE] Navigation Links - Overlay */}
      {open && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-screen bg-black/90 z-50 flex flex-col justify-center items-center gap-y-6 text-md header-nav-link">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-5 text-2xl text-white cursor-pointer"
            aria-label="Close menu"
          >
            ✕
          </button>

          <Link to="/home" className={Styles.navigationLink} onClick={() => setOpen(false)}>
            HOME
          </Link>
          <Link to="/menu" className={Styles.navigationLink} onClick={() => setOpen(false)}>
            MENU
          </Link>
          <Link to="/gallery" className={Styles.navigationLink} onClick={() => setOpen(false)}>
            GALLERY
          </Link>
          <Link to="/about-us" className={Styles.navigationLink} onClick={() => setOpen(false)}>
            ABOUT US
          </Link>
          <PrimaryButton
            text="CONTACT / RESERVE"
            onClick={() => {
              window.open("https://www.facebook.com/profile.php?id=61555806119974");
              setOpen(false);
            }}
          />
        </div>
      )}

      {/* Spacer to prevent content from being hidden under the sticky header */}
      <div className="h-[72px] sm:h-[88px]" />
    </>
  );
};

export default Header;