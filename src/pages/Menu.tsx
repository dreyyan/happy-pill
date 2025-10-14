import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Components
import Styles from "../styles/Styles";
import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";

// Data
import MenuData from "../data/MenuData";
import SectionCard from "../components/SectionCard";

const Menu = () => {
    const navigate = useNavigate();

    // Handles
    const [level, setLevel] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSection, setSelectedSection] = useState("");
return (
	<div className="min-h-screen flex flex-col">
        {/* Header */}
        <div>
            <Header/>
        </div>
        {/* Main Menu */}
        {selectedCategory === "" &&
            <div className="border grid grid-cols-2 flex-1 items-center gap-4 p-12 gap-y-2">
                <CategoryCard text="Food" onClick={() => setSelectedCategory("Food")} iconSrc="food-icon-dark.svg"/>
                <CategoryCard text="Drinks" onClick={() => setSelectedCategory("Drinks")} iconSrc="drinks-icon-dark.svg"/>
            </div>
        }
        {/* Menu Section */}
        {selectedCategory === "Food" && (
            <div className="border grid grid-cols-2 auto-rows-fr flex-1 items-center gap-4 p-12">
            {Object.entries(MenuData.Food).map(([sectionName, section]) => (
                <SectionCard sectionName={sectionName} description={section.description || ""} onClick={() => setSelectedSection(sectionName)}/>
            ))}
            </div>
        )}
        {selectedCategory === "Drinks" && (
            <div className="border grid grid-cols-2 auto-rows-fr flex-1 items-center gap-4 p-12">
            {Object.entries(MenuData.Drinks).map(([sectionName, section]) => (
                <SectionCard sectionName={sectionName} description={section.description || ""} onClick={() => setSelectedSection(sectionName)}/>
            ))}
            </div>
        )}
        {/* Menu Items */}
        {/* <div className="border grid grid-cols-2 auto-rows-fr flex-1 items-center gap-4 p-12">
        {Object.entries(MenuData.Food).map(([sectionName, section]) => (
            <SectionCard sectionName={sectionName} description={section.description || ""} onClick={() => setSelectedSection(sectionName)}/>
        ))}
        </div> */}
	</div>
	);
};
export default Menu;