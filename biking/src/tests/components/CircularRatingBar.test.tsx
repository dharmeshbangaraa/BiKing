import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CircularRatingBar from "../../components/utils/CircularRatingBar";
import "@testing-library/jest-dom";

describe('test should render circular rating bar component successfully', () => {
    it('test should render the circular rating icon successfully', () => {
        render(<CircularRatingBar />)

        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    })
})