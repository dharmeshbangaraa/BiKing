import React, { useState } from "react";
import Header from "../header/Header";
import FeaturedBike from "../featured bikes/FeaturedBikes";

const HomePage: React.FC = () => {

  const [search, setSearch] = useState("");

  return (
    <div className="container">

      {/* Sticky Header */}
      <Header search={search} setSearch={setSearch} />

      {/* Featured Bikes */}
      <FeaturedBike />

    </div>
  );
};

export default HomePage;
