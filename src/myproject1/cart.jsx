
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import usePageMotion from "./usePageMotion.js";

function Cart() {
    usePageMotion();

    const navigate = useNavigate();

    const [cart, setCart] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cart")) || [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function increase(name) {
        setCart(currentCart =>
            currentCart.map(item =>
                item.name === name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    }

    function decrease(name) {
        setCart(currentCart =>
            currentCart.map(item =>
                item.name === name
                    ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                    : item
            )
        );
    }

    function removeItem(name) {
        setCart(currentCart =>
            currentCart.filter(item => item.name !== name)
        );
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    function placeOrder() {
        navigate("/contact", {
            state: {
                products: cart,
                total: total
            }
        });
    }

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <div className="cart-page">

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap');

                .cart-page {
                    --cart-green: #174c35;
                    --cart-dark: #103b29;
                    --cart-cream: #faf8f0;
                    --cart-gold: #d5a653;
                    --cart-muted: #718176;
                    font-family: 'DM Sans', sans-serif;
                    color: #203d2d;
                    background: var(--cart-cream);
                    min-height: 100vh;
                }

                .cart-page * {
                    box-sizing: border-box;
                }

                .cart-navbar {
                    background: #faf8f0;
                    padding: 17px 0;
                    border-bottom: 1px solid rgba(23,76,53,0.09);
                }

                .cart-brand {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    color: var(--cart-green) !important;
                    font-size: 21px;
                    font-weight: 800;
                    text-decoration: none;
                }

                .cart-brand span {
                    color: var(--cart-gold);
                }

                .cart-nav-link {
                    color: #415849 !important;
                    font-size: 14px;
                    font-weight: 600;
                    padding: 10px 15px !important;
                    transition: 0.3s;
                }

                .cart-nav-link:hover,
                .cart-nav-active {
                    color: var(--cart-green) !important;
                }

                .cart-nav-active {
                    position: relative;
                }

                .cart-nav-active::after {
                    content: "";
                    position: absolute;
                    left: 15px;
                    bottom: 3px;
                    width: 22px;
                    height: 2px;
                    background: var(--cart-gold);
                }

                .cart-main {
                    padding: 75px 0 100px;
                    min-height: 75vh;
                }

                .cart-heading {
                    text-align: center;
                    margin-bottom: 55px;
                }

                .cart-eyebrow {
                    display: inline-block;
                    color: #a77c32;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 3px;
                    margin-bottom: 15px;
                }

                .cart-heading h1 {
                    font-family: 'Playfair Display', serif;
                    color: var(--cart-green);
                    font-size: clamp(38px, 5vw, 55px);
                    font-weight: 600;
                    margin: 0 0 13px;
                }

                .cart-heading h1 span {
                    color: #b58a45;
                    font-style: italic;
                }

                .cart-heading p {
                    color: var(--cart-muted);
                    font-size: 14px;
                    margin: 0;
                }

                .cart-items-panel {
                    background: white;
                    border: 1px solid #e8ece4;
                    border-radius: 19px;
                    padding: 30px;
                    box-shadow: 0 12px 40px rgba(22,60,38,0.045);
                }

                .cart-panel-heading {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #edf0e9;
                }

                .cart-panel-heading h2 {
                    color: var(--cart-green);
                    font-family: 'Playfair Display', serif;
                    font-size: 25px;
                    margin: 0;
                }

                .cart-panel-heading span {
                    color: var(--cart-green);
                    background: #edf3e9;
                    padding: 7px 14px;
                    border-radius: 30px;
                    font-size: 11px;
                    font-weight: 700;
                }

                .cart-item {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 25px 0;
                    border-bottom: 1px solid #edf0e9;
                }

                .cart-item-icon {
                    width: 78px;
                    height: 78px;
                    min-width: 78px;
                    border-radius: 15px;
                    background: #f0f5e9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 35px;
                }

                .cart-item-info {
                    flex: 1;
                    min-width: 0;
                }

                .cart-item-label {
                    color: #a77c32;
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: 1.8px;
                }

                .cart-item-info h3 {
                    color: var(--cart-green);
                    font-family: 'Playfair Display', serif;
                    font-size: 22px;
                    font-weight: 600;
                    margin: 5px 0;
                }

                .cart-item-info p {
                    color: #849087;
                    font-size: 12px;
                    margin: 0 0 9px;
                }

                .cart-remove-btn {
                    border: none;
                    background: none;
                    padding: 0;
                    color: #b45d50;
                    font-size: 11px;
                    font-weight: 700;
                    transition: 0.2s;
                }

                .cart-remove-btn:hover {
                    color: #8e2f25;
                }

                .cart-remove-btn span {
                    font-size: 17px;
                    vertical-align: -1px;
                }

                .cart-item-controls {
                    min-width: 125px;
                    text-align: right;
                }

                .cart-quantity {
                    display: inline-flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    border: 1px solid #e0e8dd;
                    border-radius: 8px;
                    padding: 5px 8px;
                    margin-bottom: 12px;
                }

                .cart-quantity button {
                    border: none;
                    background: none;
                    color: var(--cart-green);
                    font-size: 19px;
                    width: 20px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }

                .cart-quantity button:hover {
                    color: #b58a45;
                }

                .cart-quantity span {
                    color: var(--cart-green);
                    font-size: 13px;
                    font-weight: 800;
                    min-width: 12px;
                }

                .cart-item-subtotal {
                    display: block;
                    color: var(--cart-green);
                    font-size: 16px;
                    font-weight: 800;
                }

                .cart-subtotal-label {
                    color: #9aa59b;
                    font-size: 10px;
                }

                .cart-back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                    color: var(--cart-green);
                    text-decoration: none;
                    font-size: 12px;
                    font-weight: 700;
                    margin-top: 25px;
                    transition: 0.2s;
                }

                .cart-back-link:hover {
                    color: #b58a45;
                }

                .cart-back-link span {
                    font-size: 19px;
                }

                .cart-summary {
                    background: var(--cart-dark);
                    border-radius: 19px;
                    padding: 30px 27px;
                    color: white;
                    position: sticky;
                    top: 25px;
                    overflow: hidden;
                }

                .cart-summary .cart-eyebrow {
                    color: var(--cart-gold);
                }

                .cart-summary h2 {
                    font-family: 'Playfair Display', serif;
                    font-size: 28px;
                    font-weight: 600;
                    margin: 0 0 27px;
                    color: white;
                }

                .cart-summary-row {
                    display: flex;
                    justify-content: space-between;
                    gap: 12px;
                    margin-bottom: 19px;
                    font-size: 12px;
                    color: rgba(255,255,255,0.65);
                }

                .cart-summary-row strong {
                    color: white;
                    font-size: 13px;
                    font-weight: 700;
                }

                .cart-summary-row .cart-free {
                    color: #d5c18e;
                    font-size: 11px;
                    text-align: right;
                }

                .cart-summary-divider {
                    height: 1px;
                    background: rgba(255,255,255,0.15);
                    margin: 23px 0;
                }

                .cart-total-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 25px;
                }

                .cart-total-row span {
                    font-size: 13px;
                    color: rgba(255,255,255,0.75);
                    font-weight: 600;
                }

                .cart-total-row strong {
                    color: var(--cart-gold);
                    font-size: 25px;
                    font-weight: 800;
                }

                .cart-checkout-btn {
                    width: 100%;
                    border: none;
                    border-radius: 9px;
                    background: var(--cart-gold);
                    color: #173b29;
                    padding: 15px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: 800;
                    transition: 0.3s;
                    cursor: pointer;
                }

                .cart-checkout-btn:hover {
                    background: #e6bd73;
                    color: #173b29;
                    transform: translateY(-2px);
                    box-shadow: 0 9px 20px rgba(0,0,0,0.15);
                }

                .cart-checkout-btn span {
                    font-size: 20px;
                }

                .cart-summary-note {
                    color: rgba(255,255,255,0.55);
                    font-size: 10px;
                    text-align: center;
                    margin: 19px 0 0;
                }

                .cart-quality-note {
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    background: #edf3e8;
                    border: 1px solid #e0e9dc;
                    padding: 17px;
                    border-radius: 13px;
                    margin-top: 18px;
                }

                .cart-quality-note > span {
                    font-size: 25px;
                }

                .cart-quality-note p {
                    color: #78877a;
                    font-size: 11px;
                    line-height: 1.7;
                    margin: 0;
                }

                .cart-quality-note strong {
                    color: var(--cart-green);
                    font-size: 12px;
                }

                .cart-empty {
                    max-width: 650px;
                    margin: 0 auto;
                    padding: 65px 30px;
                    text-align: center;
                    background: white;
                    border: 1px solid #e8ece4;
                    border-radius: 22px;
                    box-shadow: 0 15px 45px rgba(22,60,38,0.05);
                }

                .cart-empty-icon {
                    width: 95px;
                    height: 95px;
                    border-radius: 50%;
                    background: #edf3e8;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 42px;
                    margin: 0 auto 25px;
                }

                .cart-empty h2 {
                    font-family: 'Playfair Display', serif;
                    color: var(--cart-green);
                    font-size: 30px;
                    margin-bottom: 12px;
                }

                .cart-empty p {
                    color: var(--cart-muted);
                    font-size: 13px;
                    line-height: 1.8;
                    margin-bottom: 25px;
                }

                .cart-empty-btn {
                    max-width: 240px;
                    margin: auto;
                    background: var(--cart-green);
                    color: white;
                }

                .cart-empty-btn:hover {
                    background: var(--cart-dark);
                    color: white;
                }

                .cart-footer {
                    background: #0d3022;
                    color: white;
                    text-align: center;
                    padding: 45px 15px 25px;
                }

                .cart-footer-brand {
                    color: white;
                    text-decoration: none;
                    font-size: 19px;
                    font-weight: 800;
                }

                .cart-footer-brand:hover {
                    color: var(--cart-gold);
                }

                .cart-footer p {
                    color: rgba(255,255,255,0.6);
                    font-size: 12px;
                    margin: 12px 0 25px;
                }

                .cart-footer-line {
                    height: 1px;
                    max-width: 1100px;
                    margin: auto auto 20px;
                    background: rgba(255,255,255,0.13);
                }

                .cart-footer small {
                    color: rgba(255,255,255,0.48);
                    font-size: 11px;
                }

                @media (max-width: 991px) {
                    .cart-main {
                        padding: 60px 0;
                    }

                    .cart-summary {
                        position: static;
                    }
                }

                @media (max-width: 576px) {
                    .cart-main {
                        padding: 45px 0 60px;
                    }

                    .cart-heading {
                        margin-bottom: 35px;
                    }

                    .cart-items-panel {
                        padding: 20px 15px;
                    }

                    .cart-item {
                        gap: 12px;
                        flex-wrap: wrap;
                    }

                    .cart-item-icon {
                        width: 60px;
                        height: 60px;
                        min-width: 60px;
                        font-size: 28px;
                    }

                    .cart-item-info {
                        flex: 1;
                    }

                    .cart-item-info h3 {
                        font-size: 19px;
                    }

                    .cart-item-controls {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        text-align: left;
                        padding-left: 72px;
                    }

                    .cart-quantity {
                        margin: 0;
                    }

                    .cart-item-subtotal {
                        display: inline-block;
                        margin-right: 5px;
                    }

                    .cart-subtotal-label {
                        display: none;
                    }

                    .cart-summary {
                        padding: 25px 20px;
                    }

                    .cart-empty {
                        padding: 45px 20px;
                    }

                    .cart-empty h2 {
                        font-size: 25px;
                    }

                    .cart-navbar .navbar-nav {
                        gap: 0;
                    }

                    .cart-nav-link {
                        padding: 10px 8px !important;
                        font-size: 12px;
                    }
                }
            `}</style>

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg cart-navbar">
                <div className="container">
                    <Link className="navbar-brand cart-brand" to="/">
                        🥬 Palmurugan <span>Fresh</span>
                    </Link>

                    <div className="navbar-nav ms-auto flex-row">
                        {navLinks.map(item => (
                            <Link
                                key={item.path}
                                className="nav-link cart-nav-link"
                                to={item.path}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <Link
                            className="nav-link cart-nav-link cart-nav-active"
                            to="/cart"
                        >
                            🛒 Cart
                        </Link>
                    </div>
                </div>
            </nav>

            {/* CART CONTENT */}
            <main className="cart-main">
                <div className="container">

                    <div className="cart-heading">
                        <span className="cart-eyebrow">
                            YOUR FRESH PICKS
                        </span>

                        <h1>
                            Your Shopping <span>Cart</span>
                        </h1>

                        <p>
                            Review your vegetables before placing your order.
                        </p>
                    </div>

                    {cart.length > 0 ? (
                        <div className="row g-4 align-items-start">

                            {/* CART ITEMS */}
                            <div className="col-lg-8">
                                <div className="cart-items-panel">

                                    <div className="cart-panel-heading">
                                        <h2>Cart Items</h2>
                                        <span>{totalItems} items</span>
                                    </div>

                                    {cart.map(item => (
                                        <article
                                            className="cart-item"
                                            key={item.name}
                                        >
                                            <div className="cart-item-icon">
                                                🥬
                                            </div>

                                            <div className="cart-item-info">
                                                <span className="cart-item-label">
                                                    FRESH VEGETABLE
                                                </span>

                                                <h3>{item.name}</h3>

                                                <p>₹{item.price} per kg</p>

                                                <button
                                                    className="cart-remove-btn"
                                                    onClick={() => removeItem(item.name)}
                                                >
                                                    <span>×</span> Remove
                                                </button>
                                            </div>

                                            <div className="cart-item-controls">
                                                <div className="cart-quantity">
                                                    <button
                                                        type="button"
                                                        aria-label={`Decrease ${item.name} quantity`}
                                                        onClick={() => decrease(item.name)}
                                                    >
                                                        −
                                                    </button>

                                                    <span>{item.quantity}</span>

                                                    <button
                                                        type="button"
                                                        aria-label={`Increase ${item.name} quantity`}
                                                        onClick={() => increase(item.name)}
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <strong className="cart-item-subtotal">
                                                    ₹{item.price * item.quantity}
                                                </strong>

                                                <span className="cart-subtotal-label">
                                                    Subtotal
                                                </span>
                                            </div>
                                        </article>
                                    ))}

                                    <Link to="/products" className="cart-back-link">
                                        <span>←</span> Continue Shopping
                                    </Link>

                                </div>
                            </div>

                            {/* ORDER SUMMARY */}
                            <div className="col-lg-4">
                                <aside className="cart-summary">

                                    <span className="cart-eyebrow">
                                        ORDER OVERVIEW
                                    </span>

                                    <h2>Order Summary</h2>

                                    <div className="cart-summary-row">
                                        <span>Items</span>
                                        <strong>{totalItems}</strong>
                                    </div>

                                    <div className="cart-summary-row">
                                        <span>Subtotal</span>
                                        <strong>₹{total}</strong>
                                    </div>

                                    <div className="cart-summary-row">
                                        <span>Delivery</span>
                                        <strong className="cart-free">
                                            To be confirmed
                                        </strong>
                                    </div>

                                    <div className="cart-summary-divider"></div>

                                    <div className="cart-total-row">
                                        <span>Total Amount</span>
                                        <strong>₹{total}</strong>
                                    </div>

                                    <button
                                        className="cart-checkout-btn"
                                        onClick={placeOrder}
                                    >
                                        Place Order <span>→</span>
                                    </button>

                                    <p className="cart-summary-note">
                                        🌿 Fresh vegetables, selected with care.
                                    </p>

                                </aside>

                                <div className="cart-quality-note">
                                    <span>💚</span>
                                    <p>
                                        <strong>Freshness matters</strong>
                                        <br />
                                        Thank you for shopping with us.
                                    </p>
                                </div>
                            </div>

                        </div>
                    ) : (

                        /* EMPTY CART */
                        <div className="cart-empty">
                            <div className="cart-empty-icon">
                                🛒
                            </div>

                            <h2>
                                Your cart is waiting for freshness!
                            </h2>

                            <p>
                                You haven't added any vegetables yet.
                                Explore our fresh selection.
                            </p>

                            <Link
                                to="/products"
                                className="cart-checkout-btn cart-empty-btn"
                            >
                                Explore Vegetables <span>→</span>
                            </Link>
                        </div>

                    )}

                </div>
            </main>

            {/* FOOTER */}
            <footer className="cart-footer">
                <div className="container">

                    <Link to="/" className="cart-footer-brand">
                        🥬 Palmurugan Fresh Vegetables
                    </Link>

                    <p>
                        Fresh vegetables delivered to your doorstep.
                    </p>

                    <div className="cart-footer-line"></div>

                    <small>
                        © 2026 Palmurugan Fresh Vegetables. All rights reserved.
                    </small>

                </div>
            </footer>

        </div>
    );
}

export default Cart;
