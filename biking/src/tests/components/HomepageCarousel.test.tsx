import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from '../../components/carousel/HomepageCarousel';
import { describe, it, expect, vi } from "vitest";

vi.mock("react-slick", () => ({
    default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("test should render carousel component", () => {

    it("test should assert image tag in the carousel", () => {
        render(<Carousel />);

        const carouselImage = screen.getAllByRole('img');
        expect(carouselImage.length).toEqual(2);
        expect(carouselImage[0]).toBeInTheDocument();
        expect(carouselImage[1]).toBeInTheDocument();

    })

    it("test should assert all images in the carousel", () => {
        render(<Carousel />);

        expect(screen.getByAltText("Slide 1")).toBeInTheDocument();
        expect(screen.getByAltText("Slide 2")).toBeInTheDocument();
    });

});
