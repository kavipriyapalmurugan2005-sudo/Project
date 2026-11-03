
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import usePageMotion from "./usePageMotion.js";

function AdminLogin() {
    usePageMotion();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3000/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Invalid username or password");
                return;
            }

            if (!data.token) {
                setError("Login token was not received from the server");
                return;
            }

            localStorage.setItem("adminToken", data.token);
            navigate("/admin/dashboard");
        } catch (err) {
            setError("Backend connection failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="admin-login-page">
            <nav className="admin-login-navbar">
                <Link to="/" className="admin-login-brand">
                    🥬 Palmurugan Fresh Vegetables
                </Link>

                <Link to="/" className="admin-login-home">
                    ← Back to Home
                </Link>
            </nav>

            <main className="admin-login-main">
                <div className="admin-login-decoration admin-login-decoration-one"></div>
                <div className="admin-login-decoration admin-login-decoration-two"></div>

                <div className="admin-login-card">
                    <div className="admin-login-icon">🔐</div>

                    <span className="admin-login-eyebrow">
                        SECURE ACCESS
                    </span>

                    <h1>Admin Login</h1>

                    <p className="admin-login-description">
                        Welcome back! Sign in to manage your store orders.
                    </p>

                    <form onSubmit={handleLogin}>
                        <div className="admin-login-field">
                            <label htmlFor="adminUsername">Username</label>
                            <input
                                id="adminUsername"
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                autoComplete="username"
                                required
                            />
                        </div>

                        <div className="admin-login-field">
                            <label htmlFor="adminPassword">Password</label>
                            <input
                                id="adminPassword"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                required
                            />
                        </div>

                        {error && (
                            <div className="admin-login-error" role="alert">
                                <span>⚠</span> {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="admin-login-button"
                            disabled={loading}
                        >
                            {loading ? "Signing in..." : "Sign In to Dashboard"}
                            {!loading && <span>→</span>}
                        </button>
                    </form>

                    <div className="admin-login-security">
                        <span>🛡️</span>
                        Authorized administrators only
                    </div>
                </div>
            </main>

            <footer className="admin-login-footer">
                © 2026 Palmurugan Fresh Vegetables. All Rights Reserved.
            </footer>
        </div>
    );
}

export default AdminLogin;
