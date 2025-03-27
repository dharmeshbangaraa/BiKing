import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import BikeDetails from "../../components/bike details/BikeDetails";

describe("test should render Bike Details component successfully", () => {
  it("test should return all elements of Bike Details component", () => {
    render(<BikeDetails />);

    expect(screen.getByTestId("key-specs")).toBeInTheDocument();
    expect(screen.getByTestId("key-features")).toBeInTheDocument();
    expect(screen.getByAltText("petrol-pump-logo")).toBeInTheDocument();
    expect(screen.getAllByRole("button").length).toEqual(6);
    expect(screen.getAllByRole("paragraph").length).toBeGreaterThan(0);
  });
});
