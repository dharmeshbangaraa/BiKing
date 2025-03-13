import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useState } from "react";

const Layout = () => {
    const [search, setSearch] = useState("");

    return (
        <div>
            {/* Header with search functionality */}
            <Header search={search} setSearch={setSearch} />

            {/* Renders the current route (Homepage, BikeDetails, etc.) */}
            <Outlet data-testid="outlet" />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
