
import "./style.css";
import { Link } from "react-router-dom";
import usePageMotion from "./usePageMotion.js";

function About() {
    usePageMotion();

    const values = [
        {
            icon: "🥬",
            title: "Fresh Selection",
            description:
                "We carefully select vegetables to offer freshness and quality for your everyday cooking.",
            number: "01"
        },
        {
            icon: "💚",
            title: "Customer First",
            description:
                "Customer satisfaction is important to us. We make vegetable shopping simple and convenient.",
            number: "02"
        },
        {
            icon: "✨",
            title: "Quality Matters",
            description:
                "We focus on product quality and provide a reliable shopping experience for every customer.",
            number: "03"
        }
    ];

    return (
        <div className="about-page premium-about">

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap');

                .premium-about {
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

                .premium-about * {
                    box-sizing: border-box;
                }

                .premium-about a {
                    text-decoration: none;
                }

                /* NAVBAR */

                .premium-about .about-navbar {
                    background: rgba(250,249,242,.97);
                    backdrop-filter: blur(18px);
                    padding: 15px 0;
                    box-shadow: 0 4px 25px rgba(20,55,35,.06);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }

                .premium-about .about-brand {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    color: var(--green);
                    font-size: 20px;
                    font-weight: 800;
                }

                .premium-about .about-brand-icon {
                    font-size: 29px;
                }

                .premium-about .about-brand-light {
                    color: #8ba95e;
                }

                .premium-about .about-nav-link {
                    color: #536457;
                    font-size: 13px;
                    font-weight: 700;
                    margin: 0 9px;
                    transition: .3s;
                }

                .premium-about .about-nav-link:hover,
                .premium-about .about-nav-link.active {
                    color: var(--green);
                }

                .premium-about .about-cart-link {
                    background: var(--green);
                    color: white !important;
                    padding: 11px 18px !important;
                    border-radius: 30px;
                    margin-left: 9px;
                }

                .premium-about .about-cart-link:hover {
                    background: var(--gold);
                    color: var(--deep) !important;
                }

                /* HERO */

                .premium-about .about-hero {
                    position: relative;
                    min-height: 430px;
                    display: flex;
                    align-items: center;
                    background:
                        linear-gradient(90deg, rgba(8,31,21,.96), rgba(8,31,21,.78), rgba(8,31,21,.35)),
                        url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1800&auto=format&fit=crop') center/cover;
                    color: white;
                    padding: 80px 0;
                }

                .premium-about .about-hero-content {
                    max-width: 720px;
                    animation: aboutFadeUp .8s ease both;
                }

                .premium-about .about-tag {
                    display: inline-block;
                    color: var(--lime);
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 2.5px;
                    margin-bottom: 19px;
                }

                .premium-about .about-hero h1 {
                    color: white;
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(44px, 6vw, 70px);
                    line-height: 1.12;
                    font-weight: 600;
                    margin-bottom: 20px;
                }

                .premium-about .about-hero h1 span {
                    color: var(--lime);
                    font-style: italic;
                }

                .premium-about .about-hero p {
                    max-width: 560px;
                    color: rgba(255,255,255,.76);
                    font-size: 14px;
                    line-height: 1.9;
                    margin-bottom: 28px;
                }

                .premium-about .about-hero-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    background: var(--lime);
                    color: var(--deep);
                    padding: 14px 23px;
                    border-radius: 30px;
                    font-size: 12px;
                    font-weight: 800;
                    transition: .3s;
                }

                .premium-about .about-hero-button:hover {
                    background: white;
                    color: var(--deep);
                    transform: translateY(-3px);
                }

                /* INTRODUCTION */

                .premium-about .about-content {
                    padding: 100px 0;
                    background: var(--cream);
                }

                .premium-about .about-image-wrapper {
                    position: relative;
                    padding: 0 25px 25px 0;
                }

                .premium-about .about-image-wrapper::before {
                    content: "";
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 75%;
                    height: 75%;
                    border-radius: 20px;
                    background: #dce8cf;
                }

                .premium-about .about-image {
                    width: 100%;
                    height: 480px;
                    object-fit: cover;
                    position: relative;
                    z-index: 1;
                    border-radius: 18px;
                    box-shadow: 0 20px 45px rgba(20,55,35,.12);
                }

                .premium-about .about-image-label {
                    position: absolute;
                    z-index: 2;
                    bottom: 48px;
                    left: -8px;
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    padding: 16px 21px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 12px 30px rgba(20,55,35,.12);
                }

                .premium-about .about-image-label > span {
                    display: grid;
                    place-items: center;
                    width: 43px;
                    height: 43px;
                    border-radius: 12px;
                    background: #edf3e5;
                    font-size: 22px;
                }

                .premium-about .about-image-label strong {
                    color: var(--green);
                    font-size: 13px;
                }

                .premium-about .about-image-label p {
                    color: #879285;
                    font-size: 10px;
                    margin: 4px 0 0;
                }

                .premium-about .about-section-tag {
                    display: inline-block;
                    color: #829b69;
                    font-size: 10px;
                    font-weight: 850;
                    letter-spacing: 2px;
                    margin-bottom: 15px;
                }

                .premium-about .about-intro h2 {
                    color: var(--deep);
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(32px, 4vw, 44px);
                    line-height: 1.25;
                    margin-bottom: 23px;
                    font-weight: 600;
                }

                .premium-about .about-intro h2 span {
                    color: #819e62;
                    font-style: italic;
                }

                .premium-about .about-intro p {
                    color: #788779;
                    font-size: 13px;
                    line-height: 2;
                    margin-bottom: 15px;
                }

                .premium-about .about-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 15px;
                    margin-top: 15px;
                    background: var(--green);
                    color: white;
                    padding: 14px 23px;
                    border-radius: 30px;
                    font-size: 12px;
                    font-weight: 800;
                    transition: .3s;
                }

                .premium-about .about-button:hover {
                    background: var(--gold);
                    color: var(--deep);
                    transform: translateY(-3px);
                }

                .premium-about .about-button span {
                    font-size: 18px;
                }

                /* STATS */

                .premium-about .about-stats {
                    background: var(--deep);
                    padding: 45px 0;
                }

                .premium-about .about-stat {
                    text-align: center;
                    padding: 15px;
                    border-right: 1px solid rgba(255,255,255,.13);
                }

                .premium-about .about-stat:last-child {
                    border-right: none;
                }

                .premium-about .about-stat h3 {
                    color: var(--lime);
                    font-family: 'Playfair Display', serif;
                    font-size: 36px;
                    margin-bottom: 7px;
                }

                .premium-about .about-stat p {
                    color: rgba(255,255,255,.65);
                    font-size: 11px;
                    font-weight: 600;
                    margin: 0;
                }

                /* VALUES */

                .premium-about .about-values {
                    background: #f0f2e8;
                    padding: 95px 0;
                }

                .premium-about .about-values-heading {
                    max-width: 620px;
                    margin: 0 auto 48px;
                }

                .premium-about .about-values-heading h2 {
                    color: var(--deep);
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(33px, 4vw, 45px);
                    margin-bottom: 12px;
                }

                .premium-about .about-values-heading p {
                    color: #829083;
                    font-size: 13px;
                }

                .premium-about .about-value-card {
                    height: 100%;
                    position: relative;
                    background: white;
                    border: 1px solid #e9eee3;
                    border-radius: 17px;
                    padding: 35px 28px;
                    overflow: hidden;
                    transition: .4s;
                }

                .premium-about .about-value-card:hover {
                    transform: translateY(-9px);
                    border-color: #cbdcbb;
                    box-shadow: 0 20px 40px rgba(20,55,35,.09);
                }

                .premium-about .about-value-number {
                    position: absolute;
                    top: 20px;
                    right: 22px;
                    color: #e7eee0;
                    font-family: 'Playfair Display', serif;
                    font-size: 32px;
                    font-weight: 700;
                }

                .premium-about .about-value-icon {
                    display: grid;
                    place-items: center;
                    width: 58px;
                    height: 58px;
                    background: #edf3e5;
                    border-radius: 15px;
                    font-size: 27px;
                    margin-bottom: 25px;
                }

                .premium-about .about-value-card h3 {
                    color: var(--green);
                    font-family: 'Playfair Display', serif;
                    font-size: 23px;
                    margin-bottom: 13px;
                }

                .premium-about .about-value-card p {
                    color: #829083;
                    font-size: 12px;
                    line-height: 1.9;
                    margin: 0;
                }

                /* CTA */

                .premium-about .about-cta {
                    position: relative;
                    text-align: center;
                    padding: 85px 20px;
                    color: white;
                    background:
                        linear-gradient(rgba(10,45,29,.93), rgba(10,45,29,.93)),
                        url('https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1600&auto=format&fit=crop') center/cover;
                }

                .premium-about .about-cta h2 {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(32px, 4vw, 45px);
                    margin-bottom: 14px;
                }

                .premium-about .about-cta p {
                    color: rgba(255,255,255,.68);
                    font-size: 13px;
                    margin-bottom: 25px;
                }

                .premium-about .about-cta-button {
                    display: inline-block;
                    background: var(--lime);
                    color: var(--deep);
                    padding: 14px 25px;
                    border-radius: 30px;
                    font-size: 12px;
                    font-weight: 800;
                    transition: .3s;
                }

                .premium-about .about-cta-button:hover {
                    background: white;
                    color: var(--deep);
                    transform: translateY(-3px);
                }

                /* FOOTER */

                .premium-about .about-footer {
                    background: #0c2d20;
                    text-align: center;
                    padding: 45px 20px 22px;
                }

                .premium-about .about-footer-brand {
                    color: white;
                    font-size: 21px;
                    font-weight: 800;
                }

                .premium-about .about-footer > p {
                    color: #a8b9ab;
                    font-size: 11px;
                    margin-top: 12px;
                }

                .premium-about .about-footer-line {
                    max-width: 1100px;
                    height: 1px;
                    margin: 25px auto 18px;
                    background: rgba(255,255,255,.13);
                }

                .premium-about .about-copyright {
                    font-size: 10px !important;
                    margin: 0 !important;
                }

                @keyframes aboutFadeUp {
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

                @media(max-width: 991px) {
                    .premium-about .about-stat:nth-child(2) {
                        border-right: none;
                    }
                }

                @media(max-width: 767px) {
                    .premium-about .about-hero {
                        min-height: 380px;
                        padding: 65px 0;
                        background-position: 60% center;
                    }

                    .premium-about .about-hero h1 {
                        font-size: 43px;
                    }

                    .premium-about .about-content {
                        padding: 65px 0;
                    }

                    .premium-about .about-image {
                        height: 350px;
                    }

                    .premium-about .about-image-label {
                        left: 5px;
                    }

                    .premium-about .about-values {
                        padding: 65px 0;
                    }

                    .premium-about .about-stat {
                        border-right: none;
                        border-bottom: 1px solid rgba(255,255,255,.13);
                    }

                    .premium-about .about-stat:last-child {
                        border-bottom: none;
                    }

                    .premium-about .about-cta {
                        padding: 65px 15px;
                    }
                }

                @media(max-width: 420px) {
                    .premium-about .about-hero h1 {
                        font-size: 36px;
                    }

                    .premium-about .about-image {
                        height: 290px;
                    }

                    .premium-about .about-intro h2 {
                        font-size: 32px;
                    }
                }

                @media(prefers-reduced-motion: reduce) {
                    .premium-about *,
                    .premium-about *::before,
                    .premium-about *::after {
                        animation-duration: .01ms !important;
                        transition-duration: .01ms !important;
                    }
                }
            `}</style>

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg about-navbar">
                <div className="container">

                    <Link className="navbar-brand about-brand" to="/">
                        <span className="about-brand-icon">🥬</span>
                        <span>
                            Palmurugan
                            <span className="about-brand-light"> Fresh</span>
                        </span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#aboutMenu"
                        aria-controls="aboutMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="aboutMenu">
                        <ul className="navbar-nav ms-auto align-items-lg-center">

                            <li className="nav-item">
                                <Link className="nav-link about-nav-link" to="/">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link about-nav-link active" to="/about">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link about-nav-link" to="/products">
                                    Products
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link about-nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link about-nav-link about-cart-link" to="/cart">
                                    🛒 My Cart
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">

                        <span className="about-tag">
                            ✳ GET TO KNOW US
                        </span>

                        <h1>
                            More Than
                            <br />
                            Vegetables. <span>Freshness.</span>
                        </h1>

                        <p>
                            Welcome to Palmurugan Fresh Vegetables.
                            We make everyday vegetable shopping simple,
                            convenient and focused on quality.
                        </p>

                        <Link to="/products" className="about-hero-button">
                            Explore Our Collection <span>→</span>
                        </Link>

                    </div>
                </div>
            </section>

            {/* ABOUT INTRODUCTION */}
            <section className="about-content">
                <div className="container">
                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">
                            <div className="about-image-wrapper">

                                <img
                                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&auto=format&fit=crop"
                                    className="about-image"
                                    alt="Fresh vegetables displayed in a market"
                                    loading="lazy"
                                />

                                <div className="about-image-label">
                                    <span>🥬</span>
                                    <div>
                                        <strong>Fresh Everyday Choices</strong>
                                        <p>Quality for your kitchen</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6 about-intro">

                            <span className="about-section-tag">
                                WHO WE ARE
                            </span>

                            <h2>
                                Making Everyday Shopping
                                <span> Better & Easier</span>
                            </h2>

                            <p>
                                Palmurugan Fresh Vegetables is an online
                                vegetable shopping platform created to make
                                it easier for customers to find and order
                                their everyday vegetable essentials.
                            </p>

                            <p>
                                We offer a selection of vegetables including
                                tomatoes, onions, potatoes, carrots, spinach,
                                cucumber, cabbage and many more.
                            </p>

                            <p>
                                Our focus is on providing a convenient
                                shopping experience, quality products,
                                affordable choices and customer satisfaction.
                            </p>

                            <Link to="/products" className="about-button">
                                Explore Our Products <span>→</span>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="about-stats">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="about-stat">
                                <h3>16+</h3>
                                <p>Vegetable Varieties</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="about-stat">
                                <h3>100%</h3>
                                <p>Focus on Quality</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="about-stat">
                                <h3>Easy</h3>
                                <p>Online Ordering</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="about-values">
                <div className="container">

                    <div className="about-values-heading text-center">
                        <span className="about-section-tag">
                            WHAT MATTERS TO US
                        </span>

                        <h2>Our Promise to You</h2>

                        <p>
                            Simple values that guide our everyday service.
                        </p>
                    </div>

                    <div className="row g-4">

                        {values.map((value) => (
                            <div className="col-md-4" key={value.number}>
                                <div className="about-value-card">

                                    <span className="about-value-number">
                                        {value.number}
                                    </span>

                                    <div className="about-value-icon">
                                        {value.icon}
                                    </div>

                                    <h3>{value.title}</h3>

                                    <p>{value.description}</p>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta">
                <div className="container">

                    <span className="about-tag">
                        YOUR NEXT FRESH PICK
                    </span>

                    <h2>Make Fresh Choices Every Day</h2>

                    <p>
                        Explore our vegetable collection and find what
                        your kitchen needs.
                    </p>

                    <Link to="/products" className="about-cta-button">
                        Shop Vegetables →
                    </Link>

                </div>
            </section>

            {/* FOOTER */}
            <footer className="about-footer">

                <div className="about-footer-brand">
                    🥬 Palmurugan Fresh Vegetables
                </div>

                <p>
                    Your convenient destination for everyday vegetable shopping.
                </p>

                <div className="about-footer-line"></div>

                <p className="about-copyright">
                    © {new Date().getFullYear()} Palmurugan Fresh Vegetables.
                    All Rights Reserved.
                </p>

            </footer>

        </div>
    );
}

export default About;
