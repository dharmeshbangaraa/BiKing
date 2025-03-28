import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import KeySpecs from "./KeySpecs";
import MileageBanner from "../banners/MileageBanner";
import UserReviewSummary from "./UserReviewSummary";
import SimilarBikes from "./SimilarBikes";
import UserReview from "./UserReview";
import KeyFeatures from "./KeyFeatures";
import { useParams } from "react-router-dom";
import Bike from "../../interfaces/Bike";

const BikeDetails: React.FC = () => {
  const { name } = useParams();
  console.log("bike name is: ", name);

  const [bike, setBikes] = useState<Bike>();

  useEffect(() => {
    fetch(
      `https://biking-production.up.railway.app/api/v1/bike/name?bikeName=${name}`
    ) // Replace with real API
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
        console.log(data);
      })
      .catch((err) => console.error("Error fetching bike:", err));
  }, []);

  return (
    <div className="lg:px-40 px-5">
      <div>
        <Typography marginTop={2} fontSize={24} fontWeight={"bold"}>
          {bike?.name}
        </Typography>
      </div>
      <div className="md:flex">
        <div className="flex-1/2">
          <img
            className="w-fit h-fit mr-auto"
            src={bike?.image}
            alt={bike?.name}
            height={350}
            width={350}
          />
        </div>
        <div className="flex-1/2">
          <Typography marginTop={2} fontSize={20} fontWeight={"bold"}>
            {bike?.name} On Road Price in Mumbai
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
              <p>{bike?.exPrice}</p>
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
              <p className="font-bold">₹ {bike?.onRoadPrice}</p>
            </div>
          </div>
          <div className="flex mt-1">
            <div className="flex-1/2 pr-1">
              <Button
                variant="text"
                color="primary"
                fullWidth
                sx={{ border: 1, marginY: 1, borderRadius: 2 }}
              >
                Variant: Base
              </Button>
            </div>
            <div className="flex-1/2 pl-1">
              <Button
                variant="text"
                color="primary"
                fullWidth
                sx={{ border: 1, marginY: 1, borderRadius: 2 }}
              >
                EMI Calculator
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:w-full">
          <KeySpecs
            id={bike?.id}
            name={bike?.name}
            engineCapacity={bike?.engineCapacity}
            mileageARAI={bike?.mileageARAI}
            fuelTankCapacity={bike?.fuelTankCapacity}
            kerbWeight={bike?.kerbWeight}
            power={bike?.power}
            torque={bike?.torque}
          />
        </div>
        <div className="md:w-full">
          <KeyFeatures
            id={bike?.id}
            name={bike?.name}
            instrumentConsole={bike?.instrumentConsole}
            gps={bike?.gps}
            speedometer={bike?.speedometer}
            odometer={bike?.odometer}
            fuelGauge={bike?.fuelGauge}
            gearIndicator={bike?.gearIndicator}
          />
        </div>
      </div>
      <div>
        <MileageBanner
          id={bike?.id}
          name={bike?.name}
          mileageARAI={bike?.mileageARAI}
        />
      </div>
      <div>
        <UserReviewSummary id={bike?.id} name={bike?.name} />
      </div>
      <div>
        <SimilarBikes />
      </div>
      <div>
        <UserReview id={bike?.id} name={bike?.name} />
      </div>
    </div>
  );
};

export default BikeDetails;
