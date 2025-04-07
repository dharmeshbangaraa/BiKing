import { Button, Card, CardContent, Typography } from "@mui/material";
import StarRating from "../utils/StarRating";
import { useEffect, useState } from "react";
import Bike from "../../interfaces/Bike";
import { useParams } from "react-router-dom";

const BikeReview: React.FC = () => {

  const { name } = useParams();

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
    }
    else if (name === "under15000") {
      setAbove15000(false);
      setIsNeverOwned(false);
      setIsUnder5000(false);
      setIsUnder15000(true);
    }
    else if (name === "above15000") {
      setIsUnder5000(false);
      setIsUnder15000(false);
      setIsNeverOwned(false);
      setAbove15000(true);
    }
    else if (name === "neverOwned") {
      setIsUnder5000(false);
      setIsUnder15000(false);
      setIsNeverOwned(true);
      setAbove15000(false);
    }
  }

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
    <div className="lg:px-40 px-4">
      <Typography marginTop={2} fontSize={24} fontWeight={"bold"}>Rate & Review</Typography>
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
            className="w-fit h-[118px] object-fit rounded pl-[30%] md:pl-0"
          />
          <CardContent className="bg-gray-50">
            <h2 className="text-md font-semibold">{`${bike?.name} (Base)`}</h2>
            <p className="text-bold text-black text-sm mb-2">
              {bike?.engineCapacity} &bull; {bike?.mileageARAI} &bull; {bike?.power}{" "}
              &bull; {bike?.kerbWeight}
            </p>
            <p className="text-md font-semibold flex">
              ₹ {bike?.onRoadPrice} <span className="pl-1">Onwards</span>
            </p>
            <span className="text-sm mb-2">On-Road Price in Mumbai</span>
          </CardContent>
          <div className="my-auto text-center">
            <Typography fontWeight={"bold"}>
              How much would you rate this bike?
            </Typography>
            <StarRating size={30} readonly={false} />
          </div>
        </Card>
      </div>
      <div className="md:flex md:justify-between text-center mt-10">
        <div className="p-1">
          <Typography
            fontSize={18}>
            Style & Design
          </Typography>
          <StarRating size={25} readonly={false} />
        </div>
        <div className="p-1">
          <Typography
            fontSize={18}>
            Reliability
          </Typography>
          <StarRating size={25} readonly={false} />
        </div>
        <div className="p-1">
          <Typography
            fontSize={18}>
            Comfort
          </Typography>
          <StarRating size={25} readonly={false} />
        </div>
        <div className="p-1">
          <Typography
            fontSize={18}>
            Service Experience
          </Typography>
          <StarRating size={25} readonly={false} />
        </div>
        <div className="p-1">
          <Typography
            fontSize={18}>
            Value for Money
          </Typography>
          <StarRating size={25} readonly={false} />
        </div>
        <div className="p-1">
          <Typography
            fontSize={18}>
            Performance
          </Typography>
          <StarRating size={25} readonly={false} />
        </div>
      </div>
      <div className="mt-10">
        <form action="" method="post">
          <div className="md:flex md:justify-between">
            <div>
              <label className="block font-medium mb-1">Enter your bike's mileage (kmpl)</label>
              <input
                type="number"
                name="name"
                className="w-fit px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="30"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-fit px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email ID</label>
              <input
                type="text"
                name="name"
                className="md:w-100 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="JohnDoe@gmail.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="block font-medium mt-3">Give your review a title</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="A Powerful Cruiser!"
              required
            />
          </div>
          <div>
            <label className="block font-medium mt-3">Review description</label>
            <textarea
              name="name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write about the bike's looks, performance, the good, the bad, and the worse! Anything."
              required
            />
          </div>
          <div>
            <label className="block font-medium mt-3 mb-1">How much have you ridden the bike?</label>
            <div className="flex">
              <Button
                variant="text"
                id="under5000"
                sx={{
                  border: isUnder5000 ? 2 : 1,
                  borderRadius: 2,
                  borderColor: isUnder5000 ? 'green' : 'primary',
                  color: isUnder5000 ? 'green' : 'primary',
                  fontSize: 12
                }}
                onClick={(e) => toggleKms(e.currentTarget.id)}
              >0-5000 km</Button>
              <Button
                variant="text"
                id="under15000"
                sx={{
                  border: isUnder15000 ? 2 : 1,
                  borderRadius: 2,
                  borderColor: isUnder15000 ? 'green' : 'primary',
                  color: isUnder15000 ? 'green' : 'primary',
                  marginLeft: 0.5,
                  fontSize: 12

                }}
                onClick={(e) => toggleKms(e.currentTarget.id)}
              >5000-15000 km</Button>
              <Button
                variant="text"
                id="above15000"
                sx={{
                  border: above15000 ? 2 : 1,
                  borderRadius: 2,
                  borderColor: above15000 ? 'green' : 'primary',
                  color: above15000 ? 'green' : 'primary',
                  marginLeft: 0.5,
                  fontSize: 12
                }}
                onClick={(e) => toggleKms(e.currentTarget.id)}
              >15000+ km</Button>
              <Button
                variant="text"
                id="neverOwned"
                sx={{
                  border: isNeverOwned ? 2 : 1,
                  borderRadius: 2,
                  borderColor: isNeverOwned ? 'green' : 'primary',
                  color: isNeverOwned ? 'green' : 'primary',
                  marginLeft: 0.5,
                  fontSize: 12
                }}
                onClick={(e) => toggleKms(e.currentTarget.id)}
              >Never Owned</Button>
            </div>
          </div>
          <div className="flex justify-center my-5">
            <Button type="submit"
              variant="text"
              sx={{
                border: 1,
                borderRadius: 2,
                borderColor: 'green',
                color: 'green',
              }}>Complete Review</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BikeReview;
