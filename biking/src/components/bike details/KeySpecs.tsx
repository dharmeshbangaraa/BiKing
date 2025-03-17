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
                        >
                            Key Specs
                        </Typography>
                    </div>
                    <div className="flex mt-2">
                        <table className="border-1 w-full bg-gray-50 text-base">
                            <tr>
                                <td className="border-b-1 p-2 font-semibold">Engine Capacity</td>
                                <td className="border-b-1 p-2 font-bold">450 cc</td>
                            </tr>
                            <tr>
                                <td className="border-b-1 p-2 font-semibold">Mileage - ARAI</td>
                                <td className="border-b-1 p-2 font-bold">25 kmpml</td>
                            </tr>
                            <tr>
                                <td className="border-b-1 p-2 font-semibold">Fuel Tank Capacity</td>
                                <td className="border-b-1 p-2 font-bold">17.5 litres</td>
                            </tr>
                            <tr>
                                <td className="border-b-1 p-2 font-semibold">Kerb Weight</td>
                                <td className="border-b-1 p-2 font-bold">220 kg</td>
                            </tr>
                            <tr>
                                <td className="border-b-1 p-2 font-semibold">Power</td>
                                <td className="border-b-1 p-2 font-bold">40 ps</td>
                            </tr>
                            <tr>
                                <td className="border-b-1 p-2 font-semibold">Torque</td>
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
                        >
                            Key Features
                        </Typography>
                    </div>
                    <div className="flex mt-2">
                        <table className="border-1 w-full bg-gray-50 text-base">
                            <tr>
                                <td className="border-b-1 p-2 font-semibold">Instrument Console</td>
                                <td className="border-b-1 p-2 font-bold">Digital</td>
                            </tr>
                            <tr>
                                <td className="border-b-1 p-2 font-semibold">GPS & Navigation</td>
                                <td className="border-b-1 p-2 font-bold">Yes</td>
                            </tr>
                            <tr>
                                <td className="border-b-1 p-2 font-semibold">Speedometer</td>
                                <td className="border-b-1 p-2 font-bold">Digital</td>
                            </tr>
                            <tr>
                                <td className="border-b-1 p-2 font-semibold">Odometer</td>
                                <td className="border-b-1 p-2 font-bold">Digital</td>
                            </tr>
                            <tr>
                                <td className="border-b-1 p-2 font-semibold">Fuel Guage</td>
                                <td className="border-b-1 p-2 font-bold">Yes</td>
                            </tr>
                            <tr>
                                <td className="border-b-1 p-2 font-semibold">Gear Indicator</td>
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