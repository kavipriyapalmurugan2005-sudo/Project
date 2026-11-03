
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import usePageMotion from "./usePageMotion.js";

function Admin() {
    usePageMotion();

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    async function fetchOrders() {
        setLoading(true);
        setError("");

        try {
            const token = localStorage.getItem("adminToken");

            if (!token) {
                navigate("/admin");
                return;
            }

            const response = await fetch("http://localhost:3000/order", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 401 || response.status === 403) {
                localStorage.removeItem("adminToken");
                navigate("/admin");
                return;
            }

            const data = await response.json();

            if (response.ok && Array.isArray(data)) {
                setOrders(data);
            } else {
                setError(data.message || "Orders load panna mudiyala");
            }
        } catch (err) {
            console.log(err);
            setError("Backend connection failed");
        } finally {
            setLoading(false);
        }
    }

    function handleLogout() {
        localStorage.removeItem("adminToken");
        navigate("/admin");
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    const totalRevenue = orders.reduce(
        (sum, order) => sum + (Number(order.total) || 0),
        0
    );

    const totalProducts = orders.reduce(
        (sum, order) =>
            sum + (order.products || []).reduce(
                (productSum, item) =>
                    productSum + (Number(item.quantity) || 0),
                0
            ),
        0
    );

    return (
        <div className="admin-page">

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap');

                .admin-page {
                    --admin-green: #174c35;
                    --admin-dark: #103b29;
                    --admin-cream: #faf8f0;
                    --admin-gold: #d5a653;
                    --admin-muted: #718176;
                    font-family: 'DM Sans', sans-serif;
                    background: var(--admin-cream);
                    color: #203d2d;
                    min-height: 100vh;
                }

                .admin-page * {
                    box-sizing: border-box;
                }

                .admin-navbar {
                    background: #faf8f0;
                    border-bottom: 1px solid rgba(23,76,53,0.09);
                    padding: 17px 0;
                }

                .admin-brand {
                    color: var(--admin-green) !important;
                    font-size: 19px;
                    font-weight: 800;
                    text-decoration: none;
                }

                .admin-nav-link {
                    color: #415849;
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: 600;
                    transition: 0.2s;
                }

                .admin-nav-link:hover {
                    color: var(--admin-gold);
                }

                .admin-logout-btn {
                    background: var(--admin-green);
                    border: none;
                    color: white;
                    border-radius: 8px;
                    padding: 10px 17px;
                    font-size: 12px;
                    font-weight: 700;
                    transition: 0.25s;
                }

                .admin-logout-btn:hover {
                    background: #0d3022;
                    transform: translateY(-2px);
                }

                .admin-logout-btn span {
                    font-size: 16px;
                    margin-right: 5px;
                }

                .admin-main {
                    max-width: 1500px;
                    padding: 55px 35px 85px;
                    margin: auto;
                }

                .admin-heading {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 35px;
                }

                .admin-eyebrow {
                    display: inline-block;
                    color: #a77c32;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 2.8px;
                    margin-bottom: 12px;
                }

                .admin-heading h1 {
                    font-family: 'Playfair Display', serif;
                    color: var(--admin-green);
                    font-size: clamp(32px, 4vw, 43px);
                    font-weight: 600;
                    margin: 0 0 9px;
                }

                .admin-heading p {
                    color: var(--admin-muted);
                    font-size: 13px;
                    margin: 0;
                }

                .admin-refresh-btn {
                    background: white;
                    border: 1px solid #dce6da;
                    color: var(--admin-green);
                    border-radius: 9px;
                    padding: 12px 18px;
                    font-size: 12px;
                    font-weight: 700;
                    white-space: nowrap;
                    transition: 0.25s;
                }

                .admin-refresh-btn:hover:not(:disabled) {
                    background: var(--admin-green);
                    color: white;
                    border-color: var(--admin-green);
                }

                .admin-refresh-btn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .admin-refresh-btn span {
                    font-size: 17px;
                    margin-right: 5px;
                }

                .admin-stats {
                    margin-bottom: 40px;
                }

                .admin-stat-card {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 25px;
                    background: white;
                    border: 1px solid #e8ece4;
                    border-radius: 15px;
                    height: 100%;
                    box-shadow: 0 10px 30px rgba(22,60,38,0.035);
                    transition: 0.3s;
                }

                .admin-stat-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 15px 35px rgba(22,60,38,0.08);
                }

                .admin-stat-icon {
                    width: 58px;
                    height: 58px;
                    min-width: 58px;
                    border-radius: 14px;
                    background: #edf3e8;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: var(--admin-green);
                    font-size: 25px;
                    font-weight: 800;
                }

                .admin-stat-card p {
                    color: #829087;
                    font-size: 12px;
                    font-weight: 600;
                    margin: 0 0 7px;
                }

                .admin-stat-card h2 {
                    color: var(--admin-green);
                    font-size: 25px;
                    font-weight: 800;
                    margin: 0;
                    overflow-wrap: anywhere;
                }

                .admin-stat-card .admin-status-text {
                    font-size: 22px;
                    color: #43835b;
                }

                .admin-orders-section {
                    background: white;
                    border: 1px solid #e8ece4;
                    border-radius: 18px;
                    padding: 30px;
                    box-shadow: 0 12px 40px rgba(22,60,38,0.035);
                }

                .admin-orders-heading {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    padding-bottom: 23px;
                    border-bottom: 1px solid #edf0e9;
                    margin-bottom: 25px;
                }

                .admin-orders-heading h2 {
                    color: var(--admin-green);
                    font-family: 'Playfair Display', serif;
                    font-size: 26px;
                    margin: 0 0 7px;
                }

                .admin-orders-heading p {
                    color: var(--admin-muted);
                    font-size: 12px;
                    margin: 0;
                }

                .admin-order-count {
                    background: #edf3e8;
                    color: var(--admin-green);
                    padding: 8px 14px;
                    border-radius: 30px;
                    font-size: 11px;
                    font-weight: 800;
                    white-space: nowrap;
                }

                .admin-order-list {
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                }

                .admin-order-card {
                    border: 1px solid #e4eae0;
                    border-radius: 13px;
                    overflow: hidden;
                    background: #fff;
                }

                .admin-order-card-header {
                    background: #f5f7f0;
                    padding: 20px 23px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    border-bottom: 1px solid #e7ecdf;
                }

                .admin-order-label {
                    color: #a77c32;
                    font-size: 9px;
                    letter-spacing: 2px;
                    font-weight: 800;
                }

                .admin-order-id {
                    color: var(--admin-green);
                    font-size: 12px;
                    font-weight: 700;
                    margin: 6px 0 0;
                    overflow-wrap: anywhere;
                }

                .admin-order-total {
                    text-align: right;
                }

                .admin-order-total span {
                    display: block;
                    color: #829087;
                    font-size: 10px;
                    margin-bottom: 5px;
                }

                .admin-order-total strong {
                    color: var(--admin-green);
                    font-size: 21px;
                    font-weight: 800;
                }

                .admin-customer-details {
                    padding: 23px;
                    border-bottom: 1px solid #edf0e9;
                }

                .admin-customer-details h3,
                .admin-products-section h3 {
                    color: var(--admin-green);
                    font-size: 14px;
                    font-weight: 800;
                    margin: 0 0 20px;
                }

                .admin-customer-details .row > div > span,
                .admin-customer-message > span {
                    color: #89958b;
                    display: block;
                    font-size: 10px;
                    font-weight: 600;
                    margin-bottom: 7px;
                }

                .admin-customer-details .row > div > p {
                    color: #294633;
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 1.7;
                    margin: 0;
                    overflow-wrap: anywhere;
                }

                .admin-customer-message {
                    background: #f6f8f2;
                    border-radius: 9px;
                    padding: 13px 15px;
                    margin-top: 20px;
                }

                .admin-customer-message p {
                    color: #415849;
                    font-size: 12px;
                    margin: 0;
                    line-height: 1.7;
                }

                .admin-products-section {
                    padding: 23px;
                }

                .admin-products-section h3 {
                    margin-bottom: 15px;
                }

                .admin-products-table {
                    margin: 0;
                    min-width: 500px;
                }

                .admin-products-table thead th {
                    background: #f5f7f0;
                    color: #718176;
                    font-size: 10px;
                    font-weight: 800;
                    padding: 13px;
                    border-bottom: 1px solid #e5ebdf;
                    white-space: nowrap;
                }

                .admin-products-table tbody td {
                    color: #415849;
                    font-size: 12px;
                    padding: 14px 13px;
                    vertical-align: middle;
                    border-bottom: 1px solid #edf0e9;
                }

                .admin-quantity {
                    display: inline-block;
                    background: #edf3e8;
                    color: var(--admin-green);
                    padding: 5px 11px;
                    border-radius: 6px;
                    font-size: 11px;
                    font-weight: 800;
                }

                .admin-products-table .admin-subtotal {
                    color: var(--admin-green);
                    font-weight: 800;
                }

                .admin-no-products {
                    background: #f6f8f2;
                    padding: 15px;
                    color: #829087;
                    font-size: 12px;
                    border-radius: 8px;
                }

                .admin-order-card-footer {
                    background: #f8f9f5;
                    border-top: 1px solid #edf0e9;
                    padding: 15px 23px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 12px;
                }

                .admin-order-card-footer span {
                    color: #849087;
                    font-size: 11px;
                }

                .admin-order-card-footer strong {
                    color: var(--admin-green);
                    font-size: 14px;
                    white-space: nowrap;
                }

                .admin-message,
                .admin-empty {
                    text-align: center;
                    padding: 65px 20px;
                }

                .admin-loader {
                    width: 38px;
                    height: 38px;
                    border: 3px solid #e4eadf;
                    border-top-color: var(--admin-green);
                    border-radius: 50%;
                    margin: 0 auto 15px;
                    animation: adminSpin 0.8s linear infinite;
                }

                @keyframes adminSpin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                .admin-message p {
                    color: var(--admin-muted);
                    font-size: 13px;
                }

                .admin-empty > div {
                    font-size: 45px;
                    margin-bottom: 15px;
                }

                .admin-empty h3 {
                    font-family: 'Playfair Display', serif;
                    color: var(--admin-green);
                    font-size: 25px;
                }

                .admin-empty p {
                    color: var(--admin-muted);
                    font-size: 12px;
                }

                .admin-error {
                    background: #fff7f4;
                    border: 1px solid #f0d5ce;
                    padding: 25px;
                    text-align: center;
                    border-radius: 12px;
                }

                .admin-error strong {
                    color: #a34334;
                    font-size: 15px;
                }

                .admin-error p {
                    color: #93675e;
                    font-size: 12px;
                    margin: 9px 0 15px;
                }

                .admin-error button {
                    background: var(--admin-green);
                    color: white;
                    border: none;
                    border-radius: 7px;
                    padding: 10px 20px;
                    font-size: 12px;
                    font-weight: 700;
                }

                .admin-footer {
                    background: #0d3022;
                    color: white;
                    text-align: center;
                    padding: 38px 15px 25px;
                }

                .admin-footer h4 {
                    color: white;
                    font-size: 18px;
                    font-weight: 800;
                    margin-bottom: 10px;
                }

                .admin-footer p {
                    color: rgba(255,255,255,0.6);
                    font-size: 12px;
                    margin-bottom: 20px;
                }

                .admin-footer span {
                    color: rgba(255,255,255,0.45);
                    font-size: 10px;
                }

                @media (max-width: 767px) {
                    .admin-main {
                        padding: 40px 18px 60px;
                    }

                    .admin-heading {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .admin-refresh-btn {
                        width: 100%;
                    }

                    .admin-orders-section {
                        padding: 20px 14px;
                    }

                    .admin-orders-heading {
                        align-items: flex-start;
                    }

                    .admin-order-card-header,
                    .admin-customer-details,
                    .admin-products-section {
                        padding: 17px;
                    }
                }

                @media (max-width: 480px) {
                    .admin-brand {
                        font-size: 14px;
                    }

                    .admin-navbar .container-fluid {
                        padding-left: 13px !important;
                        padding-right: 13px !important;
                    }

                    .admin-navbar .d-flex {
                        gap: 10px !important;
                    }

                    .admin-logout-btn {
                        padding: 9px 11px;
                        font-size: 11px;
                    }

                    .admin-heading h1 {
                        font-size: 32px;
                    }

                    .admin-order-id {
                        max-width: 180px;
                    }

                    .admin-order-total strong {
                        font-size: 17px;
                    }

                    .admin-order-card-footer {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .admin-stat-card {
                        padding: 20px;
                    }
                }
            `}</style>

            {/* NAVBAR */}
            <nav className="navbar admin-navbar">
                <div className="container-fluid px-lg-4">
                    <Link className="navbar-brand admin-brand" to="/">
                        🥬 Palmurugan Fresh Vegetables
                    </Link>

                    <div className="d-flex align-items-center gap-3">
                        <Link
                            className="admin-nav-link d-none d-sm-inline"
                            to="/"
                        >
                            Home
                        </Link>

                        <Link
                            className="admin-nav-link d-none d-sm-inline"
                            to="/products"
                        >
                            Products
                        </Link>

                        <button
                            className="admin-logout-btn"
                            onClick={handleLogout}
                        >
                            <span>↪</span> Logout
                        </button>
                    </div>
                </div>
            </nav>

            {/* DASHBOARD */}
            <main className="admin-main container-fluid">

                <div className="admin-heading">
                    <div>
                        <span className="admin-eyebrow">
                            MANAGEMENT PANEL
                        </span>

                        <h1>Admin Dashboard</h1>

                        <p>
                            Manage customer orders and review order details.
                        </p>
                    </div>

                    <button
                        className="admin-refresh-btn"
                        onClick={fetchOrders}
                        disabled={loading}
                    >
                        <span>↻</span>
                        {loading ? "Loading..." : "Refresh Orders"}
                    </button>
                </div>

                {/* STATISTICS */}
                <div className="row g-4 admin-stats">

                    <div className="col-md-6 col-xl-4">
                        <div className="admin-stat-card">
                            <div className="admin-stat-icon">📦</div>

                            <div>
                                <p>Total Orders</p>
                                <h2>{orders.length}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xl-4">
                        <div className="admin-stat-card">
                            <div className="admin-stat-icon">₹</div>

                            <div>
                                <p>Total Order Value</p>
                                <h2>
                                    ₹{totalRevenue.toLocaleString("en-IN")}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xl-4">
                        <div className="admin-stat-card">
                            <div className="admin-stat-icon">🌿</div>

                            <div>
                                <p>Dashboard Status</p>

                                <h2 className="admin-status-text">
                                    {loading
                                        ? "Loading"
                                        : error
                                            ? "Error"
                                            : "Active"}
                                </h2>
                            </div>
                        </div>
                    </div>

                </div>

                {/* CUSTOMER ORDERS */}
                <section className="admin-orders-section">

                    <div className="admin-orders-heading">
                        <div>
                            <h2>Customer Orders</h2>

                            <p>
                                View customer information and purchased products.
                            </p>
                        </div>

                        <span className="admin-order-count">
                            {orders.length} Orders
                        </span>
                    </div>

                    {loading ? (

                        <div className="admin-message">
                            <div className="admin-loader"></div>
                            <p>Loading orders...</p>
                        </div>

                    ) : error ? (

                        <div className="admin-error">
                            <strong>Unable to load orders</strong>
                            <p>{error}</p>

                            <button onClick={fetchOrders}>
                                Try Again
                            </button>
                        </div>

                    ) : orders.length === 0 ? (

                        <div className="admin-empty">
                            <div>🛒</div>
                            <h3>No orders found</h3>

                            <p>
                                Customer orders will appear here after they place an order.
                            </p>
                        </div>

                    ) : (

                        <div className="admin-order-list">

                            {orders.map(order => (

                                <article
                                    className="admin-order-card"
                                    key={order._id}
                                >

                                    {/* ORDER HEADER */}
                                    <div className="admin-order-card-header">

                                        <div>
                                            <span className="admin-order-label">
                                                ORDER ID
                                            </span>

                                            <p className="admin-order-id">
                                                {order._id}
                                            </p>
                                        </div>

                                        <div className="admin-order-total">
                                            <span>Order Total</span>

                                            <strong>
                                                ₹{(
                                                    Number(order.total) || 0
                                                ).toLocaleString("en-IN")}
                                            </strong>
                                        </div>

                                    </div>

                                    {/* CUSTOMER INFORMATION */}
                                    <div className="admin-customer-details">

                                        <h3>Customer Information</h3>

                                        <div className="row g-3">

                                            <div className="col-md-6 col-xl-3">
                                                <span>Customer Name</span>
                                                <p>{order.name || "Not provided"}</p>
                                            </div>

                                            <div className="col-md-6 col-xl-3">
                                                <span>Mobile Number</span>
                                                <p>{order.mobile || "Not provided"}</p>
                                            </div>

                                            <div className="col-md-6 col-xl-3">
                                                <span>Email Address</span>
                                                <p>{order.email || "Not provided"}</p>
                                            </div>

                                            <div className="col-md-6 col-xl-3">
                                                <span>Delivery Address</span>
                                                <p>{order.address || "Not provided"}</p>
                                            </div>

                                        </div>

                                        {order.message && (
                                            <div className="admin-customer-message">
                                                <span>Customer Message</span>
                                                <p>{order.message}</p>
                                            </div>
                                        )}

                                    </div>

                                    {/* ORDERED PRODUCTS */}
                                    <div className="admin-products-section">

                                        <h3>Ordered Products</h3>

                                        {!order.products ||
                                        order.products.length === 0 ? (

                                            <p className="admin-no-products">
                                                No products listed for this order.
                                            </p>

                                        ) : (

                                            <div className="table-responsive">

                                                <table className="table admin-products-table">

                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Price</th>
                                                            <th>Quantity</th>
                                                            <th>Subtotal</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {order.products.map((item, index) => (

                                                            <tr key={item._id || index}>

                                                                <td>
                                                                    {item.name || "Product"}
                                                                </td>

                                                                <td>
                                                                    ₹{Number(item.price) || 0}
                                                                </td>

                                                                <td>
                                                                    <span className="admin-quantity">
                                                                        {Number(item.quantity) || 0}
                                                                    </span>
                                                                </td>

                                                                <td className="admin-subtotal">
                                                                    ₹{(
                                                                        (Number(item.price) || 0) *
                                                                        (Number(item.quantity) || 0)
                                                                    ).toLocaleString("en-IN")}
                                                                </td>

                                                            </tr>

                                                        ))}
                                                    </tbody>

                                                </table>

                                            </div>

                                        )}

                                    </div>

                                    {/* ORDER FOOTER */}
                                    <div className="admin-order-card-footer">

                                        <span>
                                            Thank you for choosing us 🌿
                                        </span>

                                        <strong>
                                            Total: ₹{(
                                                Number(order.total) || 0
                                            ).toLocaleString("en-IN")}
                                        </strong>

                                    </div>

                                </article>

                            ))}

                        </div>

                    )}

                </section>
            </main>

            {/* FOOTER */}
            <footer className="admin-footer">
                <h4>🥬 Palmurugan Fresh Vegetables</h4>

                <p>
                    Fresh Vegetables Delivered to Your Doorstep
                </p>

                <span>
                    © 2026 Palmurugan Fresh Vegetables. All Rights Reserved.
                </span>
            </footer>

        </div>
    );
}

export default Admin;
