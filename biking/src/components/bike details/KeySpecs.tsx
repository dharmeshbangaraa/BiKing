import { Typography } from "@mui/material";
import BikeKeySpecs from "../../interfaces/BikeKeySpecs";

const KeySpecs: React.FC<BikeKeySpecs> = ({
  engineCapacity,
  mileageARAI,
  fuelTankCapacity,
  kerbWeight,
  power,
  torque,
}) => {
  return (
    <div className="md:mr-2 ml-1">
      <div>
        <Typography
          marginTop={2}
          fontSize={20}
          fontWeight={"bold"}
          data-testid="key-specs"
        >
          Key Specs
        </Typography>
      </div>
      <div className="flex mt-2">
        <table className="border-1 w-[500px] bg-gray-50 text-base table-fixed">
          <tbody>
            <tr>
              <th className="border border-gray-300 p-2 font-semibold text-left w-1/2">
                Engine Capacity
              </th>
              <td className="border border-gray-300 p-2 font-bold text-left w-1/3">
                {engineCapacity}
              </td>
            </tr>
            <tr>
              <th className="border border-gray-300 p-2 font-semibold text-left">
                Mileage - ARAI
              </th>
              <td className="border border-gray-300 p-2 font-bold text-left">
                {mileageARAI}
              </td>
            </tr>
            <tr>
              <th className="border border-gray-300 p-2 font-semibold text-left">
                Fuel Tank Capacity
              </th>
              <td className="border border-gray-300 p-2 font-bold text-left">
                {fuelTankCapacity}
              </td>
            </tr>
            <tr>
              <th className="border border-gray-300 p-2 font-semibold text-left">
                Kerb Weight
              </th>
              <td className="border border-gray-300 p-2 font-bold text-left">
                {kerbWeight}
              </td>
            </tr>
            <tr>
              <th className="border border-gray-300 p-2 font-semibold text-left">
                Power
              </th>
              <td className="border border-gray-300 p-2 font-bold text-left">
                {power}
              </td>
            </tr>
            <tr>
              <th className="border border-gray-300 p-2 font-semibold text-left">
                Torque
              </th>
              <td className="border border-gray-300 p-2 font-bold text-left">
                {torque}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <a href="#" className="text-blue-800 font-semibold p-1">
          view more
        </a>
      </div>
    </div>
  );
};

export default KeySpecs;
