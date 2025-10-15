export type MenuItem = {
    name: string;
    imgSrc?: string;
    price: number;
    additionalPrice?: number;
    additionalDetails?: string[];
    description?: string;
    variants?: string[];
    onClick?: () => void;
};

type MenuSection = Record<string, { description?: string; imgSrc?: string; items: MenuItem[] }>;
type MenuDataType = Record<string, MenuSection>;

const MenuData: MenuDataType = {
    Food: {
        "Appetizers": {
            "description": "Start your meal with our crispy, savory, and shareable appetizers — perfect for pairing with drinks or as a light bite.",
            "items": [
                { name: "French Fries", price: 120.00, additionalPrice: 130.00, additionalDetails: ["No Flavor", "Sour Cream | BBQ | Cheese"], variants: ["Sour Cream", "BBQ", "Cheese"] },
                { name: "Mojos", price: 120.00, additionalPrice: 130.00, additionalDetails: ["No Flavor", "Sour Cream | BBQ | Cheese"], variants: ["Sour Cream", "BBQ", "Cheese"] },
                { name: "Street Food Platter", price: 120.00 },
                { name: "Cheese Sticks", price: 120.00 },
                { name: "Lumpia Shanghai", price: 120.00 },
                { name: "Chicken Skin", price: 200.00 },
                { name: "Nachos", price: 200.00 },
                { name: "Siomai (12 pcs.)", price: 100.00, variants: ["Steamed", "Fried"] },
            ]
        },
        "Guisarap!": {
            "description": "Classic Filipino noodle favorites cooked to perfection — perfect for any craving.",
            "items": [
            { name: "Bijon Guisado", price: 250.00 },
            { name: "Canton Guisado", price: 250.00 },
            { name: "Sotanghon Guisado", price: 250.00 },
            ]
        },
        "Chicken Classics": {
            "description": "All-time favorite chicken dishes, from spicy wings to buttered goodness.",
            "items": [
            { name: "Buffalo Wings", price: 250.00 },
            { name: "Buttered Chicken", price: 250.00 },
            { name: "Chicken Teriyaki", price: 250.00 },
            { name: "Fried Chix", price: 220.00 },
            // /w Fries/Mojos
            ]
        },
        "Pork Favorites": {
            "description": "Juicy and flavorful pork dishes that bring comfort with every bite.",
            "items": [
                { name: "Lechon Kawali", price: 250.00 },
                { name: "Pork Sisig", price: 250.00 },
                { name: "Adobo Backribs", price: 280.00 },
                { name: "Pork Bulalo", price: 250.00 },
            ]
        },
        "Seafood Specials": {
            "description": "From crispy to sizzling — taste the freshness of the sea in every bite.",
            "items": [
                { name: "Calamares", price: 200.00 },
                { name: "Fish Fillet", price: 200.00 },
                { name: "Sinigang Bangus", price: 400.00 },
                { name: "Sisig Bangus", price: 300.00 },
                { name: "Sizzling Bangus", price: 350.00 },
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
            "items": [
                { name: "Calamares", price: 130.00 },
                { name: "Chicken Skin", price: 130.00 },
                { name: "Fish Fillet", price: 130.00 },
                { name: "Sweet & Sour Tofu", price: 130.00 },
                { name: "Sizzling Tofu", price: 130.00 },
                { name: "Sizzling Sisig", price: 155.00 },
                { name: "Sizzling Bangus", price: 175.00 },
                { name: "Fried Chix", price: 150.00 },
                { name: "Teriyaki", price: 150.00 },
                { name: "Buttered Chicken", price: 150.00 },
                { name: "Buffalo Wings", price: 150.00 },
                { name: "Adobo Backribs", price: 175.00 },
                { name: "Lechon Kawali", price: 150.00 },
            ]
        },
        "Yum-Silog!": {
            "description": "The ultimate Filipino comfort meals — sunny-side up egg, garlic rice, and your favorite ulam!",
            "items": [
                { name: "Cornsilog", price: 120.00 },
                { name: "Tocilog", price: 120.00 },
                { name: "Tapsilog", price: 130.00 },
            ]
        },
    },
    Drinks: {
        "Happy Towers": {
            "description": "Big towers, bigger fun! Shareable cocktail towers perfect for barkada nights.",
            "items": [
                {name: "Grapes", price: 400.00, additionalPrice: 600.00, additionalDetails: ["1.5L", "3L"] },
                {name: "Strawberry", price: 400.00, additionalPrice: 600.00, additionalDetails: ["1.5L", "3L"] },
                {name: "Dalandan", price: 400.00, additionalPrice: 600.00, additionalDetails: ["1.5L", "3L"] },
                {name: "Pomelo", price: 400.00, additionalPrice: 600.00, additionalDetails: ["1.5L", "3L"] },
            ]
        },
        "Alcohol Avenue": {
            "description": "A curated list of liquors and spirits to lift your mood and get the party going.",
            "items": [
                {name: "Jinro Soju Grapefruit ( 360 mL )", price: 195.00 },
                {name: "Clvb Emperador", price: 350.00 },
                {name: "Charles & James", price: 500.00 },
                {name: "Andy Player ( 2 bottles )", price: 500.00 },
                {name: "Primera ( 1L )", price: 500.00 },
                {name: "Alhambra Solera Light ( 1L )", price: 650.00 },
                {name: "Alfonzo Light ( 1L )", price: 650.00 },
                {name: "Fundador Super Special", price: 700.00 },
                {name: "Carlos I Light", price: 780.00 },
                {name: "Fundador Lights", price: 750.00 },
                {name: "Smirnoff Vodka", price: 1060.00 },
                {name: "Absolut Vodka ( 700 mL )", price: 1198.00 },
                {name: "Bacardi White Rhum", price: 1260.00 },
                {name: "Jose Cuervo Tequila ( 700 mL / 1L )", price: 1900.00, additionalPrice: 2300.00 },
                {name: "Jim Beam ( 1L )", price: 1880.00 },
                {name: "Johnny Walker Red Label", price: 1550.00 },
                {name: "Johnny Walker Black Label", price: 2400.00 },
                {name: "Johnny Walker Double Black", price: 3500.00 },
                {name: "Chivais Regal ( 700 mL )", price: 2130.00 },
                {name: "Jack Daniel Whiskey ( 700 mL )", price: 2250.00 },
                {name: "Tanduay Light ( 1 bottle / 2 bottles )", price: 300.00, additionalPrice: 550.00 },
                {name: "Tanduay Select ( 1 bottle / 2 bottles )", price: 350.00, additionalPrice: 600.00 },
                {name: "Tanduay Flavored ( 1 bottle / 2 bottles )", price: 280.00, additionalPrice: 500.00 },
            ]
        },
        "Bottle/Bucket": {
            "description": "Grab a bottle or share a bucket — with bonus snacks to complete your chill night.",
            "items": [
                {name: "San Mig Light", price: 80.00, additionalPrice: 475.00, additionalDetails: ["1 bottle", "5 bottles + 1 bottle or finger food of choice"] },
                {name: "San Mig Apple", price: 80.00, additionalPrice: 475.00, additionalDetails: ["1 bottle", "5 bottles + 1 bottle or finger food of choice"] },
                {name: "Pilsen", price: 80.00, additionalPrice: 475.00, additionalDetails: ["1 bottle", "5 bottles + 1 bottle or finger food of choice"] },
                {name: "Stallion", price: 80.00, additionalPrice: 475.00, additionalDetails: ["1 bottle", "5 bottles + 1 bottle or finger food of choice"] },
                {name: "Tanduay Ice - Mix", price: 75.00, additionalPrice: 420.00, additionalDetails: ["1 bottle", "5 bottles + 1 bottle or finger food of choice"] },
                {name: "Mule Smirnoff", price: 100.00, additionalPrice: 575.00, additionalDetails: ["1 bottle", "5 bottles + 1 bottle or finger food of choice"] },
                {name: "RH - 500 mL", price: 100.00, additionalPrice: 575.00, additionalDetails: ["1 bottle", "5 bottles + 1 bottle or finger food of choice"] },
                {name: "RH - 1L", price: 190.00, },
                {name: "San Mig Flavored Mix", price: 110.00, additionalPrice: 630.00 },
            ]
        },
        "Shakes": {
            "description": "Sweet, cold, and creamy — the perfect refresher to beat the heat.",
            "items": [
                {name: "Cucumber", price: 100.00 },
                {name: "Mango", price: 100.00 },
                {name: "Mango Graham", price: 100.00 },
                {name: "Strawberry", price: 100.00 },
                {name: "Cookies 'n Cream", price: 100.00 },
            ]
        },
        "Softdrinks": {
            "description": "Classic carbonated refreshments that go well with any meal.",
            "items": [
                {name: "Royal Sakto", price: 20.00 },
                {name: "Sprite Sakto", price: 20.00 },
                {name: "Coke Sakto", price: 20.00 },
                {name: "Coke ( 1L )", price: 125.00 },
                {name: "Coke ( 1.5L )", price: 160.00 },
            ]
        },
        "Everyday Refreshments": {
            "description": "Light and refreshing drinks for everyday thirst-quenching moments.",
            "items": [
                {name: "Bottled Water", price: 25.00 },
                {name: "Iced Tea Pitcher", price: 100.00 },
                {name: "Cucumber Pitcher", price: 100.00 },
            ]
        },
        "Shots!": {
            "description": "Get the night started with our smooth and bold shot mixes.",
            "items": [
                {name: "Moscow Mule", price: 180.00 },
                {name: "Mexican Mule", price: 180.00 },
                {name: "Kentucky Mule", price: 180.00 },
                {name: "Margarita", price: 200.00 },
                {name: "Rhumcoke", price: 110.00 },
                {name: "Gintonic", price: 110.00 },
            ]
        },
    }
};

export default MenuData;