import { Typography, Button } from "@mui/material";
import React from "react";

const MileageBanner: React.FC = () => {

    return (

        <div className="my-5">
            <div className="border-2 border-blue-600 bg-blue-100 md:flex flex-row">
                <div className="md:flex-1/3 ">
                    <img src="/images/banner-logos/petrol-pump.jpg" alt="petrol-pump-logo" className="h-45 md:h-35 w-full object-full" />
                </div>
                <div className="flex-2/3 text-center p-2">
                    <Typography
                        fontWeight={"bold"}
                        variant={"inherit"}
                    > Royal Enfield Himalayan 450 Mileage
                    </Typography>
                    <Typography
                        marginTop={1}
                        fontSize={14}
                        variant={"body1"}
                        textAlign={"left"}
                    > The ARAI mileage of Royal Enfield Himalayan 450 is <b>30 kmpl</b>. Note: The average mileage may vary from the claimed mileage.
                    </Typography>
                    <Button variant="text" color="primary" sx={{ border: 1, backgroundColor: "white", marginY: 1 }}>
                        Mileage Calculator
                    </Button>
                </div>
            </div>
        </div>

    );
};

export default MileageBanner;