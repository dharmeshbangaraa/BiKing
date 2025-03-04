import React, { useState } from "react";
import Header from "../header/Header";
import FeaturedBike from "../featured bikes/FeaturedBikes";
import BrowseBy from "../browse by/BrowseBy";
import Carousel from "../carousel/HomepageCarousel";
import Searchbar from "../searchbar/Searchbar";
import Scooters from "../popular scooters/PopularScooters";
import GoGreen from "../banners/GoGreen";
import Footer from "../footer/Footer";

const HomePage: React.FC = () => {

  const [search, setSearch] = useState("");

  return (
    <div>

      {/* Sticky Header */}
      <Header search={search} setSearch={setSearch} />

      {/* Homepage Carousel */}
      <Carousel />

      {/* Homepage Searchbar */}
      <Searchbar />

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
