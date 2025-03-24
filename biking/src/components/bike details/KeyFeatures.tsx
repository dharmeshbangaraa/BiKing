import { Typography } from "@mui/material";

const KeyFeatures: React.FC = () => {

    return (

        <div className="md:ml-2">
            <div>
                <Typography
                    marginTop={2}
                    fontSize={20}
                    fontWeight={"bold"}
                    data-testid="key-features"
                >
                    Key Features
                </Typography>
            </div>
            <div className="flex mt-2">
                <table className="border-1 w-[500px] bg-gray-50 text-base table-fixed">
                    <tbody>
                        <tr>
                            <th className="border border-gray-300 p-2 font-semibold text-left w-2/3">Instrument Console</th>
                            <td className="border border-gray-300 p-2 font-bold text-left w-1/3">Digital</td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-2 font-semibold text-left">GPS & Navigation</th>
                            <td className="border border-gray-300 p-2 font-bold text-left">Yes</td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-2 font-semibold text-left">Speedometer</th>
                            <td className="border border-gray-300 p-2 font-bold text-left">Digital</td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-2 font-semibold text-left">Odometer</th>
                            <td className="border border-gray-300 p-2 font-bold text-left">Digital</td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-2 font-semibold text-left">Fuel Gauge</th>
                            <td className="border border-gray-300 p-2 font-bold text-left">Yes</td>
                        </tr>
                        <tr>
                            <th className="border border-gray-300 p-2 font-semibold text-left">Gear Indicator</th>
                            <td className="border border-gray-300 p-2 font-bold text-left">Yes</td>
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

export default KeyFeatures;