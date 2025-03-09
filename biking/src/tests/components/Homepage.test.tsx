import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from '../../components/carousel/HomepageCarousel';
import Searchbar from '../../components/searchbar/Searchbar';
import FeaturedBike from "../../components/featured bikes/FeaturedBikes";
import GoGreen from "../../components/banners/GoGreen";


describe('test should render every component of homepage successfully', () => {
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