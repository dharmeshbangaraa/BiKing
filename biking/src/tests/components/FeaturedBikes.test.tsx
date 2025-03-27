import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeaturedBike from "../../components/featured bikes/FeaturedBikes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("test should render Featured Bikes component successfully", () => {
  it("test should display all elements correctly", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeaturedBike />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getAllByRole("tab")).toHaveLength(4);
    expect(screen.getByRole("tab", { name: "sport" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "cruiser" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "electric" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "adventure" })).toBeInTheDocument();
  });
});
