import IBike from "../../interfaces/Bike";

const validBike: IBike = {
  id: 1,
  name: "Yamaha R15",
  price: "₹1,80,000",
  image: "https://example.com/r15.jpg",
  category: "Sport",
  exPrice: "₹1,70,000",
  onRoadPrice: "₹1,95,000",
  engineCapacity: "155cc",
  mileageARAI: "40 kmpl",
  brand: "Yamaha",
  fuelTankCapacity: "11L",
  kerbWeight: "142kg",
  power: "18.4 PS",
  torque: "14.2 Nm",
  instrumentConsole: "Digital",
  gps: "No",
  speedometer: "Digital",
  odometer: "Digital",
  fuelGauge: "Yes",
  gearIndicator: "Yes",
};

describe("IBike Interface Validation", () => {
  test("Valid bike object should match IBike structure", () => {
    expect(validBike).toMatchObject<IBike>({
      id: expect.any(Number),
      name: expect.any(String),
      price: expect.any(String),
      image: expect.any(String),
      category: expect.any(String),
      exPrice: expect.any(String),
      onRoadPrice: expect.any(String),
      engineCapacity: expect.any(String),
      mileageARAI: expect.any(String),
      brand: expect.any(String),
      fuelTankCapacity: expect.any(String),
      kerbWeight: expect.any(String),
      power: expect.any(String),
      torque: expect.any(String),
      instrumentConsole: expect.any(String),
      gps: expect.any(String),
      speedometer: expect.any(String),
      odometer: expect.any(String),
      fuelGauge: expect.any(String),
      gearIndicator: expect.any(String),
    });
  });

  test("Invalid bike object should fail", () => {
    const invalidBike = {
      id: "invalid", // Should be number or undefined
      name: null, // Should be string or undefined
    };

    expect(() => {
      expect(invalidBike).toMatchObject<IBike>(validBike);
    }).toThrow();
  });
});
