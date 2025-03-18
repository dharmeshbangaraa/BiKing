import { render, screen } from "@testing-library/react";
import { describe, expect, it  } from "vitest";
import UserReviewSummary from "../../components/bike details/UserReviewSummary";
import "@testing-library/jest-dom";

describe('test should render user review summary component successfully', () => {
    it('test should render all elements of the user review summary component successfully', () => {
        render(<UserReviewSummary />)

        expect(screen.getAllByRole('heading').length).toEqual(6);
        expect(screen.queryByTestId('user-review-summary-heading')).toBeInTheDocument();
        expect(screen.getAllByRole('progressbar').length).toEqual(6);
    })
})