import React, { useState } from "react";
import Header from "../header/Header";
import FeaturedBike from "../featured bikes/FeaturedBikes";
import BrowseBy from "../browse by/BrowseBy";
import Footer from "../footer/Footer";
import Carousel from "../carousel/HomepageCarousel";
import Searchbar from "../searchbar/Searchbar";
import Scooters from "../popular scooters/PopularScooters";
import GoGreen from "../banners/GoGreen";

const HomePage: React.FC = () => {

  const [search, setSearch] = useState("");

  return (
    <div className="container">

      {/* Sticky Header */}
      <Header search={search} setSearch={setSearch} />

      {/* Homepage Searchbar */}
      <Searchbar />

      {/* Homepage Carousel */}
      <Carousel />

      {/* Featured Bikes */}
      <FeaturedBike />

      {/* Browse by */}
      <BrowseBy />

      {/* Go Green Banner */}
      <GoGreen />

      {/* Popular Scooters */}
      <Scooters />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default HomePage;
