import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import BikeList from "../../components/bike list/BikeList";
import "@testing-library/jest-dom";

const mockNavigate = vi.fn();

// Mock `useParams` and `useNavigate`
vi.mock("react-router-dom", async () => {
  const actual = await import("react-router-dom");
  return {
    ...actual,
    useParams: () => ({ brand: "Royal Enfield" }),
    useNavigate: () => mockNavigate,
  };
});

// Mock API response
const mockBikes = [
  {
    id: 1,
    name: "Classic 350",
    image: "https://example.com/classic350.jpg",
    onRoadPrice: "2,15,000",
  },
  {
    id: 2,
    name: "Meteor 650",
    image: "https://example.com/meteor650.jpg",
    onRoadPrice: "3,63,900",
  },
];

// Mock fetch function
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockBikes),
  })
) as unknown as jest.Mock; // ❌ Remove this if using Vitest

describe("BikeList Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the brand name from useParams", () => {
    render(
      <MemoryRouter>
        <BikeList />
      </MemoryRouter>
    );

    expect(screen.getByText("Royal Enfield Bikes")).toBeInTheDocument();
  });

  it("fetches and displays bike data", async () => {
    render(
      <MemoryRouter>
        <BikeList />
      </MemoryRouter>
    );

    // Wait for bikes to be fetched and rendered
    await waitFor(() => {
      expect(screen.getByText("Classic 350")).toBeInTheDocument();
      expect(screen.getByText("Meteor 650")).toBeInTheDocument();
    });

    // Check if the images and prices are displayed correctly
    expect(screen.getByAltText("Classic 350")).toHaveAttribute(
      "src",
      "https://example.com/classic350.jpg"
    );
    expect(screen.getByAltText("Meteor 650")).toHaveAttribute(
      "src",
      "https://example.com/meteor650.jpg"
    );

    expect(screen.getByText("₹ 2,15,000")).toBeInTheDocument();
    expect(screen.getByText("₹ 3,63,900")).toBeInTheDocument();
  });

  it("navigates to checkout when clicking the button", async () => {
    render(
      <MemoryRouter>
        <BikeList />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByText("Classic 350"));

    const checkoutButton = screen.getAllByRole("button", {
      name: /check out/i,
    })[0];

    await userEvent.click(checkoutButton);

    expect(mockNavigate).toHaveBeenCalledWith("checkout/Classic 350");
  });
});
