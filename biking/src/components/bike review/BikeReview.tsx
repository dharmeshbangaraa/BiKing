import { Button, Card, CardContent, Typography } from "@mui/material";
import StarRating from "../utils/StarRating";
import React, { useEffect, useState } from "react";
import Bike from "../../interfaces/Bike";
import { useNavigate, useParams } from "react-router-dom";

const BikeReview: React.FC = () => {
  const { name } = useParams();

  const navigate = useNavigate();

  const [isUnder5000, setIsUnder5000] = useState(false);
  const [isUnder15000, setIsUnder15000] = useState(false);
  const [above15000, setAbove15000] = useState(false);
  const [isNeverOwned, setIsNeverOwned] = useState(false);

  function toggleKms(name: string) {
    if (name === "under5000") {
      setIsUnder15000(false);
      setAbove15000(false);
      setIsNeverOwned(false);
      setIsUnder5000(true);
    } else if (name === "under15000") {
      setAbove15000(false);
      setIsNeverOwned(false);
      setIsUnder5000(false);
      setIsUnder15000(true);
    } else if (name === "above15000") {
      setIsUnder5000(false);
      setIsUnder15000(false);
      setIsNeverOwned(false);
      setAbove15000(true);
    } else if (name === "neverOwned") {
      setIsUnder5000(false);
      setIsUnder15000(false);
      setIsNeverOwned(true);
      setAbove15000(false);
    }
  }

  function kmRidden() {
    if (isUnder5000) return "0-5000";
    else if (isUnder15000) return "5000-15000";
    else if (above15000) return "15000+";
    else if (isNeverOwned) return "0";
  }

  const [bike, setBikes] = useState<Bike>();

  useEffect(() => {
    fetch(
      `https://bikingcom-production.up.railway.app/api/v1/bike/name?bikeName=${name}`
    ) // Replace with real API
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
        console.log(data);
      })
      .catch((err) => console.error("Error fetching bike:", err));
  }, []);

  const [form, setForm] = useState({
    bikeName: "",
    bikeRating: 0,
    styleAndDesign: 0,
    reliability: 0,
    comfort: 0,
    serviceExperience: 0,
    valueForMoney: 0,
    performance: 0,
    ownerMileage: "",
    reviewerName: "",
    reviewerEmail: "",
    reviewerRiddenKms: "",
    reviewTitle: "",
    reviewDescription: "",
  });

  // console.log(form);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const reviewData = {
      ...form,
      bikeName: bike?.name,
      bikeRating: ratings["overallRating"],
      styleAndDesign: ratings["styleAndDesign"],
      reliability: ratings["reliability"],
      comfort: ratings["comfort"],
      serviceExperience: ratings["serviceExperience"],
      valueForMoney: ratings["valueForMoney"],
      performance: ratings["performance"],
      ownerMileage: form.ownerMileage,
      reviewerName: form.reviewerName,
      reviewerEmail: form.reviewerEmail,
      reviewerRiddenKms: kmRidden(),
      reviewTitle: form.reviewTitle,
      reviewDescription: form.reviewDescription,
    };

    try {
      const response = await fetch(
        "https://bikingcom-production.up.railway.app/api/v1/bike/review/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      const result = await response.json();
      console.log("Review submitted successfully:", result);

      navigate(-1);

      // Optional: Reset form or show success message here
    } catch (error) {
      console.error("Error submitting review:", error);
      // Optional: Show error UI here
    }
  };

  const [ratings, setRatings] = useState<Record<string, number>>({});

  const handleRatingChange = (id: string, value: number) => {
    setRatings((prev) => ({
      ...prev,
      [id]: value,
    }));

    console.log(`Rating for ${id}: ${value}`);
  };

  return (
    <div className="lg:px-40 px-4">
      <Typography marginTop={2} fontSize={24} fontWeight={"bold"}>
        Rate & Review
      </Typography>
      <div>
        <Card
          className="hover:shadow-lg md:flex md:flex-1/2 md:mr-10 md:justify-evenly justify-center"
          sx={{
            borderRadius: 5,
            borderWidth: 1,
            marginY: 2,
            borderColor: "gray",
          }}
        >
          <img
            src={bike?.image}
            alt={bike?.name}
            className="w-fit h-[118px] object-fit rounded pl-[25%] md:pl-0"
          />
          <CardContent className="bg-gray-50">
            <h2 className="text-md font-semibold">{`${bike?.name} (Base)`}</h2>
            <p className="text-bold text-black text-sm mb-2">
              {bike?.engineCapacity} &bull; {bike?.mileageARAI} &bull;{" "}
              {bike?.power} &bull; {bike?.kerbWeight}
            </p>
            <p className="text-md font-semibold flex">
              ₹ {bike?.onRoadPrice} <span className="pl-1">Onwards</span>
            </p>
            <span className="text-sm mb-2">On-Road Price in Mumbai</span>
          </CardContent>
          <div className="md:my-auto text-center py-8">
            <Typography fontWeight={"bold"}>
              How much would you rate this bike?
            </Typography>
            <StarRating
              size={30}
              readonly={false}
              onChange={handleRatingChange}
              id={"overallRating"}
            />
          </div>
        </Card>
      </div>
      <div className="md:flex md:justify-between text-center mt-10">
        <div className="p-1 my-3">
          <Typography fontSize={18}>Style & Design</Typography>
          <StarRating
            size={25}
            readonly={false}
            id={"styleAndDesign"}
            onChange={handleRatingChange}
          />
        </div>
        <div className="p-1 my-3">
          <Typography fontSize={18}>Reliability</Typography>
          <StarRating
            size={25}
            readonly={false}
            id={"reliability"}
            onChange={handleRatingChange}
          />
        </div>
        <div className="p-1 my-3">
          <Typography fontSize={18}>Comfort</Typography>
          <StarRating
            size={25}
            readonly={false}
            id={"comfort"}
            onChange={handleRatingChange}
          />
        </div>
        <div className="p-1 my-3">
          <Typography fontSize={18}>Service Experience</Typography>
          <StarRating
            size={25}
            readonly={false}
            id={"serviceExperience"}
            onChange={handleRatingChange}
          />
        </div>
        <div className="p-1 my-3">
          <Typography fontSize={18}>Value for Money</Typography>
          <StarRating
            size={25}
            readonly={false}
            id={"valueForMoney"}
            onChange={handleRatingChange}
          />
        </div>
        <div className="p-1 my-3">
          <Typography fontSize={18}>Performance</Typography>
          <StarRating
            size={25}
            readonly={false}
            id={"performance"}
            onChange={handleRatingChange}
          />
        </div>
      </div>
      <div className="mt-7">
        <form onSubmit={handleSubmit} method="post">
          <div className="md:flex md:justify-between">
            <div>
              <label className="block font-medium mb-1 mt-3">
                Enter your bike's mileage (kmpl)
              </label>
              <input
                type="text"
                name="ownerMileage"
                value={form.ownerMileage}
                onChange={handleInputChange}
                className="w-fit px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="30"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1 mt-3">Name</label>
              <input
                type="text"
                name="reviewerName"
                onChange={handleInputChange}
                value={form.reviewerName}
                className="w-fit px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1 mt-3">Email ID</label>
              <input
                type="text"
                name="reviewerEmail"
                onChange={handleInputChange}
                value={form.reviewerEmail}
                className="md:w-100 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="JohnDoe@gmail.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="block font-medium mt-3">
              Give your review a title
            </label>
            <input
              type="text"
              name="reviewTitle"
              onChange={handleInputChange}
              value={form.reviewTitle}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="A Powerful Cruiser!"
              required
            />
          </div>
          <div>
            <label className="block font-medium mt-3">Review description</label>
            <textarea
              name="reviewDescription"
              onChange={handleInputChange}
              value={form.reviewDescription}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write about the bike's looks, performance, the good, the bad, and the worse! Anything."
              required
            />
          </div>
          <div>
            <label className="block font-medium mt-3 mb-1">
              How much have you ridden the bike?
            </label>
            <div className="flex">
              <Button
                variant="text"
                id="under5000"
                sx={{
                  border: isUnder5000 ? 2 : 1,
                  borderRadius: 2,
                  borderColor: isUnder5000 ? "green" : "primary",
                  color: isUnder5000 ? "green" : "primary",
                  fontSize: 12,
                }}
                onClick={(e) => toggleKms(e.currentTarget.id)}
              >
                0-5000 km
              </Button>
              <Button
                variant="text"
                id="under15000"
                sx={{
                  border: isUnder15000 ? 2 : 1,
                  borderRadius: 2,
                  borderColor: isUnder15000 ? "green" : "primary",
                  color: isUnder15000 ? "green" : "primary",
                  marginLeft: 0.5,
                  fontSize: 12,
                }}
                onClick={(e) => toggleKms(e.currentTarget.id)}
              >
                5000-15000 km
              </Button>
              <Button
                variant="text"
                id="above15000"
                sx={{
                  border: above15000 ? 2 : 1,
                  borderRadius: 2,
                  borderColor: above15000 ? "green" : "primary",
                  color: above15000 ? "green" : "primary",
                  marginLeft: 0.5,
                  fontSize: 12,
                }}
                onClick={(e) => toggleKms(e.currentTarget.id)}
              >
                15000+ km
              </Button>
              <Button
                variant="text"
                id="neverOwned"
                sx={{
                  border: isNeverOwned ? 2 : 1,
                  borderRadius: 2,
                  borderColor: isNeverOwned ? "green" : "primary",
                  color: isNeverOwned ? "green" : "primary",
                  marginLeft: 0.5,
                  fontSize: 12,
                }}
                onClick={(e) => toggleKms(e.currentTarget.id)}
              >
                Never Owned
              </Button>
            </div>
          </div>
          <div className="flex justify-center my-5">
            <Button
              type="submit"
              variant="text"
              sx={{
                border: 1,
                borderRadius: 2,
                borderColor: "green",
                color: "green",
              }}
            >
              Complete Review
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BikeReview;
