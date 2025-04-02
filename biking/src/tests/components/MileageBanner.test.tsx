import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MileageBanner from "../../components/banners/MileageBanner";
import "@testing-library/jest-dom";

const mockBikeMileage = {
  id: 1,
  name: "Yamaha R15",
  mileageARAI: "35 kmpl",
};

describe("test should render Mileage banner successfully", () => {
  it("test should render all elements of Mileage banner successfully", () => {
    render(
      <MileageBanner
        id={mockBikeMileage.id}
        name={mockBikeMileage.name}
        mileageARAI={mockBikeMileage.mileageARAI}
      />
    );

    expect(screen.getByAltText("petrol-pump-logo")).toBeInTheDocument();
    expect(
      screen.getAllByRole("button").length
    ).toBeGreaterThanOrEqual(5);
  });
});
