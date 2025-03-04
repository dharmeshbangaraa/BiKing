import { Button, Typography } from "@mui/material";
import React from "react";


const GoGreen: React.FC = () => {

    return (
        <div className="lg:px-40 lg:py-1 px-5">
            <div className="border-2 border-green-600 bg-green-100 lg:flex flex-row">
                <div className="lg:flex-1/3 ">
                    <img src="/images/banner-logos/go-green-logo.png" alt="go-green-logo" className="h-20 md:h-35 lg:h-20 w-full object-fill" />
                </div>
                <div className="flex-2/3 text-center p-2">
                    <Typography
                        fontWeight={"bold"}
                    > Explore wide range of electric Bikes and Scooters!
                    </Typography>
                    <Button variant="text" color="success" w-10 sx={{ border: 1, backgroundColor: "white", marginRight: 1 }}>
                        Electric Bike
                    </Button>
                    <Button variant="text" color="success" w-10 sx={{ border: 1, backgroundColor: "white", marginRight: 1 }}>
                        Electric Scooter
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default GoGreen;