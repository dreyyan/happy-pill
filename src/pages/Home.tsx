import { useNavigate } from "react-router-dom";
import { useRef } from "react"; // For smooth scroll
import PrimaryButton from "../components/PrimaryButton";
import ShowcaseFeature from "../components/ShowcaseFeature";

const Home = () => {
    const navigate = useNavigate();
    const featuresRef = useRef<HTMLDivElement | null>(null);

    // Handles
    const handleScroll = () => {
        featuresRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* Hero Section */}
            <div
                className="flex flex-col items-center px-[32px] py-[80px] bg-cover bg-center relative mt-4 mb-60"
                style={{
                    backgroundImage: "url('https://media.worldofinteriors.com/photos/669659b0533c3f662614a1a3/4:3/w_2560%2Cc_limit/ora_7.jpg')"
                }}
            >
                {/* Dark overlay for text contrast */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 flex flex-col items-center">
                    {/* Happy Pill Logo */}
                    <img src="happy-pill-icon.png" alt="happy-pill-logo" className="w-[204px] h-[113px] mb-4"/>
                    <h1 className="text-4xl text-center mb-[24px] text-white drop-shadow-lg">
                        Your Daily Dose of Happiness: Eat, Drink, Vibe, Repeat
                    </h1>
                    <p className="mb-[64px] leading-none body text-center text-white drop-shadow-md">
                        Your ultimate escape for bold flavors, crafted cocktails, and unforgettable nights.
                    </p>

                    {/* [PRIMARY BUTTON] View Menu */}
                    <PrimaryButton text="VIEW MENU" onClick={() => navigate("/menu")}/>
                    {/* [BUTTON] See More */}
                    <button
                        onClick={handleScroll}
                        className="cursor-pointer opacity-60 transition duration-400 ease-in-out transform hover:opacity-100 hover:-translate-y-[-2px]"
                    >
                        <img src="see-more-icon.svg" alt="see-more-icon" className="w-8 h-8 mt-12" />
                    </button>
                </div>
            </div>

            {/* Showcase Features */}
            <div ref={featuresRef} className="flex flex-col items-center space-y-[140px] my-[40px] px-12">
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
        </>
    );
};

export default Home;