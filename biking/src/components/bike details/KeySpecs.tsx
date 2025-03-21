import { Typography } from "@mui/material";


const KeySpecs: React.FC = () => {

    return (

        <div>
            <div className="lg:flex">
                <div className="flex-1/2 p-1">
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
                        <table className="border-1 w-full bg-gray-50 text-base">
                            <tr>
                                <th className="border-b-1 p-2 font-semibold text-left">Engine Capacity</th>
                                <td className="border-b-1 p-2 font-bold">450 cc</td>
                            </tr>
                            <tr>
                                <th className="border-b-1 p-2 font-semibold text-left">Mileage - ARAI</th>
                                <td className="border-b-1 p-2 font-bold">25 kmpml</td>
                            </tr>
                            <tr>
                                <th className="border-b-1 p-2 font-semibold text-left">Fuel Tank Capacity</th>
                                <td className="border-b-1 p-2 font-bold">17.5 litres</td>
                            </tr>
                            <tr>
                                <th className="border-b-1 p-2 font-semibold text-left">Kerb Weight</th>
                                <td className="border-b-1 p-2 font-bold">220 kg</td>
                            </tr>
                            <tr>
                                <th className="border-b-1 p-2 font-semibold text-left">Power</th>
                                <td className="border-b-1 p-2 font-bold">40 ps</td>
                            </tr>
                            <tr>
                                <th className="border-b-1 p-2 font-semibold text-left">Torque</th>
                                <td className="border-b-1 p-2 font-bold">40 nm</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <a href="#" className="text-blue-800 font-semibold p-1">view more</a>
                    </div>
                </div>
                <div className="flex-1/2 p-1">
                    <div className="lg:flex-1/2">
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
                        <table className="border-1 w-full bg-gray-50 text-base">
                            <tr>
                                <th className="border-b-1 p-2 font-semibold text-left">Instrument Console</th>
                                <td className="border-b-1 p-2 font-bold">Digital</td>
                            </tr>
                            <tr>
                                <th className="border-b-1 p-2 font-semibold text-left">GPS & Navigation</th>
                                <td className="border-b-1 p-2 font-bold">Yes</td>
                            </tr>
                            <tr>
                                <th className="border-b-1 p-2 font-semibold text-left">Speedometer</th>
                                <td className="border-b-1 p-2 font-bold">Digital</td>
                            </tr>
                            <tr>
                                <th className="border-b-1 p-2 font-semibold text-left">Odometer</th>
                                <td className="border-b-1 p-2 font-bold">Digital</td>
                            </tr>
                            <tr>
                                <th className="border-b-1 p-2 font-semibold text-left">Fuel Guage</th>
                                <td className="border-b-1 p-2 font-bold">Yes</td>
                            </tr>
                            <tr>
                                <th className="border-b-1 p-2 font-semibold text-left">Gear Indicator</th>
                                <td className="border-b-1 p-2 font-bold">Yes</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <a href="#" className="text-blue-800 font-semibold p-1">view more</a>
                    </div>
                </div>
            </div>

        </div>

    );

}

export default KeySpecs;