import { render, screen } from "@testing-library/react";
import GoGreen from "../../components/banners/GoGreen"; // Adjust path if needed
import "@testing-library/jest-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";


describe("test should render GoGreen component successfully", () => {
    it("test should render banner title successfully", () => {
        const theme = createTheme();

        render(
            <ThemeProvider theme={theme}>
                <GoGreen />
            </ThemeProvider>
        );

        expect(screen.getByText("Explore wide range of electric Bikes and Scooters!")).toBeInTheDocument();
        expect(screen.getByAltText("go-green-logo")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Electric Bike" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Electric Scooter" })).toBeInTheDocument();
    });
});
