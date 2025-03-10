import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Searchbar from '../../components/searchbar/Searchbar';
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
        expect(screen.getAllByRole('button', { name: "check out" }).length).toBeGreaterThan(0);

    });

    it('test should render searchbar successfully', () => {
        render(<Searchbar />)

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('paragraph')).toBeInTheDocument();
    });

});