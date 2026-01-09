export type MenuItem = {
    name: string;
    imgSrc?: string;
    price: number;
    additionalPrice?: number;
    additionalDetails?: string[];
    description?: string;
    quantity?: string;
    variants?: string[];
    onClick?: () => void;
};
type MenuSection = Record<string, { description?: string; imgSrc?: string; items: MenuItem[] }>;
type MenuDataType = Record<string, MenuSection>;
const MenuData: MenuDataType = {
    Food: {
        "Appetizers": {
            "description": "Start your meal with our crispy, savory, and shareable appetizers — perfect for pairing with drinks or as a light bite.",
            "imgSrc": "menu/food/appetizers.png",
            "items": [
                {
                    name: "French Fries",
                    price: 120.00,
                    imgSrc: "menu/food/french-fries.jpg",
                    additionalPrice: 130.00,
                    additionalDetails: ["No Flavor", "Sour Cream | BBQ | Cheese"],
                    variants: ["Sour Cream", "BBQ", "Cheese"]
                },
                {
                    name: "Mojos",
                    price: 120.00,
                    imgSrc: "menu/food/mojos.jpg",
                    additionalPrice: 130.00,
                    additionalDetails: ["No Flavor", "Sour Cream | BBQ | Cheese"],
                    variants: ["Sour Cream", "BBQ", "Cheese"]
                },
                { 
                    name: "Street Food Platter", 
                    price: 120.00,
                    imgSrc: "menu/food/street-food-platter.png"
                },
                { 
                    name: "Cheese Sticks", 
                    price: 120.00,
                    imgSrc: "menu/food/cheese-sticks.png"
                },
                { 
                    name: "Lumpia Shanghai", 
                    price: 120.00,
                    imgSrc: "menu/food/lumpia-shanghai.png"
                },
                { 
                    name: "Chicken Skin", 
                    price: 200.00,
                    imgSrc: "menu/food/appetizers.png"
                },
                { 
                    name: "Nachos", 
                    price: 200.00,
                    imgSrc: "menu/food/nachos.jpg"
                },
                { 
                    name: "Siomai", 
                    price: 100.00, 
                    quantity: "12 pcs.", 
                    variants: ["Steamed", "Fried"],
                    imgSrc: ""
                },
            ]
        },
        "Guisarap!": {
            "description": "Classic Filipino noodle favorites cooked to perfection — perfect for any craving.",
            "imgSrc": "menu/food/guisarap.png",
            "items": [
            { 
                name: "Bijon Guisado", 
                price: 250.00,
                imgSrc: "menu/food/guisarap.png",
            },
            { 
                name: "Canton Guisado", 
                price: 250.00,
                imgSrc: ""
            },
            { 
                name: "Sotanghon Guisado", 
                price: 250.00,
                imgSrc: "menu/food/sotanghon-guisado.png",
            },
            ]
        },
        "Chicken Classics": {
            "description": "All-time favorite chicken dishes, from spicy wings to buttered goodness.",
            "imgSrc": "menu/food/chicken-classics.png",
            "items": [
            { 
                name: "Buffalo Wings", 
                price: 250.00,
                imgSrc: "menu/food/chicken-classics.png",
            },
            { 
                name: "Buttered Chicken", 
                price: 250.00,
                imgSrc: "",
            },
            { 
                name: "Chicken Teriyaki", 
                price: 250.00,
                imgSrc: "",
            },
            { 
                name: "Fried Chix", 
                price: 220.00,
                imgSrc: "menu/food/fried-chix.png"
            },
            // /w Fries/Mojos
            ]
        },
        "Pork Favorites": {
            "description": "Juicy and flavorful pork dishes that bring comfort with every bite.",
            "imgSrc": "menu/food/pork-favorites.png",
            "items": [
                {
                    name: "Lechon Kawali",
                    price: 250.00,
                    imgSrc: "menu/food/lechon-kawali.jpg",
                },
                {
                    name: "Pork Sisig",
                    price: 250.00,
                    imgSrc: "",
                },
                {
                    name: "Adobo Backribs",
                    price: 280.00,
                    imgSrc: "menu/food/adobo-backribs.jpg",
                },
                { 
                    name: "Pork Bulalo",
                    price: 250.00,
                    imgSrc: "menu/food/pork-favorites.png"
                },
            ]
        },
        "Seafood Specials": {
            "description": "From crispy to sizzling — taste the freshness of the sea in every bite.",
            "imgSrc": "menu/food/seafood-specials.png",
            "items": [
                {
                    name: "Calamares",
                    price: 200.00,
                    imgSrc: "menu/food/calamares.png",
                },
                {
                    name: "Fish Fillet", 
                    price: 200.00,
                    imgSrc: "menu/food/fish-fillet.png",
                },
                {
                    name: "Sinigang Bangus", 
                    price: 400.00,
                    imgSrc: "",
                },
                {
                    name: "Sisig Bangus", 
                    price: 300.00,
                    imgSrc: "",
                },
                {
                    name: "Sizzling Bangus", 
                    price: 350.00,
                    imgSrc: "",
                },
            ]
        },
        "Afforda-Rice": {
            "description": "Simple but satisfying rice options to pair with any meal.",
            "items": [
                { name: "Plain Rice", price: 25.00 },
                { name: "Garlic Rice", price: 30.00 },
            ]
        },
        "Budget Meals": {
            "description": "Delicious rice meals that won’t break the bank — perfect for solo cravings.",
            "imgSrc": "menu/food/budget-meals.png",
            "items": [
                {
                    name: "Calamares",
                    price: 130.00,
                    imgSrc: "menu/food/budget-calamares.jpg",
                },
                { 
                    name: "Chicken Skin", 
                    price: 130.00,
                    imgSrc: "menu/food/budget-chicken-skin.png",
                },
                { name: "Fish Fillet", price: 130.00 },
                { 
                    name: "Sweet & Sour Tofu", 
                    price: 130.00,
                    imgSrc: "",
                },
                { 
                    name: "Sizzling Tofu", 
                    price: 130.00,
                    imgSrc: ""
                },
                { 
                    name: "Sizzling Sisig", 
                    price: 155.00,
                    imgSrc: ""
                },
                {
                    name: "Sizzling Bangus",
                    price: 175.00,
                    imgSrc: "menu/food/budget-sizzling-bangus.png",
                },
                {
                    name: "Fried Chix",
                    price: 150.00,
                    imgSrc: "menu/food/budget-fried-chix.png",
                },
                { name: "Teriyaki", price: 150.00 },
                {
                    name: "Buttered Chicken",
                    price: 150.00,
                    imgSrc: "menu/food/budget-buttered-chicken.png",
                },
                {
                    name: "Buffalo Wings",
                    price: 150.00,
                    imgSrc: "",
                },
                {
                    name: "Adobo Backribs",
                    price: 175.00,
                    imgSrc: "",
                },
                {
                    name: "Lechon Kawali",
                    price: 150.00,
                    imgSrc: "menu/food/budget-lechon-kawali.png",
                },
            ]
        },
        "Yum-Silog!": {
            "description": "The ultimate Filipino comfort meals — sunny-side up egg, garlic rice, and your favorite ulam!",
            "imgSrc": "menu/food/yumsilog.png",
            "items": [
                { 
                    name: "Cornsilog", 
                    price: 120.00,
                    imgSrc: ""
                },
                { 
                    name: "Tocilog", 
                    price: 120.00,
                    imgSrc: "menu/food/tocilog.png"
                },
                { 
                    name: "Tapsilog", 
                    price: 130.00,
                    imgSrc: "menu/food/yumsilog.png"
                },
            ]
        },
    },
    Drinks: {
        "Happy Towers": {
            "description": "Big towers, bigger fun! Shareable cocktail towers perfect for barkada nights.",
            "imgSrc": "menu/drinks/happy-towers.jpg",
            "items": [
                {
                    name: "Grapes",
                    price: 400.00,
                    additionalPrice: 600.00,
                    additionalDetails: ["1.5L", "3L"],
                    imgSrc: ""
                },
                {
                    name: "Strawberry",
                    price: 400.00,
                    additionalPrice: 600.00,
                    additionalDetails: ["1.5L", "3L"],
                    imgSrc: ""
                },
                {
                    name: "Dalandan",
                    price: 400.00,
                    additionalPrice: 600.00,
                    additionalDetails: ["1.5L", "3L"],
                    imgSrc: ""
                },
                {
                    name: "Pomelo",
                    price: 400.00,
                    additionalPrice: 600.00,
                    additionalDetails: ["1.5L", "3L"],
                    imgSrc: ""
                },
            ]
        },
        "Alcohol Avenue": {
            "description": "A curated list of liquors and spirits to lift your mood and get the party going.",
            "imgSrc": "menu/drinks/alcohol-avenue.webp",
            "items": [
                {
                    name: "Jinro Soju Grapefruit",
                    price: 195.00,
                    quantity: "360 mL",
                    imgSrc: "menu/drinks/jinro-soju-grapefruit.jpg"
                },
                {
                    name: "Clvb Emperador",
                    price: 350.00,
                    imgSrc: "menu/drinks/clvb-emperador.jpg"
                },
                {
                    name: "Charles & James",
                    price: 500.00,
                    imgSrc: "menu/drinks/charles-and-james.jpg"
                },
                {
                    name: "Andy Player",
                    price: 500.00,
                    quantity: "2 bottles",
                    imgSrc: "menu/drinks/andy-player.png"
                },
                {
                    name: "Primera",
                    price: 500.00,
                    imgSrc: "menu/drinks/primera-light.png"
                },
                {
                    name: "Alhambra Solera Light",
                    price: 650.00,
                    quantity: "1L",
                    imgSrc: "menu/drinks/alhambra-solera-light.webp"
                },
                {
                    name: "Alfonso Light",
                    price: 650.00,
                    quantity: "1L",
                    imgSrc: "menu/drinks/alfonso-light.jpg"
                },
                {
                    name: "Fundador Super Special",
                    price: 700.00,
                    quantity: "1L",
                    imgSrc: "menu/drinks/fundador-super-special.webp"
                },
                {
                    name: "Carlos I Light",
                    price: 780.00,
                    imgSrc: "menu/drinks/carlos-I-light.jpg"
                },
                {
                    name: "Fundador Light",
                    price: 750.00,
                    imgSrc: "menu/drinks/fundador-light.webp"
                },
                {
                    name: "Smirnoff Vodka",
                    price: 1060.00,
                    imgSrc: "menu/drinks/smirnoff-vodka.jpg"
                },
                {
                    name: "Absolut Vodka",
                    price: 1198.00,
                    quantity: "700 mL",
                    imgSrc: "menu/drinks/absolut-vodka.jpg"
                },
                {
                    name: "Bacardi White Rum",
                    price: 1260.00,
                    imgSrc: "menu/drinks/bacardi-white-rum.jpg"
                },
                {
                    name: "Jose Cuervo Tequila",
                    price: 1900.00,
                    additionalPrice: 2300.00,
                    additionalDetails: ["700 mL", "1L"],
                    imgSrc: "menu/drinks/jose-cuervo-tequila.jpg"
                },
                {
                    name: "Jim Beam",
                    price: 1880.00,
                    quantity: "1L",
                imgSrc: "menu/drinks/jim-beam.webp"
                },
                {
                    name: "Johnnie Walker Red Label",
                    price: 1550.00,
                    imgSrc: "menu/drinks/johnnie-walker-red-label.webp"
                },
                {
                    name: "Johnny Walker Black Label",
                    price: 2400.00,
                    imgSrc: "menu/drinks/johnnie-walker-black-label.webp"
                },
                {
                    name: "Johnny Walker Double Black",
                    price: 3500.00,
                    imgSrc: "menu/drinks/johnnie-walker-double-black.png"
                },
                {
                    name: "Chivais Regal",
                    price: 2130.00,
                    quantity: "700 mL",
                    imgSrc: "menu/drinks/chivais-regal.png"
                },
                {
                    name: "Jack Daniel's Whiskey",
                    price: 2250.00,
                    quantity: "700 mL",
                    imgSrc: "menu/drinks/jack-daniels-whiskey.webp"
                },
                {
                    name: "Tanduay Light",
                    price: 300.00,
                    additionalPrice: 550.00,
                    additionalDetails: ["1 bottle", "2 bottles"],
                    imgSrc: "menu/drinks/tanduay-light.webp"
                },
                {
                    name: "Tanduay Select",
                    price: 350.00,
                    additionalPrice: 600.00,
                    additionalDetails: ["1 bottle", "2 bottles"],
                    imgSrc: "menu/drinks/tanduay-select.webp"
                },
                {
                    name: "Tanduay Flavored",
                    price: 280.00,
                    additionalPrice: 500.00,
                    additionalDetails: ["1 bottle", "2 bottles"],
                    imgSrc: "menu/drinks/tanduay-flavored.jpg"
                },
            ]
        },
        "Bottle/Bucket": {
            "description": "Grab a bottle or share a bucket — with bonus snacks to complete your chill night.",
            "imgSrc": "menu/drinks/bucket-san-mig-pilsen.jpg",
            "items": [
                {
                    name: "San Mig Light",
                    price: 80.00,
                    additionalPrice: 475.00,
                    additionalDetails: ["1 bottle", "5 bottles + 1 bottle or finger food of choice"],
                    imgSrc: "menu/drinks/bucket-san-mig-light.jpg"
                },
                {
                    name: "San Mig Apple",
                    price: 80.00,
                    additionalPrice: 475.00,
                    additionalDetails: ["1 bottle", "5 bottles + 1 bottle or finger food of choice"],
                    imgSrc: "menu/drinks/bucket-san-mig-apple.jpg"
                },
                {
                    name: "San Mig Pilsen",
                    price: 80.00,
                    additionalPrice: 475.00,
                    additionalDetails: ["1 bottle", "5 bottles + 1 bottle or finger food of choice"],
                    imgSrc: "menu/drinks/bucket-san-mig-pilsen.jpg"
                },
                {
                    name: "Stallion",
                    price: 80.00,
                    additionalPrice: 475.00,
                    additionalDetails: ["1 bottle", "5 bottles + 1 bottle or finger food of choice"],
                    imgSrc: "menu/drinks/bucket-stallion.jpg"
                },
                {
                    name: "Tanduay Ice - Mix",
                    price: 75.00,
                    additionalPrice: 420.00,
                    additionalDetails: ["1 bottle", "5 bottles + 1 bottle or finger food of choice"],
                    imgSrc: "menu/drinks/bucket-tanduay-ice-mix.jpg"
                },
                {
                    name: "Mule Smirnoff",
                    price: 100.00,
                    additionalPrice: 575.00,
                    additionalDetails: ["1 bottle", "5 bottles + 1 bottle or finger food of choice"],
                    imgSrc: "menu/drinks/bucket-mule-smirnoff.jpg"
                },
                {
                    name: "RH",
                    price: 100.00,
                    additionalPrice: 575.00,
                    additionalDetails: ["1 bottle", "5 bottles + 1 bottle or finger food of choice"],
                    quantity: "500 mL",
                    imgSrc: "menu/drinks/bucket-rh-500.jpg"
                },
                {
                    name: "RH",
                    price: 190.00,
                    quantity: "1L",
                    imgSrc: "menu/drinks/rh-1L.jpeg"
                },
                // {
                //     name: "San Mig Flavored Mix",
                //     price: 110.00,
                //     additionalPrice: 630.00,
                //     imgSrc: ""
                // },
            ]
        },
        "Shakes": {
            "description": "Sweet, cold, and creamy — the perfect refresher to beat the heat.",
            "imgSrc": "menu/drinks/mango-shake.png",
            "items": [
                {
                    name: "Cucumber Shake",
                    price: 100.00,
                    imgSrc: ""
                },
                {
                    name: "Mango Shake",
                    price: 100.00,
                    imgSrc: "menu/drinks/mango-shake.png"
                },
                {
                    name: "Mango Graham Shake",
                    price: 100.00,
                    imgSrc: ""
                },
                {
                    name: "Strawberry Shake",
                    price: 100.00,
                    imgSrc: "menu/drinks/strawberry-shake.png"
                },
                {
                    name: "Cookies 'n Cream Shake",
                    price: 100.00,
                    imgSrc: "menu/drinks/cookies-n-cream-shake.png"
                },
            ]
        },
        "Softdrinks": {
            "description": "Classic carbonated refreshments that go well with any meal.",
            "imgSrc": "menu/drinks/softdrinks.jpg",
            "items": [
                {
                    name: "Royal Sakto",
                    price: 20.00,
                    imgSrc: "menu/drinks/royal-sakto.webp"
                },
                {
                    name: "Sprite Sakto",
                    price: 20.00,
                    imgSrc: "menu/drinks/sprite-sakto.webp"
                },
                {
                    name: "Coke Sakto",
                    price: 20.00,
                    imgSrc: "menu/drinks/coke-sakto.jpg"
                },
                {
                    name: "Coke",
                    price: 125.00,
                    quantity: "1L",
                    imgSrc: "menu/drinks/coke-1L.png"
                },
                {
                    name: "Coke",
                    price: 160.00,
                    quantity: "1.5L",
                    imgSrc: "menu/drinks/coke-1.5L.webp"
                },
            ]
        },
        "Everyday Refreshments": {
            "description": "Light and refreshing drinks for everyday thirst-quenching moments.",
            "items": [
                {
                    name: "Bottled Water",
                    price: 25.00,
                    imgSrc: "menu/drinks/bottled-water.webp"
                },
                {
                    name: "Iced Tea Pitcher",
                    price: 100.00,
                    imgSrc: ""
                },
                {
                    name: "Cucumber Pitcher",
                    price: 100.00,
                    imgSrc: ""
                },
            ]
        },
        "Shots!": {
            "description": "Get the night started with our smooth and bold shot mixes.",
            "items": [
                {
                    name: "Moscow Mule",
                    price: 180.00,
                    imgSrc: ""
                },
                {
                    name: "Mexican Mule",
                    price: 180.00,
                    imgSrc: ""
                },
                {
                    name: "Kentucky Mule",
                    price: 180.00,
                    imgSrc: ""
                },
                {
                    name: "Margarita",
                    price: 200.00,
                    imgSrc: ""
                },
                {
                    name: "Rhumcoke",
                    price: 110.00,
                    imgSrc: ""
                },
                {
                    name: "Gintonic",
                    price: 110.00,
                    imgSrc: ""
                },
            ]
        },
    }
};
export default MenuData;