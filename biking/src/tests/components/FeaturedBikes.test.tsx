import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import FeaturedBike from '../../components/featured bikes/FeaturedBikes';

describe('test should render Featured Bikes component successfully', () => {
    it('test should display all elements correctly', () => {
        render(<FeaturedBike />)

        expect(screen.getAllByRole('tab')).toHaveLength(4);
        expect(screen.getAllByRole("button", { name: "check out" })).toHaveLength(3);
        expect(screen.getByRole('tab', {name: "Sport"})).toBeInTheDocument();
        expect(screen.getByRole('tab', {name: "Cruiser"})).toBeInTheDocument();
        expect(screen.getByRole('tab', {name: "Electric"})).toBeInTheDocument();
        expect(screen.getByRole('tab', {name: "Adventure"})).toBeInTheDocument();

    });
})