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
        <div className="min-h-screen flex flex-col px-[32px] py-[80px]">
            {!selectedCategory && !selectedSection &&
                <h1 className="text-center">MENU</h1>
            }
            {/* Back Button */}
            {selectedCategory &&
                <button onClick={handleBackButton} className="fixed top-22 left-6 rounded-full bg-[var(--text-primary)] text-md transition duration-300 ease-in-out hover:translate-x-[-2px] cursor-pointer z-1">
                    <img src="back-icon.svg" className="h-8"></img>
                </button>
            }
            {/* Main Menu */}
            {!selectedSection && !selectedCategory &&
                <div className="flex flex-col items-center gap-4 p-8 gap-y-8 mt-10">
                    <CategoryCard text="Food" onClick={() => setSelectedCategory("Food")} iconSrc="food-icon-dark.svg"/>
                    <CategoryCard text="Drinks" onClick={() => setSelectedCategory("Drinks")} iconSrc="drinks-icon-dark.svg"/>
                </div>
            }
            {/* Select Section */}
            {selectedCategory && !selectedSection && (
                <div className="pt-4">
                    <h2 className="flex font-bold justify-center text-[var(--text-primary)]">{selectedCategory.toUpperCase()}</h2>
                    <div className="flex flex-col auto-rows-fr flex-1 items-center gap-4 p-8 gap-y-8 pt-4 mt-10">
                        {Object.entries(MenuData[selectedCategory as keyof typeof MenuData]).map(
                            ([sectionName, section]) => (
                                <SectionCard
                                    key={sectionName}
                                    sectionName={sectionName}
                                    description={section.description || ""}
                                    imgSrc={section.imgSrc}
                                    onClick={() => setSelectedSection(sectionName)}
                                />
                            )
                        )}
                    </div>
                </div>
            )}
            {/* Menu Items */}
            {section && (
                <>
                    <div className="pt-4">
                        <h2 className="flex font-bold justify-center text-[var(--text-primary)]">{selectedSection.toUpperCase()}</h2>
                        <div className="hidden sm:grid grid-cols-2 auto-rows-fr flex-1 items-center gap-4 p-8 pt-4">
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
                        <div>
                            {section.items.map((item) => (
                                <button className="sm:hidden mb-4" key={item.name} onClick={() => console.log(item.name)}>
                                    <p>{item.name}</p>
                                    <p>{item.price.toFixed(2)}</p>
                                    <p>{item.additionalPrice}</p>
                                    <p>{item.additionalDetails}</p>
                                    <p>{item.description || ""}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
        );
};
export default Menu;