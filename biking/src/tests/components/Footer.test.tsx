import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '../../components/footer/Footer'
import '@testing-library/jest-dom'


describe("test should render Footer component successfully", () => {
    it("test should render all elements of the footer component", () => {
        render(<Footer />)

        expect(screen.getByText("Popular Brands")).toBeInTheDocument();
        expect(screen.getByText("Trending Bikes")).toBeInTheDocument();
        expect(screen.getByText("Upcoming Bikes")).toBeInTheDocument();
        expect(screen.getByText("© 2025 BiKing.com All rights reserved.")).toBeInTheDocument();
    })
})