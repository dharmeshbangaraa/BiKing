import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect } from 'vitest';
import UserReview from '../../components/bike details/UserReview';
import '@testing-library/jest-dom';

describe("test should render User Review component successfully", () => {
    it("test should render every element of user review component", async () => {
        render(<UserReview />)

        expect(screen.queryByTestId('user-review-heading')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryAllByTestId('rating-heading').length).toBeGreaterThan(0);
            expect(screen.queryAllByTestId('review-heading').length).toBeGreaterThan(0);
            expect(screen.getAllByRole('paragraph').length).toBeGreaterThan(0);
            expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(0);
            expect(screen.getAllByRole('progressbar').length).toBeGreaterThan(0);
        })
    });
})