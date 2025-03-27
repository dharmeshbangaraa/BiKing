interface IBike {
  id: number | undefined;
  name: string | undefined;
  price: string | undefined;
  image: string | undefined;
  category: string | undefined;
  exPrice: string | undefined;
  onRoadPrice: string | undefined;
  engineCapacity: string | undefined;
  mileageARAI: string | undefined;
  brand: string | undefined;
  fuelTankCapacity: string;
  kerbWeight: string;
  power: string;
  torque: string;
  instrumentConsole: string | undefined;
  gps: string | undefined;
  speedometer: string | undefined;
  odometer: string | undefined;
  fuelGauge: string | undefined;
  gearIndicator: string | undefined;
}

export default IBike;
