import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import KeySpecs from '../../components/bike details/KeySpecs';
import '@testing-library/jest-dom';

const mockBike = {
    id: 1,
    name: "Yamaha R15",
    engineCapacity: "155 cc",
    mileageARAI: "35 kmpl",
    fuelTankCapactiy: "11 litres",
    kerbWeight: "160 kg",
    power: "40 ps",
    torque: "40 nm"
}

describe("test should render key specs component successfully", () => {
    it("test should render every element of key specs component successfully", () => {
        render(<KeySpecs id={mockBike.id} name={mockBike.name} engineCapacity={mockBike.engineCapacity} mileageARAI={mockBike.mileageARAI} fuelTankCapacity={mockBike.fuelTankCapactiy} kerbWeight={mockBike.kerbWeight} power={mockBike.power} torque={mockBike.torque} />)

        expect(screen.queryByTestId("key-specs")).toBeInTheDocument();
        expect(screen.getAllByRole("link").length).toEqual(1);
        expect(screen.getAllByRole("table").length).toEqual(1);
    });
});