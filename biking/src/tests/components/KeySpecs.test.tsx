import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import KeySpecs from '../../components/bike details/KeySpecs';
import '@testing-library/jest-dom';


describe("test should render key specs component successfully", () => {
    it("test should render every element of key specs component successfully", () => {
        render(<KeySpecs />)

        expect(screen.queryByTestId("key-features")).toBeInTheDocument();
        expect(screen.queryByTestId("key-specs")).toBeInTheDocument();
        expect(screen.getAllByRole("link").length).toEqual(2);
        expect(screen.getAllByRole("table").length).toEqual(2);
    });
});