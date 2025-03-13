import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Searchbar from '../../components/searchbar/Searchbar';
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../../components/homepage/Homepage";

describe('test should render every component of homepage successfully', () => {
    it('test should render homepage component successfully', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        )
            
        expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
        expect(screen.getByText("Let's search your DREAM bike together!")).toBeInTheDocument();
        expect(screen.getAllByRole('textbox')).toHaveLength(1);
        expect(screen.getByText('Featured Bikes')).toBeInTheDocument();
        expect(screen.getByText('Browse By')).toBeInTheDocument();
        expect(screen.getByText('Explore wide range of electric Bikes and Scooters!')).toBeInTheDocument();
        expect(screen.getByText('Popular Scooters')).toBeInTheDocument();
        expect(screen.getAllByRole('tab')).toHaveLength(9);
        expect(screen.getAllByRole('button', { name: "check out" }).length).toBeGreaterThan(0);

    });

    it('test should render searchbar successfully', () => {
        render(<Searchbar />)

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('paragraph')).toBeInTheDocument();
    });

});