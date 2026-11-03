
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import usePageMotion from "./usePageMotion.js";

function Contact() {
    usePageMotion();

    const location = useLocation();
    const order = location.state;
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const orderData = {
            name,
            mobile,
            email,
            address,
            message,
            products: order?.products || [],
            total: order?.total || 0
        };

        try {
            const response = await fetch("http://localhost:3000/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderData)
            });

            const data = await response.json();

            if (response.ok) {
                alert(
                    order
                        ? "Order placed successfully!"
                        : "Message submitted successfully!"
                );

                if (order) {
                    localStorage.removeItem("cart");
                }

                setName("");
                setMobile("");
                setEmail("");
                setAddress("");
                setMessage("");

                navigate("/products");
            } else {
                alert(data.message || "Request failed");
            }
        } catch (error) {
            console.log("Order Error:", error);
            alert("Backend connection failed");
        }
    }

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <div className="contact-page">

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap');

                .contact-page {
                    --contact-green: #174c35;
                    --contact-dark: #103b29;
                    --contact-cream: #faf8f0;
                    --contact-gold: #d5a653;
                    --contact-muted: #718176;
                    font-family: 'DM Sans', sans-serif;
                    color: #203d2d;
                    background: var(--contact-cream);
                    overflow: hidden;
                }

                .contact-page * {
                    box-sizing: border-box;
                }

                .contact-navbar {
                    background: #faf8f0;
                    padding: 17px 0;
                    border-bottom: 1px solid rgba(23,76,53,0.09);
                }

                .contact-brand {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: var(--contact-green) !important;
                    font-size: 21px;
                    font-weight: 800;
                    line-height: 1.1;
                }

                .contact-brand-icon {
                    font-size: 32px;
                }

                .contact-brand small {
                    display: block;
                    font-size: 9px;
                    letter-spacing: 2.5px;
                    margin-top: 5px;
                    font-weight: 700;
                }

                .contact-nav-link {
                    color: #415849 !important;
                    font-size: 14px;
                    font-weight: 600;
                    padding: 10px 16px !important;
                    transition: 0.3s;
                }

                .contact-nav-link:hover,
                .contact-nav-active {
                    color: #174c35 !important;
                }

                .contact-nav-active {
                    position: relative;
                }

                .contact-nav-active::after {
                    content: "";
                    position: absolute;
                    bottom: 3px;
                    left: 16px;
                    width: 22px;
                    height: 2px;
                    background: var(--contact-gold);
                }

                .contact-toggler {
                    border: 1px solid #dce5dc !important;
                    padding: 7px 10px;
                }

                .contact-hero {
                    background:
                        linear-gradient(90deg, rgba(12,47,32,0.94), rgba(18,67,45,0.83)),
                        url("https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1800&q=85");
                    background-size: cover;
                    background-position: center;
                    padding: 100px 0 105px;
                    text-align: center;
                    color: white;
                    position: relative;
                }

                .contact-hero::after {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 6px;
                    background: var(--contact-gold);
                }

                .contact-eyebrow {
                    display: inline-block;
                    color: var(--contact-gold);
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 3px;
                    margin-bottom: 18px;
                }

                .contact-hero h1 {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(42px, 6vw, 67px);
                    font-weight: 600;
                    margin: 0 0 18px;
                    line-height: 1.15;
                }

                .contact-hero h1 span {
                    color: var(--contact-gold);
                    font-style: italic;
                }

                .contact-hero p {
                    max-width: 570px;
                    margin: auto;
                    color: rgba(255,255,255,0.8);
                    font-size: 15px;
                    line-height: 1.8;
                }

                .contact-main {
                    padding: 85px 0 100px;
                }

                .contact-info-card {
                    background: var(--contact-dark);
                    color: white;
                    border-radius: 22px;
                    padding: 38px 34px;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                }

                .contact-info-card::before {
                    content: "";
                    position: absolute;
                    width: 230px;
                    height: 230px;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 50%;
                    right: -100px;
                    bottom: -100px;
                }

                .contact-info-card h2 {
                    font-family: 'Playfair Display', serif;
                    font-size: 34px;
                    line-height: 1.3;
                    margin-bottom: 15px;
                    position: relative;
                }

                .contact-info-description {
                    color: rgba(255,255,255,0.67);
                    font-size: 14px;
                    line-height: 1.8;
                    margin-bottom: 38px;
                }

                .contact-info-item {
                    display: flex;
                    gap: 17px;
                    align-items: flex-start;
                    margin-bottom: 28px;
                    position: relative;
                }

                .contact-info-icon {
                    width: 46px;
                    height: 46px;
                    min-width: 46px;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 13px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                }

                .contact-info-item h3 {
                    font-size: 14px;
                    font-weight: 800;
                    margin: 2px 0 7px;
                    color: #fff;
                }

                .contact-info-item p {
                    font-size: 13px;
                    line-height: 1.8;
                    margin: 0;
                    color: rgba(255,255,255,0.66);
                    overflow-wrap: anywhere;
                }

                .contact-fresh-note {
                    display: flex;
                    gap: 13px;
                    align-items: center;
                    background: rgba(255,255,255,0.08);
                    padding: 18px;
                    border-radius: 13px;
                    margin-top: 38px;
                    position: relative;
                }

                .contact-fresh-note > span {
                    font-size: 28px;
                }

                .contact-fresh-note p {
                    margin: 0;
                    color: rgba(255,255,255,0.68);
                    font-size: 12px;
                    line-height: 1.7;
                }

                .contact-fresh-note strong {
                    color: white;
                    font-size: 13px;
                }

                .contact-form-card {
                    background: white;
                    border: 1px solid #e8ece4;
                    border-radius: 22px;
                    padding: 40px;
                    box-shadow: 0 15px 50px rgba(22,60,38,0.055);
                }

                .contact-form-heading {
                    margin-bottom: 28px;
                }

                .contact-form-heading h2 {
                    font-family: 'Playfair Display', serif;
                    font-size: 34px;
                    font-weight: 600;
                    color: var(--contact-green);
                    margin: 0 0 10px;
                }

                .contact-form-heading p {
                    color: var(--contact-muted);
                    font-size: 13px;
                    line-height: 1.8;
                    margin: 0;
                }

                .contact-label {
                    display: block;
                    color: #294633;
                    font-size: 12px;
                    font-weight: 700;
                    margin-bottom: 9px;
                }

                .contact-input {
                    min-height: 49px;
                    border: 1px solid #e1e8df !important;
                    border-radius: 9px !important;
                    background: #fcfdf9 !important;
                    color: #203d2d !important;
                    padding: 12px 15px !important;
                    font-size: 13px !important;
                    box-shadow: none !important;
                    transition: 0.25s;
                }

                .contact-input:focus {
                    border-color: #58866a !important;
                    background: white !important;
                    box-shadow: 0 0 0 3px rgba(23,76,53,0.08) !important;
                }

                .contact-input::placeholder {
                    color: #a3afa4;
                }

                textarea.contact-input {
                    resize: vertical;
                    min-height: 100px;
                }

                .contact-submit-btn {
                    width: 100%;
                    border: none;
                    border-radius: 9px;
                    padding: 16px 22px;
                    margin-top: 8px;
                    background: var(--contact-green);
                    color: white;
                    font-size: 14px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    transition: 0.3s;
                }

                .contact-submit-btn:hover {
                    background: var(--contact-dark);
                    transform: translateY(-2px);
                    box-shadow: 0 10px 22px rgba(23,76,53,0.18);
                }

                .contact-submit-btn span {
                    font-size: 20px;
                }

                .contact-order-summary {
                    background: #f6f8f1;
                    border: 1px solid #e5ebdf;
                    border-radius: 13px;
                    padding: 20px;
                    margin-bottom: 28px;
                }

                .contact-summary-heading {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 10px;
                    border-bottom: 1px solid #e1e8dc;
                    padding-bottom: 13px;
                    margin-bottom: 14px;
                }

                .contact-summary-heading h3 {
                    color: var(--contact-green);
                    font-size: 15px;
                    font-weight: 800;
                    margin: 0;
                }

                .contact-summary-heading > span {
                    background: #e5eddf;
                    color: var(--contact-green);
                    border-radius: 30px;
                    padding: 5px 11px;
                    font-size: 11px;
                    font-weight: 700;
                }

                .contact-order-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 12px;
                    padding: 10px 0;
                    border-bottom: 1px solid #e8ede4;
                }

                .contact-order-item h4 {
                    font-size: 13px;
                    font-weight: 700;
                    color: #294633;
                    margin: 0 0 5px;
                }

                .contact-order-item p {
                    font-size: 11px;
                    color: #78877a;
                    margin: 0;
                }

                .contact-order-item strong {
                    color: var(--contact-green);
                    font-size: 13px;
                    white-space: nowrap;
                }

                .contact-no-products {
                    color: #899489;
                    font-size: 12px;
                }

                .contact-order-total {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 16px;
                    margin-top: 5px;
                    color: #294633;
                    font-size: 13px;
                    font-weight: 700;
                }

                .contact-order-total strong {
                    color: var(--contact-green);
                    font-size: 21px;
                }

                .contact-footer {
                    background: #0d3022;
                    color: white;
                    text-align: center;
                    padding: 45px 15px 25px;
                }

                .contact-footer-brand {
                    color: white;
                    text-decoration: none;
                    font-size: 19px;
                    font-weight: 800;
                }

                .contact-footer-brand:hover {
                    color: var(--contact-gold);
                }

                .contact-footer p {
                    color: rgba(255,255,255,0.6);
                    font-size: 12px;
                    margin: 12px 0 25px;
                }

                .contact-footer-line {
                    height: 1px;
                    max-width: 1100px;
                    margin: auto auto 20px;
                    background: rgba(255,255,255,0.13);
                }

                .contact-footer small {
                    color: rgba(255,255,255,0.48);
                    font-size: 11px;
                }

                @media (max-width: 991px) {
                    .contact-main {
                        padding: 60px 0;
                    }

                    .contact-info-card {
                        padding: 32px;
                    }
                }

                @media (max-width: 576px) {
                    .contact-hero {
                        padding: 75px 15px 80px;
                    }

                    .contact-hero p {
                        font-size: 13px;
                    }

                    .contact-main {
                        padding: 40px 0 55px;
                    }

                    .contact-info-card,
                    .contact-form-card {
                        padding: 25px 20px;
                        border-radius: 16px;
                    }

                    .contact-info-card h2,
                    .contact-form-heading h2 {
                        font-size: 28px;
                    }

                    .contact-info-description {
                        margin-bottom: 28px;
                    }

                    .contact-fresh-note {
                        margin-top: 25px;
                    }
                }
            `}</style>

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg contact-navbar">
                <div className="container">
                    <Link className="navbar-brand contact-brand" to="/">
                        <span className="contact-brand-icon">🥬</span>
                        <span>
                            Palmurugan
                            <small>FRESH VEGETABLES</small>
                        </span>
                    </Link>

                    <button
                        className="navbar-toggler contact-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#contactNavbar"
                        aria-controls="contactNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="contactNavbar">
                        <ul className="navbar-nav ms-auto align-items-lg-center">
                            {navLinks.map((item) => (
                                <li className="nav-item" key={item.path}>
                                    <Link
                                        className={`nav-link contact-nav-link ${
                                            item.path === "/contact"
                                                ? "contact-nav-active"
                                                : ""
                                        }`}
                                        to={item.path}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}

                            <li className="nav-item">
                                <Link className="nav-link contact-nav-link" to="/cart">
                                    Cart 🛒
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link contact-nav-link" to="/admin">
                                    Admin
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section className="contact-hero">
                <div className="container">
                    <span className="contact-eyebrow">
                        WE ARE HERE FOR YOU
                    </span>

                    <h1>
                        {order ? (
                            <>Complete Your <span>Order</span></>
                        ) : (
                            <>Let's Talk <span>Fresh</span></>
                        )}
                    </h1>

                    <p>
                        {order
                            ? "Enter your delivery details and confirm your fresh vegetable order."
                            : "Have a question? We would love to hear from you."}
                    </p>
                </div>
            </section>

            {/* CONTACT CONTENT */}
            <main className="contact-main">
                <div className="container">
                    <div className="row g-4 justify-content-center">

                        {/* CONTACT INFORMATION */}
                        <div className="col-lg-5">
                            <div className="contact-info-card">
                                <span className="contact-eyebrow">
                                    GET IN TOUCH
                                </span>

                                <h2>We'd love to hear from you</h2>

                                <p className="contact-info-description">
                                    Reach out to us for fresh vegetables,
                                    delivery details or any questions.
                                </p>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon">📍</div>
                                    <div>
                                        <h3>Our Address</h3>
                                        <p>
                                            Palmurugan Fresh Vegetables<br />
                                            Virudhunagar, Tamil Nadu
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon">📞</div>
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="contact-info-icon">✉️</div>
                                    <div>
                                        <h3>Email Us</h3>
                                        <p>info@palmuruganvegetables.com</p>
                                    </div>
                                </div>

                                <div className="contact-fresh-note">
                                    <span>🌱</span>
                                    <p>
                                        <strong>Freshness you can trust</strong>
                                        <br />
                                        Bringing fresh vegetables closer to your home.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CONTACT FORM */}
                        <div className="col-lg-7">
                            <div className="contact-form-card">

                                <div className="contact-form-heading">
                                    <span className="contact-eyebrow">
                                        {order ? "ORDER DETAILS" : "SEND A MESSAGE"}
                                    </span>

                                    <h2>
                                        {order
                                            ? "Delivery Information"
                                            : "Contact Us"}
                                    </h2>

                                    <p>
                                        {order
                                            ? "Please provide your details to complete your order."
                                            : "Fill in the form below and get in touch with us."}
                                    </p>
                                </div>

                                {/* ORDER SUMMARY */}
                                {order && (
                                    <div className="contact-order-summary">
                                        <div className="contact-summary-heading">
                                            <h3>🛒 Your Order</h3>
                                            <span>
                                                {order.products?.length || 0} products
                                            </span>
                                        </div>

                                        {order.products?.length > 0 ? (
                                            order.products.map((item) => (
                                                <div
                                                    className="contact-order-item"
                                                    key={item.name}
                                                >
                                                    <div>
                                                        <h4>{item.name}</h4>
                                                        <p>
                                                            ₹{item.price} × {item.quantity}
                                                        </p>
                                                    </div>

                                                    <strong>
                                                        ₹{item.price * item.quantity}
                                                    </strong>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="contact-no-products">
                                                No products found in this order.
                                            </p>
                                        )}

                                        <div className="contact-order-total">
                                            <span>Total Amount</span>
                                            <strong>₹{order.total || 0}</strong>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">

                                        <div className="col-md-6">
                                            <label className="contact-label">
                                                Full Name *
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control contact-input"
                                                placeholder="Enter your name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="contact-label">
                                                Mobile Number *
                                            </label>

                                            <input
                                                type="tel"
                                                className="form-control contact-input"
                                                placeholder="Enter mobile number"
                                                value={mobile}
                                                onChange={(e) => setMobile(e.target.value)}
                                                pattern="[0-9]{10}"
                                                maxLength="10"
                                                title="Enter a valid 10-digit mobile number"
                                                required
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="contact-label">
                                                Email Address *
                                            </label>

                                            <input
                                                type="email"
                                                className="form-control contact-input"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="contact-label">
                                                Delivery Address *
                                            </label>

                                            <textarea
                                                className="form-control contact-input"
                                                rows="3"
                                                placeholder="Enter your complete address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="col-12">
                                            <label className="contact-label">
                                                Message
                                            </label>

                                            <textarea
                                                className="form-control contact-input"
                                                rows="3"
                                                placeholder="Any additional information?"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            ></textarea>
                                        </div>

                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                className="contact-submit-btn"
                                            >
                                                {order ? "Confirm Order" : "Send Message"}
                                                <span>→</span>
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* FOOTER */}
            <footer className="contact-footer">
                <div className="container">
                    <Link to="/" className="contact-footer-brand">
                        🥬 Palmurugan Fresh Vegetables
                    </Link>

                    <p>Fresh Vegetables Delivered to Your Doorstep</p>

                    <div className="contact-footer-line"></div>

                    <small>
                        © 2026 Palmurugan Fresh Vegetables. All Rights Reserved.
                    </small>
                </div>
            </footer>

        </div>
    );
}

export default Contact;
