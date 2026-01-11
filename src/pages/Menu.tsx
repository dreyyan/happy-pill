import { useState, useEffect } from "react";
// [IMPORT] Data
import MenuData from "../data/MenuData";
import SectionCard from "../components/SectionCard";
import Item from "../components/Item";
// [IMPORT] Components
import CategoryCard from "../components/CategoryCard";

import PageTransition from "../PageTransition";

const Menu = () => {
  document.title = "Menu | Happy Pill Bar & Resto";

  // States
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  const section = selectedCategory && selectedSection
    ? MenuData[selectedCategory as keyof typeof MenuData]?.[selectedSection]
    : undefined;

  // [EFFECT] Preload category icon images on initial render
  useEffect(() => {
    const iconUrls = [
      "food-icon-dark.svg",
      "drinks-icon-dark.svg",
      "back-icon.svg",
    ];
    iconUrls.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // [EFFECT] Preload menu item images when section changes
  useEffect(() => {
    if (section) {
      setImageLoading(true);
      const imageUrls = section.items
        .filter(item => item.imgSrc)
        .map(item => item.imgSrc) as string[];

      let loadedCount = 0;
      const totalImages = imageUrls.length;

      if (totalImages === 0) {
        setImageLoading(false);
        return;
      }

      imageUrls.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImageLoading(false);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImageLoading(false);
          }
        };
      });
    }
  }, [selectedSection, selectedCategory, section]);

  // [HANDLE] Back Button
  const handleBackButton = () => {
    if (selectedSection) {
      setSelectedSection("");
    } else if (selectedCategory) {
      setSelectedCategory("");
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
        {/* Full-screen Loader */}
        {imageLoading && (
          <div className="fixed inset-0 bg-[var(--background)]/90 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-[var(--text-primary)] text-lg">Loading menu...</p>
            </div>
          </div>
        )}

        {/* Page Title */}
        {!selectedCategory && !selectedSection && (
          <h1 className="text-center text-4xl sm:text-5xl font-bold mb-10 sm:mb-12 text-[var(--text-primary)]">
            MENU
          </h1>
        )}

        {/* [BUTTON] Back */}
        {(selectedCategory || selectedSection) && (
          <button
            onClick={handleBackButton}
            className="fixed top-20 sm:top-24 left-4 sm:left-6 rounded-full bg-[var(--text-primary)] p-2 transition duration-300 ease-in-out hover:translate-x-[-4px] cursor-pointer z-10"
          >
            <img src="back-icon.svg" className="h-6 w-6" alt="Back" />
          </button>
        )}

        {/* Main Menu - Category Selection */}
        {!selectedCategory && !selectedSection && (
          <div className="flex flex-col items-center gap-10 sm:gap-12 px-4 sm:px-8 mt-8 sm:mt-12">
            <CategoryCard
              text="Food"
              onClick={() => setSelectedCategory("Food")}
              iconSrc="food-icon-dark.svg"
            />
            <CategoryCard
              text="Drinks"
              onClick={() => setSelectedCategory("Drinks")}
              iconSrc="drinks-icon-dark.svg"
            />
          </div>
        )}

        {/* Section Selection */}
        {selectedCategory && !selectedSection && (
          <div className="pt-4">
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-8 sm:mb-10">
              {selectedCategory.toUpperCase()}
            </h2>

            <div className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              gap-6 sm:gap-8 lg:gap-10 
              px-10 sm:px-8
            ">
              {Object.entries(MenuData[selectedCategory as keyof typeof MenuData]).map(
                ([sectionName, sectionData]) => (
                  <SectionCard
                    key={sectionName}
                    sectionName={sectionName}
                    description={sectionData.description || ""}
                    imgSrc={sectionData.imgSrc}
                    onClick={() => setSelectedSection(sectionName)}
                  />
                )
              )}
            </div>
          </div>
        )}

        {/* Menu Items */}
        {section && (
          <div className="pt-4 px-4">
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-8 sm:mb-10">
              {selectedSection.toUpperCase()}
            </h2>

            {/* Desktop/Tablet View */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-8 pt-4">
              {section.items.map((item) => (
                <Item
                  key={item.name}
                  name={item.name}
                  imgSrc={item.imgSrc}
                  price={item.price}
                  additionalPrice={item.additionalPrice}
                  additionalDetails={item.additionalDetails}
                  description={item.description || ""}
                  onClick={() => console.log(item.name)}
                />
              ))}
            </div>

            {/* Mobile List View */}
            <div className="sm:hidden flex flex-col gap-6 px-2 sm:px-4 py-6">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-[var(--card)] rounded-xl shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl active:scale-[0.98]"
                  onClick={item.onClick || (() => console.log(item.name))}
                >
                  {item.imgSrc ? (
                    <div className="relative h-52 w-full">
                      <img
                        src={item.imgSrc}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  ) : (
                    <div className="h-52 w-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-4xl text-gray-500">🍽️</span>
                    </div>
                  )}

                  <div className="p-5">
                    <h4 className="font-bold text-lg text-[var(--text-primary)] mb-2">
                      {item.name}
                    </h4>

                    {(item.quantity || item.variants) && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.quantity && (
                          <span className="text-xs font-medium px-3 py-1 bg-[var(--accent-muted)] text-[var(--text-secondary)] rounded-full">
                            {item.quantity}
                          </span>
                        )}
                        {item.variants && item.variants.length > 0 && (
                          <div className="relative group">
                            <span className="text-xs font-medium px-3 py-1 bg-[var(--badge-bg)] text-[var(--badge-text)] rounded-full cursor-pointer">
                              {item.variants.length} variant{item.variants.length > 1 ? 's' : ''}
                            </span>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-[var(--background)] border border-[var(--primary)] text-[var(--text-primary)] text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10 shadow-xl">
                              <div className="flex flex-col items-center gap-1">
                                {item.variants.map((variant) => (
                                  <span key={variant}>{variant}</span>
                                ))}
                              </div>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[var(--background)]" />
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex items-end gap-3 mb-3">
                      <p className="text-2xl font-bold text-[var(--price-main)]">
                        ₱{item.price.toFixed(2)}
                      </p>
                      {item.additionalPrice && (
                        <p className="text-lg font-semibold text-[var(--price-secondary)]">
                          / ₱{item.additionalPrice.toFixed(2)}
                        </p>
                      )}
                    </div>

                    {item.additionalDetails && item.additionalDetails.length > 0 && (
                      <p className="text-sm text-[var(--text-secondary)] mb-2 italic">
                        {item.additionalDetails.join(" • ")}
                      </p>
                    )}

                    {item.description && (
                      <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Menu;