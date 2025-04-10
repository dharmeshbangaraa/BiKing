import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import KeySpecs from "./KeySpecs";
import MileageBanner from "../banners/MileageBanner";
import UserReviewSummary from "./UserReviewSummary";
import SimilarBikes from "./SimilarBikes";
import UserReview from "./UserReview";
import KeyFeatures from "./KeyFeatures";
import { Link, useParams } from "react-router-dom";
import Bike from "../../interfaces/Bike";
import EMIModal from "../utils/EMICalculatorModal";
import StarRating from "../utils/StarRating";
import BikeReview from "../../interfaces/BikeReview";

const BikeDetails: React.FC = () => {
  const { name } = useParams();

  const [bike, setBikes] = useState<Bike>();
  const [open, setOpen] = useState(false);
  const [reviews, setReviews] = useState<BikeReview[]>();

  useEffect(() => {
    fetch(
      `https://biking-production.up.railway.app/api/v1/bike/name?bikeName=${name}`
    ) // Replace with real API
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
      })
      .catch((err) => console.error("Error fetching bike:", err));
  }, []);
  

  useEffect(() => {
    fetch(
      `https://biking-production.up.railway.app/api/v1/bike/review/name?bikeName=${name}`
    ) // Replace with real API
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => console.error("Error fetching bike:", err));
  }, []);

  const avgStyleAndDesign = (): number => {
    if(reviews?.length == 0 || reviews?.length == undefined) return 0;
    const totalStyleAndDesign = reviews?.map((review) => review.styleAndDesign).reduce((acc, curr) => acc + curr, 0);
    return (totalStyleAndDesign / reviews?.length);
  }

  const avgComfort = (): number => {
    if(reviews?.length == 0 || reviews?.length == undefined) return 0;
    const totalComfort = reviews?.map((review) => review.comfort).reduce((acc, curr) => acc + curr, 0);
    return (totalComfort / reviews?.length);
  }

  const avgPerformance = (): number => {
    if(reviews?.length == 0 || reviews?.length == undefined) return 0;
    const totalPerformance = reviews?.map((review) => review.performance).reduce((acc, curr) => acc + curr, 0);
    return (totalPerformance / reviews?.length);
  }

  const avgReliability = (): number => {
    if(reviews?.length == 0 || reviews?.length == undefined) return 0;
    const totalReliability = reviews?.map((review) => review.reliability).reduce((acc, curr) => acc + curr, 0);
    return (totalReliability / reviews?.length);
  }

  const avgServiceExperience = (): number => {
    if(reviews?.length == 0 || reviews?.length == undefined) return 0;
    const totalServiceExperience = reviews?.map((review) => review.serviceExperience).reduce((acc, curr) => acc + curr, 0);
    return (totalServiceExperience / reviews?.length);
  }

  const avgValueForMoney = (): number => {
    if(reviews?.length == 0 || reviews?.length == undefined) return 0;
    const totalValueForMoney = reviews?.map((review) => review.valueForMoney).reduce((acc, curr) => acc + curr, 0);
    return (totalValueForMoney / reviews?.length);
  }

  const toggleExpand = (id: number) => {
    setReviews((prev) =>
      prev?.map((review) =>
        review.id === id ? { ...review, expanded: !review.expanded } : review
      )
    );
  };

  const calculatePercentage = () => {
    if (!bike?.exPrice) return "0";
    if (!bike.onRoadPrice) return "0";
    const exPrice = parseInt(bike?.exPrice.replace(/[^0-9]/g, ""), 10) || 0;
    const onRoad = Number(bike.onRoadPrice.replace(/,/g, ""));
    const effectivePrice = onRoad - exPrice;
    return effectivePrice;
  };

  var effectivePriceDiff = Number(calculatePercentage());

  return (
    <div className="lg:px-40 px-5">
      <div>
        <Typography marginTop={2} fontSize={24} fontWeight={"bold"}>
          {bike?.name}
        </Typography>

        <div className="flex items-center">
          <div className="pr-1">
            <StarRating size={20} readonly={true} id={"bikeRating"} />
          </div>
          <div className="pt-[5px]">&bull;</div>
          <div className="px-1">
            <Typography
              fontSize={14}
              paddingTop={"5px"}
              fontWeight={"bold"}
              color="#0080FF"
            >
              100 Ratings
            </Typography>
          </div>
          <div className="pt-[5px]">&bull;</div>
          <div className="px-1">
            <Typography
              fontSize={14}
              paddingTop={"5px"}
              fontWeight={"bold"}
              color="#0080FF"
            >
              <Link to={`/checkout/review/${name}`}>Write Review</Link>
            </Typography>
          </div>
        </div>
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
              <p>
                ₹ {Math.round((effectivePriceDiff * 50) / 100).toLocaleString()}{" "}
              </p>
              <p>
                ₹ {Math.round((effectivePriceDiff * 30) / 100).toLocaleString()}
              </p>
              <p>
                ₹ {Math.round((effectivePriceDiff * 15) / 100).toLocaleString()}
              </p>
              <p>
                ₹ {Math.round((effectivePriceDiff * 5) / 100).toLocaleString()}
              </p>
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
                onClick={() => setOpen(true)}
                sx={{ border: 1, marginY: 1, borderRadius: 2 }}
              >
                EMI Calculator
              </Button>

              {open && (
                <EMIModal
                  onClose={() => setOpen(false)}
                  onRoad={bike?.onRoadPrice}
                  bikeName={bike?.name}
                />
              )}
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
        <UserReviewSummary id={bike?.id} name={bike?.name} avgStyleAndDesign={avgStyleAndDesign()} avgReliability={avgReliability()} avgComfort={avgComfort()} avgServiceExperience={avgServiceExperience()} avgValueForMoney={avgValueForMoney()} avgPerformance={avgPerformance()} />
      </div>
      <div>
        <SimilarBikes />
      </div>
      <div>
        <div>
          <Typography
            marginTop={2}
            fontSize={20}
            fontWeight={"bold"}
            data-testid="user-review-heading"
          >
            {" "}
            {bike?.name} - User Reviews
          </Typography>
        </div>
        {reviews?.map((review) => (
          <UserReview key={review.id} {...review} toggleExpand={toggleExpand} />
        ))}
      </div>
    </div>
  );
};

export default BikeDetails;
