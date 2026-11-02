
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./myproject1/index";
import About from "./myproject1/about";
import Products from "./myproject1/products";
import Contact from "./myproject1/contact";
import Cart from "./myproject1/cart";
import Admin from "./myproject1/admin";
import AdminLogin from "./myproject1/adminLogin";
import ProtectedAdmin from "./myproject1/ProtectedAdmin";

function App() {
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
