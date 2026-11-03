
import "./style.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import usePageMotion from "./usePageMotion.js";

function Products() {
    usePageMotion();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const vegetables = [
        {
            name: "Tomato",
            description: "Juicy, fresh tomatoes for your everyday meals.",
            price: 40,
            category: "Daily Essentials",
            image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=700",
            icon: "🍅",
            tag: "Popular Choice"
        },
        {
            name: "Onion",
            description: "Fresh and flavourful onions for daily cooking.",
            price: 50,
            category: "Daily Essentials",
            image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=700",
            icon: "🧅",
            tag: "Daily Essential"
        },
        {
            name: "Potato",
            description: "Quality potatoes for your favourite recipes.",
            price: 45,
            category: "Daily Essentials",
            image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=700",
            icon: "🥔",
            tag: "Best Seller"
        },
        {
            name: "Carrot",
            description: "Crunchy and naturally sweet carrots.",
            price: 60,
            category: "Root Vegetables",
            image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=700",
            icon: "🥕",
            tag: "Healthy Choice"
        },
        {
            name: "Brinjal",
            description: "Fresh brinjal for delicious homemade dishes.",
            price: 50,
            category: "Other Vegetables",
            image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=700",
            icon: "🍆",
            tag: "Fresh Pick"
        },
        {
            name: "Cabbage",
            description: "Crisp and fresh green cabbage.",
            price: 40,
            category: "Leafy Greens",
            image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=700",
            icon: "🥬",
            tag: "Quality Choice"
        },
        {
            name: "Spinach",
            description: "Nutritious leafy greens for healthy meals.",
            price: 30,
            category: "Leafy Greens",
            image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=700",
            icon: "🌿",
            tag: "Green Goodness"
        },
        {
            name: "Cucumber",
            description: "Cool, crisp and refreshing cucumber.",
            price: 35,
            category: "Other Vegetables",
            image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=700",
            icon: "🥒",
            tag: "Fresh Choice"
        },
        {
            name: "Cauliflower",
            description: "Fresh cauliflower for delicious everyday meals.",
            price: 45,
            category: "Other Vegetables",
            image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=700",
            icon: "🥦",
            tag: "Fresh Choice"
        },
        {
            name: "Beetroot",
            description: "Naturally colourful beetroot for healthy cooking.",
            price: 50,
            category: "Root Vegetables",
            image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=700",
            icon: "🫜",
            tag: "Healthy Pick"
        },
        {
            name: "Ladies Finger",
            description: "Tender ladies finger for traditional recipes.",
            price: 40,
            category: "Other Vegetables",
            image: "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?w=700",
            icon: "🌿",
            tag: "Daily Essential"
        },
        {
            name: "Green Beans",
            description: "Crisp green beans for tasty everyday meals.",
            price: 55,
            category: "Other Vegetables",
            image: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=700",
            icon: "🫛",
            tag: "Fresh Pick"
        },
        {
            name: "Green Chilli",
            description: "Fresh green chillies to add flavour to cooking.",
            price: 35,
            category: "Other Vegetables",
            image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=700",
            icon: "🌶️",
            tag: "Kitchen Essential"
        },
        {
            name: "Pumpkin",
            description: "Fresh pumpkin for delicious homemade dishes.",
            price: 40,
            category: "Other Vegetables",
            image: "https://images.unsplash.com/photo-1506917728037-b6af01a7d403?w=700",
            icon: "🎃",
            tag: "Quality Choice"
        },
        {
            name: "Radish",
            description: "Fresh radish for salads and everyday cooking.",
            price: 35,
            category: "Root Vegetables",
            image: "https://images.unsplash.com/photo-1598030343246-eec71cb442c3?w=700",
            icon: "🥕",
            tag: "Fresh Selection"
        },
        {
            name: "Garlic",
            description: "Flavourful garlic for your favourite recipes.",
            price: 120,
            category: "Daily Essentials",
            image: "https://images.unsplash.com/photo-1615477550927-6ec8445a9a1a?w=700",
            icon: "🧄",
            tag: "Kitchen Essential"
        }
    ];

    const categories = [
        "All",
        "Daily Essentials",
        "Leafy Greens",
        "Root Vegetables",
        "Other Vegetables"
    ];

    const filteredVegetables = vegetables.filter((vegetable) => {
        const matchesSearch =
            vegetable.name.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            activeCategory === "All" ||
            vegetable.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    function addToCart(name, price) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProduct = cart.find(
            item => item.name === name
        );

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                name,
                price,
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        navigate("/cart");
    }

    return (
        <div className="products-page premium-products">

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap');

                .premium-products {
                    --green: #174c35;
                    --deep: #103b29;
                    --lime: #cde5a0;
                    --cream: #f8f7ef;
                    --gold: #d5a653;
                    --text: #34483a;
                    background: var(--cream);
                    color: var(--text);
                    font-family: 'DM Sans', sans-serif;
                    overflow: hidden;
                }

                .premium-products * {
                    box-sizing: border-box;
                }

                .premium-products a {
                    text-decoration: none;
                }

                /* NAVBAR */

                .premium-products .products-navbar {
                    background: rgba(250,249,242,.97);
                    backdrop-filter: blur(18px);
                    padding: 15px 0;
                    box-shadow: 0 4px 25px rgba(20,55,35,.06);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }

                .premium-products .products-brand {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: var(--green);
                    font-size: 21px;
                    font-weight: 800;
                }

                .premium-products .products-brand-icon {
                    font-size: 30px;
                }

                .premium-products .products-brand-light {
                    color: #8ba95e;
                }

                .premium-products .products-nav-link {
                    color: #536457;
                    font-size: 13px;
                    font-weight: 700;
                    margin: 0 10px;
                    transition: .3s;
                }

                .premium-products .products-nav-link:hover,
                .premium-products .products-active {
                    color: var(--green);
                }

                .premium-products .products-cart-link {
                    color: white !important;
                    background: var(--green);
                    padding: 11px 19px !important;
                    border-radius: 30px;
                    font-size: 12px;
                    font-weight: 750;
                    margin-left: 10px;
                    transition: .3s;
                }

                .premium-products .products-cart-link:hover {
                    background: var(--gold);
                    color: var(--deep) !important;
                }

                /* HERO */

                .premium-products .products-hero {
                    position: relative;
                    min-height: 390px;
                    display: flex;
                    align-items: center;
                    padding: 75px 0;
                    background:
                        linear-gradient(90deg, rgba(8,31,21,.96), rgba(8,31,21,.75), rgba(8,31,21,.35)),
                        url('https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1800&auto=format&fit=crop') center/cover;
                    color: white;
                }

                .premium-products .products-hero-content {
                    max-width: 690px;
                    animation: productFadeUp .8s ease both;
                }

                .premium-products .products-eyebrow {
                    display: inline-block;
                    color: #cde5a0;
                    font-size: 10px;
                    letter-spacing: 2.5px;
                    font-weight: 800;
                    margin-bottom: 18px;
                }

                .premium-products .products-hero h1 {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(42px, 6vw, 67px);
                    line-height: 1.12;
                    font-weight: 600;
                    margin-bottom: 20px;
                }

                .premium-products .products-hero h1 span {
                    color: var(--lime);
                    font-style: italic;
                }

                .premium-products .products-hero-content > p {
                    max-width: 530px;
                    color: rgba(255,255,255,.77);
                    font-size: 14px;
                    line-height: 1.9;
                    margin-bottom: 25px;
                }

                .premium-products .products-explore-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 14px 23px;
                    border-radius: 30px;
                    color: var(--deep);
                    background: var(--lime);
                    font-size: 12px;
                    font-weight: 800;
                    transition: .3s;
                }

                .premium-products .products-explore-btn:hover {
                    color: var(--deep);
                    background: white;
                    transform: translateY(-3px);
                }

                /* MAIN */

                .premium-products .products-main {
                    padding: 75px 0 90px;
                    background: var(--cream);
                }

                .premium-products .products-heading {
                    display: flex;
                    justify-content: space-between;
                    align-items: end;
                    gap: 20px;
                    margin-bottom: 35px;
                }

                .premium-products .products-heading .products-eyebrow {
                    color: #829b69;
                }

                .premium-products .products-heading h2 {
                    color: var(--deep);
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(32px, 4vw, 45px);
                    font-weight: 600;
                    margin-bottom: 9px;
                }

                .premium-products .products-heading p {
                    color: #829084;
                    font-size: 13px;
                    margin: 0;
                }

                .premium-products .products-count {
                    color: var(--green);
                    background: #e8efdf;
                    padding: 11px 17px;
                    border-radius: 30px;
                    font-size: 11px;
                    font-weight: 800;
                    white-space: nowrap;
                }

                /* SEARCH */

                .premium-products .products-search-area {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    background: white;
                    border: 1px solid #e8ecdf;
                    border-radius: 13px;
                    padding: 6px 17px;
                    min-height: 57px;
                    box-shadow: 0 7px 25px rgba(20,55,35,.04);
                    transition: .3s;
                    margin-bottom: 25px;
                }

                .premium-products .products-search-area:focus-within {
                    border-color: #8da96d;
                    box-shadow: 0 0 0 4px rgba(141,169,109,.13);
                }

                .premium-products .products-search-icon {
                    color: #79936b;
                    font-size: 21px;
                }

                .premium-products .products-search-input {
                    border: none;
                    outline: none;
                    background: transparent;
                    width: 100%;
                    color: var(--deep);
                    font-size: 13px;
                    font-family: inherit;
                }

                .premium-products .products-search-input::placeholder {
                    color: #a2ada0;
                }

                .premium-products .products-clear-search {
                    border: none;
                    background: #edf2e7;
                    color: var(--green);
                    width: 29px;
                    height: 29px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 15px;
                    flex-shrink: 0;
                }

                /* CATEGORY */

                .premium-products .products-categories {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 35px;
                }

                .premium-products .products-category-btn {
                    border: 1px solid #e3e9dc;
                    background: white;
                    color: #738174;
                    padding: 11px 18px;
                    border-radius: 30px;
                    font-size: 11px;
                    font-weight: 750;
                    cursor: pointer;
                    transition: .3s;
                }

                .premium-products .products-category-btn:hover,
                .premium-products .products-category-btn.active {
                    color: white;
                    background: var(--green);
                    border-color: var(--green);
                    box-shadow: 0 7px 17px rgba(23,76,53,.15);
                }

                .premium-products .products-result-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 22px;
                    color: #819080;
                    font-size: 12px;
                }

                .premium-products .products-result-info strong {
                    color: var(--green);
                }

                /* PRODUCT CARDS */

                .premium-products .products-card {
                    height: 100%;
                    overflow: hidden;
                    border-radius: 16px;
                    background: white;
                    border: 1px solid #edf0e8;
                    box-shadow: 0 8px 25px rgba(30,60,35,.035);
                    transition: transform .4s ease, box-shadow .4s ease;
                    animation: productFadeUp .6s ease both;
                }

                .premium-products .products-card:hover {
                    transform: translateY(-9px);
                    border-color: #d5e2c6;
                    box-shadow: 0 20px 40px rgba(30,60,35,.12);
                }

                .premium-products .products-image-wrap {
                    height: 220px;
                    position: relative;
                    overflow: hidden;
                    background: #edf1e7;
                }

                .premium-products .products-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform .7s ease;
                }

                .premium-products .products-card:hover .products-image {
                    transform: scale(1.09);
                }

                .premium-products .products-fresh-tag {
                    position: absolute;
                    top: 14px;
                    left: 14px;
                    background: rgba(255,255,255,.95);
                    color: var(--green);
                    padding: 8px 12px;
                    border-radius: 30px;
                    font-size: 9px;
                    font-weight: 800;
                    box-shadow: 0 4px 12px rgba(0,0,0,.05);
                }

                .premium-products .products-card-body {
                    padding: 20px;
                }

                .premium-products .products-card-category {
                    color: #91a278;
                    font-size: 9px;
                    font-weight: 850;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                }

                .premium-products .products-card-body h3 {
                    color: var(--green);
                    font-family: 'Playfair Display', serif;
                    font-size: 21px;
                    font-weight: 600;
                    margin: 10px 0;
                }

                .premium-products .products-card-body > p {
                    color: #839084;
                    font-size: 11px;
                    line-height: 1.8;
                    min-height: 40px;
                    margin-bottom: 17px;
                }

                .premium-products .products-card-bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 8px;
                    padding-top: 14px;
                    border-top: 1px solid #edf0e8;
                }

                .premium-products .products-price strong {
                    color: var(--deep);
                    font-size: 22px;
                    font-weight: 800;
                }

                .premium-products .products-price span {
                    color: #929c91;
                    font-size: 10px;
                }

                .premium-products .products-add-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border: none;
                    background: var(--green);
                    color: white;
                    padding: 10px 14px;
                    border-radius: 8px;
                    font-size: 11px;
                    font-weight: 750;
                    transition: .3s;
                    cursor: pointer;
                }

                .premium-products .products-add-btn:hover {
                    background: var(--gold);
                    color: var(--deep);
                    transform: translateY(-2px);
                }

                .premium-products .products-add-btn span {
                    font-size: 17px;
                }

                /* EMPTY SEARCH */

                .premium-products .products-empty {
                    text-align: center;
                    padding: 70px 20px;
                    background: white;
                    border-radius: 17px;
                    border: 1px solid #edf0e8;
                }

                .premium-products .products-empty-icon {
                    font-size: 55px;
                    margin-bottom: 15px;
                }

                .premium-products .products-empty h3 {
                    color: var(--green);
                    font-family: 'Playfair Display', serif;
                    font-size: 27px;
                    margin-bottom: 10px;
                }

                .premium-products .products-empty p {
                    color: #849184;
                    font-size: 13px;
                    margin-bottom: 20px;
                }

                .premium-products .products-reset-btn {
                    border: none;
                    background: var(--green);
                    color: white;
                    padding: 12px 22px;
                    border-radius: 30px;
                    font-size: 12px;
                    font-weight: 750;
                    cursor: pointer;
                }

                /* TRUST STRIP */

                .premium-products .products-trust-strip {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    margin-top: 65px;
                    padding: 27px;
                    border-radius: 16px;
                    background: #edf2e5;
                }

                .premium-products .products-trust-strip > div {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                }

                .premium-products .products-trust-strip > div > span {
                    display: grid;
                    place-items: center;
                    flex-shrink: 0;
                    width: 47px;
                    height: 47px;
                    border-radius: 13px;
                    background: white;
                    font-size: 21px;
                }

                .premium-products .products-trust-strip p {
                    color: #819080;
                    font-size: 10px;
                    line-height: 1.7;
                    margin: 0;
                }

                .premium-products .products-trust-strip strong {
                    color: var(--green);
                    font-size: 12px;
                }

                /* FOOTER */

                .premium-products .products-footer {
                    background: #0c2d20;
                    padding: 50px 0 22px;
                    text-align: center;
                }

                .premium-products .products-footer-brand {
                    color: white;
                    font-size: 21px;
                    font-weight: 800;
                }

                .premium-products .products-footer > .container > p {
                    color: #a8b9ab;
                    font-size: 11px;
                    margin-top: 12px;
                }

                .premium-products .products-footer-line {
                    height: 1px;
                    background: rgba(255,255,255,.13);
                    margin: 27px 0 18px;
                }

                .premium-products .products-copyright {
                    font-size: 10px !important;
                    margin: 0 !important;
                }

                @keyframes productFadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* RESPONSIVE */

                @media (max-width: 767px) {
                    .premium-products .products-hero {
                        min-height: 380px;
                        padding: 65px 0;
                        background-position: 60% center;
                    }

                    .premium-products .products-hero h1 {
                        font-size: 43px;
                    }

                    .premium-products .products-main {
                        padding: 55px 0;
                    }

                    .premium-products .products-heading {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .premium-products .products-image-wrap {
                        height: 190px;
                    }

                    .premium-products .products-trust-strip {
                        grid-template-columns: 1fr;
                        gap: 18px;
                    }

                    .premium-products .products-categories {
                        gap: 8px;
                    }

                    .premium-products .products-category-btn {
                        padding: 10px 13px;
                        font-size: 10px;
                    }
                }

                @media (max-width: 420px) {
                    .premium-products .products-hero h1 {
                        font-size: 36px;
                    }

                    .premium-products .products-image-wrap {
                        height: 150px;
                    }

                    .premium-products .products-card-body {
                        padding: 13px;
                    }

                    .premium-products .products-card-body h3 {
                        font-size: 17px;
                    }

                    .premium-products .products-price strong {
                        font-size: 17px;
                    }

                    .premium-products .products-add-btn {
                        padding: 9px 10px;
                        font-size: 10px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .premium-products *,
                    .premium-products *::before,
                    .premium-products *::after {
                        animation-duration: .01ms !important;
                        transition-duration: .01ms !important;
                    }
                }
            `}</style>

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg products-navbar">
                <div className="container">
                    <Link className="navbar-brand products-brand" to="/">
                        <span className="products-brand-icon">🥬</span>
                        <span>
                            Palmurugan
                            <span className="products-brand-light"> Fresh</span>
                        </span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#productsMenu"
                        aria-controls="productsMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="productsMenu">
                        <ul className="navbar-nav ms-auto align-items-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link products-nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link products-nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link products-nav-link products-active" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link products-nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link products-cart-link" to="/cart">🛒 My Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <header className="products-hero">
                <div className="container">
                    <div className="products-hero-content">
                        <span className="products-eyebrow">
                            ✳ YOUR EVERYDAY VEGETABLE STORE
                        </span>

                        <h1>
                            Discover Freshness.
                            <br />
                            Choose <span>Better.</span>
                        </h1>

                        <p>
                            Explore our collection of everyday vegetable
                            essentials. Find your favourites, browse with ease
                            and order online.
                        </p>

                        <a href="#vegetable-list" className="products-explore-btn">
                            Explore Collection <span>↓</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* PRODUCTS */}
            <main className="products-main" id="vegetable-list">
                <div className="container">

                    <div className="products-heading">
                        <div>
                            <span className="products-eyebrow">
                                THE FRESH COLLECTION
                            </span>
                            <h2>Find Your Vegetables</h2>
                            <p>Browse and choose your everyday kitchen essentials.</p>
                        </div>

                        <span className="products-count">
                            {vegetables.length} Products
                        </span>
                    </div>

                    {/* SEARCH */}
                    <div className="products-search-area">
                        <span className="products-search-icon">⌕</span>

                        <input
                            type="text"
                            className="products-search-input"
                            placeholder="Search vegetables... e.g. Tomato, Carrot, Onion"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            aria-label="Search vegetables"
                        />

                        {searchTerm && (
                            <button
                                className="products-clear-search"
                                onClick={() => setSearchTerm("")}
                                aria-label="Clear search"
                            >
                                ×
                            </button>
                        )}
                    </div>

                    {/* CATEGORY FILTER */}
                    <div className="products-categories">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`products-category-btn ${
                                    activeCategory === category ? "active" : ""
                                }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* RESULTS */}
                    <div className="products-result-info">
                        <span>
                            Showing <strong>{filteredVegetables.length}</strong> products
                        </span>

                        {(searchTerm || activeCategory !== "All") && (
                            <span>
                                Filtered results
                            </span>
                        )}
                    </div>

                    {/* PRODUCT GRID */}
                    {filteredVegetables.length > 0 ? (
                        <div className="row g-4">
                            {filteredVegetables.map((vegetable) => (
                                <div
                                    className="col-6 col-lg-3 col-md-4"
                                    key={vegetable.name}
                                >
                                    <article className="products-card">

                                        <div className="products-image-wrap">
                                            <img
                                                src={vegetable.image}
                                                alt={vegetable.name}
                                                className="products-image"
                                                loading="lazy"
                                            />

                                            <span className="products-fresh-tag">
                                                {vegetable.tag}
                                            </span>
                                        </div>

                                        <div className="products-card-body">
                                            <span className="products-card-category">
                                                {vegetable.category}
                                            </span>

                                            <h3>
                                                {vegetable.icon} {vegetable.name}
                                            </h3>

                                            <p>{vegetable.description}</p>

                                            <div className="products-card-bottom">
                                                <div className="products-price">
                                                    <strong>₹{vegetable.price}</strong>
                                                    <span> / kg</span>
                                                </div>

                                                <button
                                                    className="products-add-btn"
                                                    onClick={() =>
                                                        addToCart(
                                                            vegetable.name,
                                                            vegetable.price
                                                        )
                                                    }
                                                >
                                                    <span>+</span> Add
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="products-empty">
                            <div className="products-empty-icon">🥬</div>
                            <h3>No Vegetables Found</h3>
                            <p>
                                We couldn't find "{searchTerm}" in this collection.
                                Try another vegetable name.
                            </p>

                            <button
                                className="products-reset-btn"
                                onClick={() => {
                                    setSearchTerm("");
                                    setActiveCategory("All");
                                }}
                            >
                                View All Vegetables
                            </button>
                        </div>
                    )}

                    {/* TRUST STRIP */}
                    <div className="products-trust-strip">
                        <div>
                            <span>🥬</span>
                            <p>
                                <strong>Fresh Selection</strong>
                                <br />
                                Carefully selected vegetables
                            </p>
                        </div>

                        <div>
                            <span>💚</span>
                            <p>
                                <strong>Quality First</strong>
                                <br />
                                Quality for everyday cooking
                            </p>
                        </div>

                        <div>
                            <span>🛒</span>
                            <p>
                                <strong>Easy Ordering</strong>
                                <br />
                                Simple online shopping
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* FOOTER */}
            <footer className="products-footer">
                <div className="container">
                    <Link to="/" className="products-footer-brand">
                        🥬 Palmurugan Fresh Vegetables
                    </Link>

                    <p>
                        A convenient online destination for everyday vegetable shopping.
                    </p>

                    <div className="products-footer-line"></div>

                    <p className="products-copyright">
                        © {new Date().getFullYear()} Palmurugan Fresh Vegetables.
                        All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Products;
