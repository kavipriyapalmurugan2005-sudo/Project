
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./myproject1/index.jsx";
import About from "./myproject1/about.jsx";
import Products from "./myproject1/products.jsx";
import Contact from "./myproject1/contact.jsx";
import Cart from "./myproject1/cart.jsx";
import Admin from "./myproject1/admin.jsx";
import AdminLogin from "./myproject1/adminLogin.jsx";
import ProtectedAdmin from "./myproject1/ProtectedAdmin.jsx";
import usePageMotion from "./myproject1/usePageMotion.js";

function App() {
    usePageMotion();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                    path="/admin/dashboard"
                    element={
                        <ProtectedAdmin>
                            <Admin />
                        </ProtectedAdmin>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
