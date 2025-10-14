import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Components
import Styles from "../styles/Styles";
import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";

// Data
import MenuData from "../data/MenuData";
import SectionCard from "../components/SectionCard";
import Item from "../components/Item";

const Menu = () => {
    const navigate = useNavigate();

    // States
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSection, setSelectedSection] = useState("");

    const section = selectedCategory && selectedSection
    ? MenuData[selectedCategory as keyof typeof MenuData]?.[selectedSection]
    : undefined;

    // Handles
    const handleBackButton = () => {
        if (selectedSection) {
            setSelectedSection("");
        } else if (selectedCategory) {
            setSelectedCategory("");
        }
    };
return (
	<div className="min-h-screen flex flex-col">
        {/* Header */}
        <div><Header/></div>
        {/* Back Button */}
        {selectedCategory &&
            <button onClick={handleBackButton} className="fixed top-20 left-4 w-20 h-8 rounded-full border-2 border-[var(--primary)] dm-serif-display-bold px-4 text-[var(--background)] bg-[var(--accent)] transition duration-300 ease-in-out hover:translate-y-[-2px] cursor-pointer z-1">Back</button>
        }
        {/* Main Menu */}
        {!selectedSection && !selectedCategory &&
            <div className="grid grid-cols-2 flex-1 items-center gap-4 p-8 gap-y-2">
                <CategoryCard text="Food" onClick={() => setSelectedCategory("Food")} iconSrc="food-icon-dark.svg"/>
                <CategoryCard text="Drinks" onClick={() => setSelectedCategory("Drinks")} iconSrc="drinks-icon-dark.svg"/>
            </div>
        }
        {/* Select Section */}
        {selectedCategory && !selectedSection && (
            <div className="grid grid-cols-2 auto-rows-fr flex-1 items-center gap-4 p-8 pt-16">
                {Object.entries(MenuData[selectedCategory as keyof typeof MenuData]).map(
                    ([sectionName, section]) => (
                        <SectionCard
                            key={sectionName}
                            sectionName={sectionName}
                            description={section.description || ""}
                            onClick={() => setSelectedSection(sectionName)}
                        />
                    )
                )}
            </div>
        )}
        {/* Menu Items */}
        {section && (
            <div className="grid grid-cols-2 auto-rows-fr flex-1 items-center gap-4 p-8 pt-16">
                {section.items.map((item) => (
                    <Item
                        key={item.name}
                        name={item.name}
                        imgSrc={item.imgSrc || "happy-pill-banner.png"}
                        price={item.price}
                        additionalPrice={item.additionalPrice}
                        additionalDetails={item.additionalDetails}
                        description={item.description || ""}
                        onClick={() => console.log(item.name)}
                    />
                ))}
            </div>
        )}
	</div>
	);
};
export default Menu;