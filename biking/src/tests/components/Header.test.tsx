import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import Header from '../../components/header/Header';
import { useState } from 'react';
import '@testing-library/jest-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

describe("test should render Header component successfully", () => {
    it("test should render all elements of Header components", () => {

        const MockHeader = () => {
            const [search, setSearch] = useState("Header");
            return <Header search={search} setSearch={setSearch} />;
        };

        render(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MockHeader />} />
                </Routes>
            </BrowserRouter>
        );

        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getAllByRole('button').length).toEqual(3);
    });
});