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
                    price: 130.00,
                    imgSrc: "menu/food/french-fries.png",
                    additionalPrice: 140.00,
                    additionalDetails: ["No Flavor", "Sour Cream | BBQ | Cheese"],
                    variants: ["Sour Cream", "BBQ", "Cheese"]
                },
                {
                    name: "Mojos",
                    price: 130.00,
                    imgSrc: "menu/food/mojos.png",
                    additionalPrice: 140.00,
                    additionalDetails: ["No Flavor", "Sour Cream | BBQ | Cheese"],
                    variants: ["Sour Cream", "BBQ", "Cheese"]
                },
                { 
                    name: "Street Food Platter", 
                    price: 130.00,
                    imgSrc: "menu/food/street-food-platter.png"
                },
                { 
                    name: "Cheese Sticks", 
                    price: 130.00,
                    imgSrc: "menu/food/cheese-sticks.png"
                },
                { 
                    name: "Lumpia Shanghai", 
                    price: 130.00,
                    imgSrc: "menu/food/lumpia-shanghai.png"
                },
                { 
                    name: "Chicken Skin", 
                    price: 210.00,
                    imgSrc: "menu/food/appetizers.png"
                },
                { 
                    name: "Nachos", 
                    price: 210.00,
                    imgSrc: "menu/food/nachos.png"
                },
                { 
                    name: "Siomai", 
                    price: 100.00, 
                    quantity: "12 pcs.", 
                    variants: ["Steamed", "Fried"],
                    imgSrc: "menu/food/siomai.png"
                },
                { 
                    name: "Sizzling Tofu", 
                    price: 200.00, 
                    imgSrc: "menu/food/sizzling-tofu.png"
                },
            ]
        },
        "Guisarap!": {
            "description": "Classic Filipino noodle favorites cooked to perfection — perfect for any craving.",
            "imgSrc": "menu/food/guisarap.png",
            "items": [
            { 
                name: "Bijon Guisado", 
                price: 260.00,
                imgSrc: "menu/food/bijon-guisado.png",
            },
            { 
                name: "Canton Guisado", 
                price: 260.00,
                imgSrc: "menu/food/canton-guisado.png",
            },
            { 
                name: "Sotanghon Guisado", 
                price: 260.00,
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
                price: 260.00,
                imgSrc: "menu/food/buffalo-wings.png",
            },
            { 
                name: "Buttered Chicken", 
                price: 260.00,
                imgSrc: "",
            },
            { 
                name: "Chicken Teriyaki", 
                price: 260.00,
                imgSrc: "",
            },
            { 
                name: "Fried Chix", 
                price: 230.00,
                imgSrc: "menu/food/fried-chix.png",
                additionalPrice: 310.00,
                additionalDetails: ["/wo Fries/Mojos", "/w Fries/Mojos"],
                variants: ["/wo Fries/Mojos", "/w Fries/Mojos"]
            },
            ]
        },
        "Pork Favorites": {
            "description": "Juicy and flavorful pork dishes that bring comfort with every bite.",
            "imgSrc": "menu/food/pork-favorites.png",
            "items": [
                {
                    name: "Lechon Kawali",
                    price: 260.00,
                    imgSrc: "menu/food/lechon-kawali.png",
                },
                {
                    name: "Sizzling Pork Sisig",
                    price: 260.00,
                    imgSrc: "menu/food/sizzling-pork-sisig.png",
                },
                {
                    name: "Adobo Backribs",
                    price: 290.00,
                    imgSrc: "menu/food/adobo-backribs.png",
                },
                { 
                    name: "Pork Bulalo",
                    price: 360.00,
                    imgSrc: "menu/food/pork-bulalo.png"
                },
            ]
        },
        "Seafood Specials": {
            "description": "From crispy to sizzling — taste the freshness of the sea in every bite.",
            "imgSrc": "menu/food/seafood-specials.png",
            "items": [
                {
                    name: "Calamares",
                    price: 210.00,
                    imgSrc: "menu/food/calamares.png",
                },
                {
                    name: "Fish Fillet", 
                    price: 210.00,
                    imgSrc: "menu/food/fish-fillet.png",
                },
                {
                    name: "Sinigang Bangus", 
                    price: 410.00,
                    imgSrc: "",
                },
                {
                    name: "Sizzling Sisig Bangus", 
                    price: 310.00,
                    imgSrc: "menu/food/sizzling-sisig-bangus.png",
                },
                {
                    name: "Sizzling Bangus", 
                    price: 360.00,
                    imgSrc: "menu/food/sizzling-bangus.png",
                },
            ]
        },
        "Afforda-Rice": {
            "description": "Simple but satisfying rice options to pair with any meal.",
            imgSrc: "menu/food/afforda-rice.png",
            "items": [
                {
                    name: "Plain Rice",
                    price: 28.00,
                    imgSrc: "menu/food/plain-rice.png"
                },
                {
                    name: "Garlic Rice",
                    price: 33.00,
                    imgSrc: "menu/food/garlic-rice.png"
                },
            ]
        },
        "Budget Meals": {
            "description": "Delicious rice meals that won’t break the bank — perfect for solo cravings.",
            "imgSrc": "menu/food/budget-meals.png",
            "items": [
                {
                    name: "Calamares /w Rice",
                    price: 140.00,
                    imgSrc: "menu/food/budget-calamares.png",
                },
                { 
                    name: "Chicken Skin /w Rice", 
                    price: 140.00,
                    imgSrc: "menu/food/budget-chicken-skin.png",
                },
                {
                    name: "Fish Fillet /w Rice",
                    price: 130.00,
                    imgSrc: "menu/food/budget-fish-fillet.png",
                },
                { 
                    name: "Sweet & Sour Tofu /w Rice", 
                    price: 140.00,
                    imgSrc: "menu/food/budget-sweet-and-sour-tofu.jpg",
                },
                { 
                    name: "Sizzling Tofu /w Rice", 
                    price: 140.00,
                    imgSrc: "menu/food/budget-sizzling-tofu.png",
                },
                { 
                    name: "Pork Sisig /w Rice", 
                    price: 165.00,
                    imgSrc: "menu/food/budget-pork-sisig.png",
                },
                {
                    name: "Sizzling Bangus /w Rice",
                    price: 185.00,
                    imgSrc: "menu/food/budget-sizzling-bangus.png",
                },
                {
                    name: "Fried Chix /w Rice",
                    price: 160.00,
                    imgSrc: "menu/food/budget-fried-chix.png",
                },
                {
                    name: "Teriyaki /w Rice",
                    price: 160.00,
                    imgSrc: "menu/food/budget-teriyaki.png",
                },
                {
                    name: "Buttered Chicken /w Rice",
                    price: 160.00,
                    imgSrc: "menu/food/budget-buttered-chicken.png",
                },
                {
                    name: "Buffalo Wings /w Rice",
                    price: 160.00,
                    imgSrc: "menu/food/budget-buffalo-wings.png",
                },
                {
                    name: "Adobo Backribs /w Rice",
                    price: 185.00,
                    imgSrc: "menu/food/budget-adobo-backribs.png",
                },
                {
                    name: "Lechon Kawali /w Rice",
                    price: 160.00,
                    imgSrc: "menu/food/budget-lechon-kawali.png",
                },
            ]
        },
        "Yum-Silog!": {
            "description": "The ultimate Filipino comfort meals — sunny-side up egg, garlic rice, and your favorite ulam!",
            "imgSrc": "menu/food/yum-silog.png",
            "items": [
                { 
                    name: "Cornsilog", 
                    price: 130.00,
                    imgSrc: ""
                },
                { 
                    name: "Tocilog", 
                    price: 130.00,
                    imgSrc: "menu/food/tocilog.png"
                },
                { 
                    name: "Tapsilog", 
                    price: 140.00,
                    imgSrc: "menu/food/yumsilog.png"
                },
            ]
        },
    },
    Drinks: {
        "Happy Towers": {
            "description": "Big towers, bigger fun! Shareable cocktail towers perfect for barkada nights.",
            "imgSrc": "menu/drinks/happy-towers.png",
            "items": [
                {
                    name: "Grapes",
                    price: 450.00,
                    additionalPrice: 650.00,
                    additionalDetails: ["1.5L", "3L"],
                    imgSrc: "menu/drinks/tower-grapes.png"
                },
                {
                    name: "Strawberry",
                    price: 450.00,
                    additionalPrice: 650.00,
                    additionalDetails: ["1.5L", "3L"],
                    imgSrc: "menu/drinks/tower-strawberry.png"
                },
                {
                    name: "Dalandan",
                    price: 450.00,
                    additionalPrice: 650.00,
                    additionalDetails: ["1.5L", "3L"],
                    imgSrc: "menu/drinks/tower-dalandan.png"
                },
                {
                    name: "Pomelo",
                    price: 450.00,
                    additionalPrice: 650.00,
                    additionalDetails: ["1.5L", "3L"],
                    imgSrc: "menu/drinks/tower-pomelo.png"
                },
            ]
        },
        "Alcohol Avenue": {
            "description": "A curated list of liquors and spirits to lift your mood and get the party going.",
            "imgSrc": "menu/drinks/alcohol-avenue.png",
            "items": [
                {
                    name: "Jinro Soju Grapefruit",
                    price: 200.00,
                    quantity: "360 mL",
                    imgSrc: "menu/drinks/jinro-soju-grapefruit.jpg"
                },
                {
                    name: "Clvb Emperador",
                    price: 450.00,
                    quantity: "750mL",
                    imgSrc: "menu/drinks/clvb-emperador.jpg",
                },
                {
                    name: "Clvb Emperador",
                    price: 450.00,
                    quantity: "1.5L",
                    imgSrc: "menu/drinks/clvb-emperador.jpg",
                    additionalPrice: 600.00,
                    additionalDetails: ["/wo Iced Tea & Kropek", "/w Iced Tea & Kropek"],
                    variants: ["/wo Iced Tea & Kropek", "/w Iced Tea & Kropek"]
                },
                {
                    name: "Charles & James",
                    price: 500.00,
                    imgSrc: "menu/drinks/charles-and-james.jpg",
                    additionalDetails: ["/w Iced Tea & Kropek"]
                },
                {
                    name: "Andy Player",
                    price: 500.00,
                    quantity: "2 bottles",
                    imgSrc: "menu/drinks/andy-player.png",
                    additionalDetails: ["/w Iced Tea & Kropek"]
                },
                {
                    name: "Primera",
                    price: 500.00,
                    quantity: "1L",
                    imgSrc: "menu/drinks/primera-light.png",
                    additionalDetails: ["/w Iced Tea & Kropek"]
                },
                {
                    name: "Alhambra Solera Light",
                    price: 650.00,
                    quantity: "1L",
                    imgSrc: "menu/drinks/alhambra-solera-light.webp"
                },
                {
                    name: "Alfonso Light",
                    price: 680.00,
                    quantity: "1L",
                    imgSrc: "menu/drinks/alfonso-light.jpg"
                },
                {
                    name: "Fundador Super Special",
                    price: 720.00,
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
                // {
                //     name: "Smirnoff Vodka",
                //     price: 1060.00,
                //     imgSrc: "menu/drinks/smirnoff-vodka.jpg"
                // },
                // {
                //     name: "Absolut Vodka",
                //     price: 1198.00,
                //     quantity: "700 mL",
                //     imgSrc: "menu/drinks/absolut-vodka.jpg"
                // },
                // {
                //     name: "Bacardi White Rum",
                //     price: 1260.00,
                //     imgSrc: "menu/drinks/bacardi-white-rum.jpg"
                // },
                {
                    name: "Jose Cuervo Tequila",
                    price: 1900.00,
                    quantity: "700mL",
                    imgSrc: "menu/drinks/jose-cuervo-tequila.jpg"
                },
                {
                    name: "Jose Cuervo Tequila",
                    price: 2300.00,
                    quantity: "1L",
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
            "imgSrc": "menu/drinks/bottle-bucket.png",
            "items": [
                {
                    name: "San Mig Light",
                    price: 90.00,
                    additionalPrice: 520.00,
                    additionalDetails: ["1 bottle", "1 bucket (5 bottles + 1 bottle or finger food of choice)"],
                    imgSrc: "menu/drinks/bucket-san-mig-light.jpg"
                },
                {
                    name: "San Mig Apple",
                    price: 90.00,
                    additionalPrice: 520.00,
                    additionalDetails: ["1 bottle", "1 bucket (5 bottles + 1 bottle or finger food of choice)"],
                    imgSrc: "menu/drinks/bucket-san-mig-apple.jpg"
                },
                {
                    name: "San Mig Pilsen",
                    price: 90.00,
                    additionalPrice: 520.00,
                    additionalDetails: ["1 bottle", "1 bucket (5 bottles + 1 bottle or finger food of choice)"],
                    imgSrc: "menu/drinks/bucket-san-mig-pilsen.jpg"
                },
                {
                    name: "Stallion",
                    price: 90.00,
                    additionalPrice: 520.00,
                    additionalDetails: ["1 bottle", "1 bucket (5 bottles + 1 bottle or finger food of choice)"],
                    imgSrc: "menu/drinks/bucket-stallion.jpg"
                },
                {
                    name: "RH",
                    price: 110.00,
                    additionalPrice: 640.00,
                    quantity: "500 mL",
                    additionalDetails: ["1 bottle", "1 bucket (5 bottles + 1 bottle or finger food of choice)"],
                    imgSrc: "menu/drinks/bucket-rh-500.jpg"
                },
                {
                    name: "RH",
                    price: 200.00,
                    quantity: "1L",
                    imgSrc: "menu/drinks/rh-1L.jpeg"
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
            "imgSrc": "menu/drinks/shakes.png",
            "items": [
                {
                    name: "Cucumber Shake",
                    price: 120.00,
                    imgSrc: ""
                },
                {
                    name: "Mango Shake",
                    price: 120.00,
                    imgSrc: "menu/drinks/mango-shake.png"
                },
                {
                    name: "Mango Graham Shake",
                    price: 120.00,
                    imgSrc: ""
                },
                {
                    name: "Strawberry Shake",
                    price: 120.00,
                    imgSrc: "menu/drinks/strawberry-shake.png"
                },
                {
                    name: "Cookies 'n Cream Shake",
                    price: 120.00,
                    imgSrc: "menu/drinks/cookies-n-cream-shake.png"
                },
            ]
        },
        "Softdrinks": {
            "description": "Classic carbonated refreshments that go well with any meal.",
            "imgSrc": "menu/drinks/softdrinks.png",
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
                    price: 160.00,
                    quantity: "1.5L",
                    imgSrc: "menu/drinks/coke-1.5L.webp"
                },
            ]
        },
        "Everyday Refreshments": {
            "description": "Light and refreshing drinks for everyday thirst-quenching moments.",
            "imgSrc": "menu/drinks/bottled-water.webp",
            "items": [
                {
                    name: "Bottled Water",
                    price: 25.00,
                    imgSrc: "menu/drinks/bottled-water.webp"
                },
                {
                    name: "Iced Tea Pitcher",
                    price: 100.00,
                    imgSrc: "menu/drinks/iced-tea-pitcher.jpg"
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
            "imgSrc": "menu/drinks/shots.png",
            "items": [
                {
                    name: "Moscow Mule",
                    price: 180.00,
                    imgSrc: "menu/drinks/moscow-mule.jpg"
                },
                {
                    name: "Mexican Mule",
                    price: 180.00,
                    imgSrc: "menu/drinks/mexican-mule.jpg"
                },
                {
                    name: "Kentucky Mule",
                    price: 180.00,
                    imgSrc: "menu/drinks/kentucky-mule.jpg"
                },
                {
                    name: "Margarita",
                    price: 200.00,
                    imgSrc: "menu/drinks/margarita.jpg"
                },
                {
                    name: "Rhumcoke",
                    price: 110.00,
                    imgSrc: "menu/drinks/rhumcoke.jpg"
                },
                {
                    name: "Gintonic",
                    price: 110.00,
                    imgSrc: "menu/drinks/gintonic.jpg"
                },
            ]
        },
    }
};
export default MenuData;