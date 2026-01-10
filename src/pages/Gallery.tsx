import { useState, useEffect } from "react";
import SecondaryButton from "../components/SecondaryButton";
import { galleryCategories } from "../data/GalleryData";

const Gallery = () => {
    document.title = "Gallery | Happy Pill Bar & Resto";

    // States
    const [activeCategory, setActiveCategory] = useState("events");
    const [loading, setLoading] = useState(false);

    // Generate list of image URLs based on active category
    const getImagesToShow = () => {
        if (activeCategory === "all") {
            return galleryCategories.flatMap(cat =>
                cat.images.map(img => `/gallery/${cat.key}/${img}`)
            );
        }
        const category = galleryCategories.find(cat => cat.key === activeCategory);
        return category ? category.images.map(img => `/gallery/${activeCategory}/${img}`) : [];
    };

    const imageUrls = getImagesToShow();

    // [EFFECT] Preload Images for Smoother Transitions
    useEffect(() => {
        if (imageUrls.length === 0) return;

        setLoading(true);

        let loadedCount = 0;
        const totalImages = imageUrls.length;

        const handleLoad = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                setLoading(false);
            }
        };

        imageUrls.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = handleLoad;
            img.onerror = handleLoad; // Count errors too so it doesn't hang
        });
    }, [activeCategory]); // Re-run when category changes

    return (
        <div className="min-h-screen flex flex-col px-[32px] py-[80px] relative">
            <h1 className="text-center text-4xl font-bold mb-10 text-[var(--text-primary)]">
                GALLERY
            </h1>

            {/* Category Filters - Always visible */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <SecondaryButton
                    text="All"
                    onClick={() => setActiveCategory("all")}
                    isActive={activeCategory === "all"}
                />
                {galleryCategories.map(({ key, label }) => (
                    <SecondaryButton
                        key={key}
                        text={label}
                        onClick={() => setActiveCategory(key)}
                        isActive={activeCategory === key}
                    />
                ))}
            </div>

            {/* Loader - Only covers the gallery grid area, not the whole page */}
            {loading && (
                <div className="relative h-96 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-[var(--text-primary)] text-lg">Loading images...</p>
                    </div>
                </div>
            )}

            {/* Gallery Grid - Show only when not loading */}
            {!loading && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {imageUrls.map((src, index) => (
                        <div
                            key={`${activeCategory}-${index}`}
                            className="relative overflow-hidden rounded-lg shadow-lg group"
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Gallery;