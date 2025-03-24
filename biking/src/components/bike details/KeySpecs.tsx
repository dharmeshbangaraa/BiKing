import { Typography } from "@mui/material";


const KeySpecs: React.FC = () => {

    return (
        <div className="md:mr-2">
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
                            <th className="border border-gray-300 p-2 font-semibold text-left w-2/3">Engine Capacity</th>
                            <td className="border border-gray-300 p-2 font-bold text-left w-1/3">450 cc</td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-2 font-semibold text-left">Mileage - ARAI</th>
                            <td className="border border-gray-300 p-2 font-bold text-left">25 kmpl</td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-2 font-semibold text-left">Fuel Tank Capacity</th>
                            <td className="border border-gray-300 p-2 font-bold text-left">17.5 litres</td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-2 font-semibold text-left">Kerb Weight</th>
                            <td className="border border-gray-300 p-2 font-bold text-left">220 kg</td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-2 font-semibold text-left">Power</th>
                            <td className="border border-gray-300 p-2 font-bold text-left">40 ps</td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-2 font-semibold text-left">Torque</th>
                            <td className="border border-gray-300 p-2 font-bold text-left">40 nm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <a href="#" className="text-blue-800 font-semibold p-1">view more</a>
            </div>
        </div>
    );

}

export default KeySpecs;