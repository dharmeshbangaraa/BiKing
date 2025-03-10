import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from '../../components/carousel/HomepageCarousel';
import Searchbar from '../../components/searchbar/Searchbar';
import FeaturedBike from "../../components/featured bikes/FeaturedBikes";
import GoGreen from "../../components/banners/GoGreen";
import Homepage from "../../components/homepage/Homepage";


describe('test should render every component of homepage successfully', () => {
    it('test should render homepage component successfully', () => {
        render(<Homepage />)

        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(screen.getByText("Let's search your DREAM bike together!"));
        expect(screen.getAllByRole('textbox')).toHaveLength(2);
        expect(screen.getByText('Featured Bikes')).toBeInTheDocument();
        expect(screen.getByText('Browse By')).toBeInTheDocument();
        expect(screen.getByText('Explore wide range of electric Bikes and Scooters!')).toBeInTheDocument();
        expect(screen.getByText('Popular Scooters')).toBeInTheDocument();
        expect(screen.getByText('Popular Brands')).toBeInTheDocument();
        expect(screen.getByText('Trending Bikes')).toBeInTheDocument();
        expect(screen.getByText('Upcoming Bikes')).toBeInTheDocument();
        expect(screen.getAllByRole('tab')).toHaveLength(9);
        expect(screen.getAllByRole('button', {name: "check out"}).length).toBeGreaterThan(0);

    });

    it('test should render carousel successfully', () => {
        render(<Carousel />)

        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('test should render searchbar successfully', () => {
        render(<Searchbar />)

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('paragraph')).toBeInTheDocument();
    });

    it('test should render featured bike component successfully', () => {
        render(<FeaturedBike />)

        expect(screen.getAllByRole('tab')).toHaveLength(4);
        expect(screen.getAllByRole("button", { name: "check out" })).toHaveLength(3);
        // expect(screen.getByRole('tab', {name: "Sport"})).toBeInTheDocument();
    });

    it('test should render GoGreen banner successfully', () => {
        render(<GoGreen />)

        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByRole('paragraph')).toBeInTheDocument();
        expect(screen.getAllByRole('button')).toHaveLength(2);
    });

});