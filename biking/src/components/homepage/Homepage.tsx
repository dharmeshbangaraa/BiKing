import React, { useState } from "react";
import Header from "../header/Header";
import FeaturedBike from "../featured bikes/FeaturedBikes";
import BrowseBy from "../browse by/BrowseBy";
import Footer from "../footer/Footer";

const HomePage: React.FC = () => {

  const [search, setSearch] = useState("");

  return (
    <div className="container">

      {/* Sticky Header */}
      <Header search={search} setSearch={setSearch} />

      {/* Featured Bikes */}
      <FeaturedBike />

      {/* Browse by */}
      <BrowseBy />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default HomePage;
