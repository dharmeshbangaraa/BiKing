import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import IBikeMileage from "../../interfaces/BikeMileage";

const MileageBanner: React.FC<IBikeMileage> = ({ name, mileageARAI }) => {
  const [km, setKm] = useState(10);

  return (
    <div className="mt-5 p-1">
      <div className="border-2 border-blue-600 bg-blue-100 md:flex flex-row">
        <div className="md:flex-1/3 ">
          <img
            src="/images/banner-logos/petrol-pump.jpg"
            alt="petrol-pump-logo"
            className="h-45 md:h-40 w-full object-full"
          />
        </div>
        <div className="flex-3/4 text-center p-2">
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
          <div className="md:text-left">
            <span className="text-xs font-bold">Select kms ridden per day</span>
          </div>
          <div className="md:flex md:flex-4/5 mt-1 justify-center">
            <div>
              <Button
                variant="text"
                color="primary"
                sx={{ border: 1, borderRadius: 2 }}
                onClick={() => setKm(10)}
              >
                10
              </Button>
              <Button
                variant="text"
                color="primary"
                sx={{ border: 1, borderRadius: 2, marginLeft: 1 }}
                onClick={() => setKm(20)}
              >
                20
              </Button>
              <Button
                variant="text"
                color="primary"
                sx={{ border: 1, borderRadius: 2, marginLeft: 1 }}
                onClick={() => setKm(30)}
              >
                30
              </Button>
              <Button
                variant="text"
                color="primary"
                sx={{ border: 1, borderRadius: 2, marginLeft: 1 }}
                onClick={() => setKm(40)}
              >
                40
              </Button>
              <Button
                variant="text"
                color="primary"
                sx={{ border: 1, borderRadius: 2, marginLeft: 1 }}
                onClick={() => setKm(50)}
              >
                50
              </Button>
            </div>
            <div className="md:flex-1/5">
              <span className="text-xs">
                *Petrol price considered at ₹103.5/litre
              </span>
              <Typography fontSize={18} variant={"body1"}>
                ₹{" "}
                {(
                  (km / Number(mileageARAI?.split(" ")[0])) *
                  103.5 *
                  30
                ).toLocaleString()}
                * / month
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MileageBanner;
