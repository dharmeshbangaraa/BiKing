import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import UserReviewSummary from "../../components/bike details/UserReviewSummary";
import "@testing-library/jest-dom";

const mockBikeReviewSummary = {
  id: 1,
  name: "Yamaha R15",
};

describe("test should render user review summary component successfully", () => {
  it("test should render all elements of the user review summary component successfully", () => {
    render(
      <UserReviewSummary
        id={mockBikeReviewSummary.id}
        name={mockBikeReviewSummary.name}
      />
    );

    expect(screen.getAllByRole("heading").length).toEqual(6);
    expect(
      screen.queryByTestId("user-review-summary-heading")
    ).toBeInTheDocument();
    expect(screen.getAllByRole("progressbar").length).toEqual(6);
  });
});
