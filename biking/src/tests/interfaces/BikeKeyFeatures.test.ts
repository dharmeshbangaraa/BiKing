import { describe, expect, test } from "vitest";
import IBikeKeyFeatures from "../../interfaces/BikeKeyFeatures";

describe("IBikeKeyFeatures Interface", () => {
  test("Valid object should match IBikeKeyFeatures structure", () => {
    const bikeFeatures: IBikeKeyFeatures = {
      id: 1,
      name: "Sport Bike",
      instrumentConsole: "Digital",
      gps: "Yes",
      speedometer: "Analog",
      odometer: "Digital",
      fuelGauge: "Digital",
      gearIndicator: "Yes",
    };

    expect(bikeFeatures).toBeDefined();
    expect(typeof bikeFeatures.id).toBe("number");
    expect(typeof bikeFeatures.name).toBe("string");
    expect(typeof bikeFeatures.instrumentConsole).toBe("string");
    expect(typeof bikeFeatures.gps).toBe("string");
    expect(typeof bikeFeatures.speedometer).toBe("string");
    expect(typeof bikeFeatures.odometer).toBe("string");
    expect(typeof bikeFeatures.fuelGauge).toBe("string");
    expect(typeof bikeFeatures.gearIndicator).toBe("string");
  });

  test("Invalid object should not match IBikeKeyFeatures structure", () => {
    const invalidBikeFeatures = {
      id: "wrongType",
      name: null,
      instrumentConsole: 123,
      gps: true,
      speedometer: {},
      odometer: [],
      fuelGauge: undefined,
      gearIndicator: () => {},
    };

    expect(typeof invalidBikeFeatures.id).not.toBe("number");
    expect(typeof invalidBikeFeatures.name).not.toBe("string");
    expect(typeof invalidBikeFeatures.instrumentConsole).not.toBe("string");
    expect(typeof invalidBikeFeatures.gps).not.toBe("string");
    expect(typeof invalidBikeFeatures.speedometer).not.toBe("string");
    expect(typeof invalidBikeFeatures.odometer).not.toBe("string");
    expect(typeof invalidBikeFeatures.fuelGauge).not.toBe("string");
    expect(typeof invalidBikeFeatures.gearIndicator).not.toBe("string");
  });
});
