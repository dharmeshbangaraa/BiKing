import { describe, test, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BikeDetails from "../../components/bike details/BikeDetails";
import "@testing-library/jest-dom";

const mockBike = {
  id: 1,
  name: "Yamaha R15",
  image: "https://example.com/yamaha-r15.jpg",
  exPrice: "₹1,70,000",
  onRoadPrice: "₹1,90,000",
};

// Mock `fetch`
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockBike),
  })
) as unknown as jest.Mock;

describe("BikeDetails Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders bike image when data is available", async () => {
    render(
      <MemoryRouter initialEntries={["/bike/Yamaha R15"]}>
        <Routes>
          <Route path="/bike/:name" element={<BikeDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    // Ensure image is displayed correctly
    const image = screen.getByAltText("Yamaha R15");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockBike.image);
  });

  test("does not render image when bike data is undefined", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(undefined) })
    ) as unknown as jest.Mock;

    render(
      <MemoryRouter initialEntries={["/bike/Yamaha R15"]}>
        <Routes>
          <Route path="/bike/:name" element={<BikeDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    // Image should not be present
    expect(
      screen.queryByRole("img", { name: "Yamaha R15" })
    ).not.toBeInTheDocument();
  });

  test("renders alt text even if image is missing", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ ...mockBike, image: undefined }),
      })
    ) as unknown as jest.Mock;

    render(
      <MemoryRouter initialEntries={["/bike/Yamaha R15"]}>
        <Routes>
          <Route path="/bike/:name" element={<BikeDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    // The img tag should not have a src but should have an alt text
    // const image = screen.queryByAltText("Yamaha R15");
    // expect(image).not.toBeInTheDocument();
    // expect(image).not.toHaveAttribute("src");
    expect(screen.getByRole('img', {name: "Yamaha R15"})).toBeInTheDocument();
  });
});
