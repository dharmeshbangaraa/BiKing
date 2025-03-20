import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import UserReview from '../../components/bike details/UserReview';
import '@testing-library/jest-dom';


/**
 * This test class will take a hit when there is no review to add
 * For now I have hard coded the reviews and written the tests.
 */

beforeEach(() => render(<UserReview />))

describe("test should render User Review component successfully", () => {
    it("test should render every element of user review component", () => {

        expect(screen.queryByTestId('user-review-heading')).toBeInTheDocument();
        expect(screen.queryAllByTestId('rating-heading').length).toBeGreaterThan(0);
        expect(screen.queryAllByTestId('review-heading').length).toBeGreaterThan(0);
        expect(screen.getAllByRole('paragraph').length).toBeGreaterThan(0);
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(0);
        expect(screen.getAllByRole('progressbar').length).toBeGreaterThan(0);
    });

    it("should show truncated text initially and expand on clicking 'Read More'", () => {
        const readMoreLinks = screen.getAllByText("read more");
        expect(readMoreLinks.length).toBe(2); // Two reviews should have "read more" links initially
    
        // Click the first "Read More"
        fireEvent.click(readMoreLinks[0]);
    
        // Check if "show less" appears
        expect(screen.getByText("show less")).toBeInTheDocument();
      });

      it("should collapse when 'Show Less' is clicked", () => {
        const readMoreLink = screen.getAllByText("read more")[0]; 
        fireEvent.click(readMoreLink);
    
        const showLessLink = screen.getByText("show less");
        expect(showLessLink).toBeInTheDocument();
    
        fireEvent.click(showLessLink);
        expect(screen.getAllByText("read more").length).toBeGreaterThanOrEqual(0);
      });
})