import { Typography } from "@mui/material";


const KeySpecs: React.FC = () => {

    return (

        <div>
            <div className="lg:flex">
                <div className="flex-1/2">
                    <div>
                        <Typography
                            marginTop={2}
                            fontSize={20}
                            fontWeight={"bold"}
                        >
                            Key Specs
                        </Typography>
                    </div>
                    <div className="flex">
                        <div className="flex-1/2">
                            <ul className="border-1">
                                <li className="border-b-1">Engine Capacity</li>
                                <li className="border-b-1">Mileage - ARAI</li>
                                <li className="border-b-1">Fuel Tank Capacity</li>
                                <li className="border-b-1">Kerb Weight</li>
                                <li className="border-b-1">Power</li>
                                <li className="border-b-1">Torque</li>
                            </ul>
                        </div>
                        <div className="flex-1/2">
                            <ul className="font-bold border-1">
                                <li className="border-b-1">450 cc</li>
                                <li className="border-b-1">25 kmpl</li>
                                <li className="border-b-1">17.5 litres</li>
                                <li className="border-b-1">220 kg</li>
                                <li className="border-b-1">40 ps</li>
                                <li className="border-b-1">40 nm</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-1/2">
                    <div className="lg:flex-1/2">
                        <Typography
                            marginTop={2}
                            fontSize={20}
                            fontWeight={"bold"}
                        >
                            Key Features
                        </Typography>
                    </div>
                    <div className="flex">
                        <div className="flex-1/2 border-1">
                            <ul>
                                <li className="border-b-1">Instrument Console</li>
                                <li className="border-b-1">GPS & Navigation</li>
                                <li className="border-b-1">Speedometer</li>
                                <li className="border-b-1">Odometer</li>
                                <li className="border-b-1">Fuel Guage</li>
                                <li className="border-b-1">Gear Indicator</li>
                            </ul>
                        </div>
                        <div className="flex-1/2 border-1">
                            <ul className="font-bold">
                                <li className="border-b-1">Digital</li>
                                <li className="border-b-1">Yes</li>
                                <li className="border-b-1">Digital</li>
                                <li className="border-b-1">Digital</li>
                                <li className="border-b-1">Yes</li>
                                <li className="border-b-1">Yes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );

}

export default KeySpecs;