import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import Layout from '../../components/main layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';

describe("test should render layout component successfully", () => {
    it("test should render all elements of layout component susccessfully", () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} />
                </Routes>
            </BrowserRouter>
        )

        expect(screen.queryByTestId('header')).toBeInTheDocument();
        expect(screen.queryByTestId('footer')).toBeInTheDocument();
    });
});