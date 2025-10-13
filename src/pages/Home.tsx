import Header from "../components/Header";
import SecondaryButton from "../components/SecondaryButton";
import Styles from "../styles/Styles";

const Home = () => {
    // Handles
    const handleExplore = () => {
        
    };
return (
	<div className="">
        {/* Header */}
        <Header/>
        {/* Hero Section */}
        <div className="flex flex-col p-12 gap-y-2">
            <h2 className="text-4xl dm-serif-display-bold">Unwind. Indulge. Repeat.</h2>
            <p className="leading-none">Your go-to spot for good vibes, delicious drinks, and unforgettable nights.</p>

            {/* Buttons */}
            <div className="flex gap-x-2 w-full mt-2">
                <button onClick={handleExplore} className="w-auto rounded-full dm-serif-display-bold px-4 text-[var(--background)] bg-[var(--primary)] transition duration-300 ease-in-out hover:translate-y-[-2px]">View Menu</button>
                <button className={Styles.secondaryButton}>Reserve</button>
            </div>
        </div>
        {/*  */}
	</div>
	);
};
export default Home;