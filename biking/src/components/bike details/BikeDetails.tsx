import React from "react";
import { Typography, Button } from "@mui/material";
import KeySpecs from "./KeySpecs"

const BikeDetails: React.FC = () => {

    return (
        <div className="lg:px-40 px-5">
            <div>
                <Typography
                    marginTop={2}
                    fontSize={24}
                    fontWeight={"bold"}
                >
                    Royal Enfield Himalayan 450
                </Typography>
            </div>
            <div className="lg:flex">
                <div className="flex-1/2">
                    <img className="w-fit h-fit mr-auto" src="/images/bikes/himalayan.jpg" alt="Royal Enfield Himlayan 450" height={350} width={350} />
                </div>
                <div className="flex-1/2">
                    <Typography
                        marginTop={2}
                        fontSize={20}
                        fontWeight={"bold"}
                    >
                        Royal Enfield Himalayan 450 On Road Price in Mumbai
                    </Typography>
                    <div className="flex mt-2">
                        <div className="flex-1/2 bg-gray-50">
                            <p>Ex-Showroom</p>
                            <p>RTO</p>
                            <p>Insurance</p>
                            <p>RSA + Extended Warranty</p>
                            <p>Others</p>
                        </div>
                        <div className="text-end bg-gray-50">
                            <p>₹ 9,00,000</p>
                            <p>₹ 9,000</p>
                            <p>₹ 5,000</p>
                            <p>₹ 3,000</p>
                            <p>₹ 1,000</p>
                        </div>
                    </div>
                    <hr className="mt-2" />
                    <div className="flex">
                        <div className="flex-1/2 mt-2">
                            <p className="font-bold">On Road Price in Mumbai</p>
                        </div>
                        <div className="mt-2">
                            <p className="font-bold">₹ 9,00,000</p>
                        </div>
                    </div>
                    <div className="flex mt-1">
                        <div className="flex-1/2 pr-1">
                            <Button variant="text" color="primary" fullWidth sx={{ border: 1, marginY: 1, borderRadius: 2 }} >
                                Variant: Base
                            </Button>
                        </div>
                        <div className="flex-1/2 pl-1">
                            <Button variant="text" color="primary" fullWidth sx={{ border: 1, marginY: 1, borderRadius: 2 }} >
                                EMI Calculator
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <KeySpecs />
            </div>
        </div>
    );

};

export default BikeDetails;