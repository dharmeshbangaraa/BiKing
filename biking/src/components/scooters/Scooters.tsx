import { Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import IBike from "../../interfaces/Bike";
import CheckoutButton from "../utils/CheckoutButton";
import { useNavigate } from "react-router-dom";

interface scooterCategory {
  selectedCategory: string | null;
}

const Scooters: React.FC<scooterCategory> = ({ selectedCategory }) => {
  const [scooter, setScooter] = useState<IBike[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://biking-production.up.railway.app/api/v1/bike/")
      .then((res) => res.json())
      .then((data) => setScooter(data))
      .catch((err) => console.error("Error fetching scooters:", err));
  }, []);

  const filteredScooters =
    selectedCategory == "scooters"
      ? scooter.filter((scooter) => scooter.category == "scooter")
      : scooter.filter((scooter) => scooter.category == "scooter-ev");

  return (
    <div className="my-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredScooters.splice(0, 3).map((filteredScooter) => (
          <Card
            key={filteredScooter.id}
            className="hover:shadow-lg"
            sx={{ borderRadius: 5, borderWidth: 1, borderColor: "gray" }}
          >
            <img
              src={filteredScooter.image}
              alt={filteredScooter.name}
              className="w-fit h-[200px] p-3 object-fit rounded m-auto"
            />
            <CardContent className="bg-gray-50 p-4">
              <h3 className="text-md font-semibold">{filteredScooter.name}</h3>
              <p className="text-md font-semibold flex">
                {filteredScooter.exPrice} <span className="pl-1">Onwards</span>
              </p>
              <span className="text-sm mb-2">Avg. Ex-Showroom price</span>
              <CheckoutButton
                onClick={() => navigate(`checkout/${filteredScooter.name}`)}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Scooters;
