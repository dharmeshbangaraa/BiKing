import FeaturedBike from "../featured bikes/FeaturedBikes";
import BrowseBy from "../browse by/BrowseBy";
import Carousel from "../carousel/HomepageCarousel";
import Searchbar from "../searchbar/Searchbar";
import Scooters from "../popular scooters/PopularScooters";
import GoGreen from "../banners/GoGreen";

const HomePage: React.FC = () => {

  return (
    <div data-testid="homepage">

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

    </div>
  );
};

export default HomePage;
