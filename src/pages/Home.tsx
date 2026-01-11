import { useNavigate } from "react-router-dom";
import { useRef } from "react"; // For smooth scroll
import PrimaryButton from "../components/PrimaryButton";
import ShowcaseFeature from "../components/ShowcaseFeature";
import PageTransition from "../PageTransition";

const Home = () => {
    const navigate = useNavigate();
    const featuresRef = useRef<HTMLDivElement | null>(null);

    // [HANDLE] Smooth Scroll to Features
    const handleScroll = () => {
    if (featuresRef.current) {
        const yOffset = -200;
        const y = featuresRef.current.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
    }
    };

    return (
        <PageTransition>
            <div
                className="flex flex-col items-center px-[32px] py-[24px] bg-cover bg-center relative mt-4 mb-20"
                style={{
                    backgroundImage: "url('hero-background.png')"
                }}>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                {/* Body Container */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* Happy Pill Logo */}
                    <img src="happy-pill-icon.png" alt="happy-pill-logo" className="h-[100px] mb-10"/>
                    {/* Hero Text */}
                    <h1 className="text-4xl text-center mb-[24px] text-white drop-shadow-lg">Your Daily Dose of Happiness: Eat, Drink, Vibe, Repeat</h1>
                    {/* Hero Description */}
                    <p className="mb-[64px] leading-none body text-center text-white drop-shadow-md">Your ultimate escape for bold flavors, crafted cocktails, and unforgettable nights.</p>
                    {/* [PRIMARY BUTTON] View Menu */}
                    <PrimaryButton text="VIEW MENU" onClick={() => navigate("/menu")}/>
                    {/* [BUTTON] See More */}
                    <button
                        onClick={handleScroll}
                        className="cursor-pointer opacity-60 transition duration-400 ease-in-out transform hover:opacity-100 hover:-translate-y-[-2px]">
                            {/* [BUTTON] See More */}
                        <img src="see-more-icon.svg" alt="see-more-icon" className="w-8 h-8 mt-12" />
                    </button>
                </div>
            </div>

            {/* Showcase Features */}
<div
  ref={featuresRef}
  className={`
    grid
    grid-cols-1             // mobile
    md:grid-cols-2          // tablet (~≥768px)
    lg:grid-cols-3          // desktop (≥1024px) ← added
    gap-8                   // 2rem – good middle ground
    lg:gap-10               // slightly bigger on very large screens
    xl:gap-12               // optional: generous on ultra-wide
    justify-items-center
    max-w-7xl               // ← very helpful! prevents cards from spreading too wide
    mx-auto                 // center the whole grid
    my-10                   // vertical spacing around the section
    px-6 sm:px-10 lg:px-8   // responsive padding
  `}
>
            <ShowcaseFeature
                title="Crafted Cocktails"
                src="showcase-1.png"
                description="Expertly mixed signature drinks with premium spirits and fresh ingredients – your prescription for happiness."
            />
            
            <ShowcaseFeature
                title="Gourmet Bites & Sharing Plates"
                src="showcase-2.png"
                description="Delicious, elevated food designed for sharing – from bold flavors to comforting classics."
            />
            
            <ShowcaseFeature
                title="Live Music & Events"
                src="showcase-3.png"
                description="Unforgettable nights with local artists, bands, and themed parties – the heart of Iloilo nightlife."
            />
            </div>
        </PageTransition>
    );
};

export default Home;