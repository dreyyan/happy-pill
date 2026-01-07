import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SecondaryButton from "../components/SecondaryButton";
import Styles from "../styles/Styles";

const Home = () => {
    const navigate = useNavigate();

    // Handles

return (
	<div className="">
        {/* Header */}
        <Header/>
        {/* Hero Section */}
        <div className="flex flex-col p-12 gap-y-2">
            <h1 className="text-4xl text-center">Your Daily Dose of Happiness: Eat, Drink, Vibe, Repeat</h1>
            <p className="leading-none body text-center">Your ultimate escape for bold flavors, crafted cocktails, and unforgettable nights.</p>

            {/* Buttons */}
            <div className="flex gap-x-2 w-full mt-4">
                <button onClick={() => navigate("/menu")} className="w-auto rounded-full dm-serif-display-bold px-4 text-[var(--background)] bg-[var(--primary)] transition duration-300 ease-in-out hover:translate-y-[-2px] cursor-pointer">VIEW MENU</button>
                <button className={Styles.secondaryButton}>Reserve</button>
            </div>
        </div>
        {/*  */}
	</div>
	);
};
export default Home;