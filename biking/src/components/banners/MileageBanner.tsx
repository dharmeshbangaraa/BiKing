import { Typography, Button } from "@mui/material";
import React from "react";
import IBikeMileage from "../../interfaces/BikeMileage";

const MileageBanner: React.FC<IBikeMileage> = ({ name, mileageARAI }) => {
  return (
    <div className="mt-5 p-1">
      <div className="border-2 border-blue-600 bg-blue-100 md:flex flex-row">
        <div className="md:flex-1/3 ">
          <img
            src="/images/banner-logos/petrol-pump.jpg"
            alt="petrol-pump-logo"
            className="h-45 md:h-35 w-full object-full"
          />
        </div>
        <div className="flex-2/3 text-center p-2">
          <Typography fontWeight={"bold"} variant={"inherit"}>
            {" "}
            {name} Mileage
          </Typography>
          <Typography
            marginTop={1}
            fontSize={14}
            variant={"body1"}
            textAlign={"left"}
          >
            {" "}
            The ARAI mileage of {name} is <b>{mileageARAI}</b>. Note: The
            average mileage may vary from the claimed mileage.
          </Typography>
          <Button
            variant="text"
            color="primary"
            sx={{ border: 1, backgroundColor: "white", marginY: 1 }}
          >
            Mileage Calculator
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MileageBanner;
