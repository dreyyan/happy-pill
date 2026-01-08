import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Styles from "../styles/Styles";

import PrimaryButton from "../components/PrimaryButton";
import ShowcaseFeature from "../components/ShowcaseFeature";

const Home = () => {
    const navigate = useNavigate();

    // Handles

return (
	<div className="">
        {/* Hero Section */}
        <div className="flex flex-col items-center px-[32px] py-[80px]">
            {/* Happy Pill Logo */}
            <img src="happy-pill-icon.png" alt="happy-pill-logo" className="w-[204px] h-[113px] mb-4"/>
            <h1 className="text-4xl text-center mb-[24px]">Your Daily Dose of Happiness: Eat, Drink, Vibe, Repeat</h1>
            <p className="mb-[64px] leading-none body text-center">Your ultimate escape for bold flavors, crafted cocktails, and unforgettable nights.</p>

            {/* [PRIMARY BUTTON] VIEW MENU */}
            <PrimaryButton text="VIEW MENU" onClick={() => navigate("/menu")} width="40%"/>

            <button className="cursor-pointer opacity-60 transition duration-400 ease-in-out transform hover:opacity-100 hover:-translate-y-[-2px]">
            <img src="see-more-icon.svg" alt="see-more-icon" className="w-8 h-8 mt-12" />
            </button>
        </div>

        {/* Showcase Features */}
        <div className="space-y-[140px] my-[40px]">
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
	</div>
	);
};
export default Home;