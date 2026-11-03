
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import usePageMotion from "./usePageMotion.js";

function Order() {
    usePageMotion();
    const location = useLocation();
    const product = location.state;

    return (
        <div className="order-page">
            <nav className="navbar navbar-expand-lg order-navbar">
                <div className="container">
                    <Link className="navbar-brand order-brand" to="/">
                        🥬 Palmurugan <span>Fresh</span>
                    </Link>

                    <div className="navbar-nav ms-auto flex-row">
                        <Link className="nav-link order-nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link order-nav-link" to="/products">
                            Products
                        </Link>
                        <Link className="nav-link order-nav-link" to="/cart">
                            🛒 Cart
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="order-main">
                <div className="container">
                    <div className="order-heading">
                        <span className="order-eyebrow">FRESHNESS TO YOUR DOORSTEP</span>
                        <h1>Complete Your <span>Order</span></h1>
                        <p>Just a few details, and we’ll get your fresh vegetables ready.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-xl-6">
                            <div className="order-card">
                                <div className="order-card-heading">
                                    <div className="order-icon">🛍️</div>
                                    <div>
                                        <h2>Delivery Details</h2>
                                        <p>Enter your information below</p>
                                    </div>
                                </div>

                                {product && (
                                    <div className="order-product-summary">
                                        <div>
                                            <span className="order-summary-label">YOUR SELECTED PRODUCT</span>
                                            <h3>{product.name}</h3>
                                            <p>Fresh vegetables, selected with care</p>
                                        </div>
                                        <strong>₹{product.price}</strong>
                                    </div>
                                )}

                                <form onSubmit={(event) => event.preventDefault()}>
                                    <div className="order-form-group">
                                        <label htmlFor="customerName">Full Name</label>
                                        <input
                                            id="customerName"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your full name"
                                            autoComplete="name"
                                            required
                                        />
                                    </div>

                                    <div className="order-form-group">
                                        <label htmlFor="customerMobile">Mobile Number</label>
                                        <input
                                            id="customerMobile"
                                            type="tel"
                                            className="form-control"
                                            placeholder="Enter your 10-digit mobile number"
                                            pattern="[6-9][0-9]{9}"
                                            maxLength="10"
                                            autoComplete="tel"
                                            required
                                        />
                                    </div>

                                    <div className="order-form-group">
                                        <label htmlFor="customerAddress">Delivery Address</label>
                                        <textarea
                                            id="customerAddress"
                                            className="form-control"
                                            rows="4"
                                            placeholder="House number, street, area, city and pincode"
                                            autoComplete="street-address"
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="order-submit-btn">
                                        Confirm Order <span>→</span>
                                    </button>

                                    <p className="order-secure-note">
                                        🌿 Freshness and quality, delivered with care.
                                    </p>
                                </form>
                            </div>

                            <div className="order-help-note">
                                <span>💚</span>
                                <p>Thank you for choosing Palmurugan Fresh Vegetables!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="order-footer">
                <div className="container">
                    <Link to="/" className="order-footer-brand">
                        🥬 Palmurugan Fresh Vegetables
                    </Link>
                    <p>Fresh vegetables delivered to your doorstep.</p>
                    <div className="order-footer-line"></div>
                    <small>© 2026 Palmurugan Fresh Vegetables. All rights reserved.</small>
                </div>
            </footer>
        </div>
    );
}

export default Order;
