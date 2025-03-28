import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Searchbar from "../../components/searchbar/Searchbar";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../../components/homepage/Homepage";

describe("test should render every component of homepage successfully", () => {
  it("test should render homepage component successfully", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
    expect(
      screen.getByText("Let's search your DREAM bike together!")
    ).toBeInTheDocument();
    expect(screen.getAllByRole("textbox")).toHaveLength(1);
    expect(screen.getByText("Featured Bikes")).toBeInTheDocument();
    expect(screen.getByText("Browse By")).toBeInTheDocument();
    expect(
      screen.getByText("Explore wide range of electric Bikes and Scooters!")
    ).toBeInTheDocument();
    expect(screen.getByText("Popular Scooters")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(9);
  });

  it("test should render searchbar successfully", () => {
    render(<Searchbar />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
});
