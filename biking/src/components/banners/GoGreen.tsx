import { Button, Typography } from "@mui/material";
import React from "react";


const GoGreen: React.FC = () => {

    return (
        <div className="container px-40 py-1">
            <div className="border-2 border-green-600 bg-green-100 flex">
                <div className="flex-1/3">
                    <img src="/images/banner-logos/go-green-logo.png" alt="go-green-logo" className="h-20" />
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