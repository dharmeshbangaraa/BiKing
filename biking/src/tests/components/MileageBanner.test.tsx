import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MileageBanner from '../../components/banners/MileageBanner';
import '@testing-library/jest-dom';

describe("test should render Mileage banner successfully", () => {
    it("test should render all elements of Mileage banner successfully", () => {
        render(<MileageBanner />)

        expect(screen.getByAltText('petrol-pump-logo')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: "Mileage Calculator"})).toBeInTheDocument();
    });
})