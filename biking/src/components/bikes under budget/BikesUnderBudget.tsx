import { Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import Bike from "../../interfaces/Bike";
import CheckoutButton from "../utils/CheckoutButton";
import { useNavigate } from "react-router-dom";

interface budgetProp {
  value: number;
}

const BikesUnderBudget: React.FC<budgetProp> = ({ value }) => {
  const [bikes, setBikes] = useState<Bike[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://bikingcom-production.up.railway.app/api/v1/bike/`) // Replace with real API
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
      })
      .catch((err) => console.error("Error fetching bike:", err));
  }, []);

  var filteredBikes = bikes.filter((bike) => {
    if (!bike.exPrice) return "0";
    const exPrice = parseInt(bike?.exPrice.replace(/[^0-9]/g, ""), 10) || 0;
    if (value == 0) {
      return exPrice < 50001;
    } else if (value == 1) {
      return exPrice > 50000 && exPrice < 60001;
    } else if (value == 2) {
      return exPrice > 60000 && exPrice < 70001;
    } else if (value == 3) {
      return exPrice > 70000 && exPrice < 100001;
    } else if (value == 4) {
      return exPrice > 100000 && exPrice < 300001;
    } else if (value == 5) {
      return exPrice > 300000 && exPrice < 500001;
    } else {
      return exPrice > 500000;
    }
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredBikes?.slice(0, 3).map((filteredBike) => (
          <Card
            key={filteredBike.id}
            className="hover:shadow-lg"
            sx={{ borderRadius: 5, borderWidth: 1, borderColor: "gray" }}
          >
            <img
              src={filteredBike.image}
              alt={filteredBike.name}
              className="w-fit h-[200px] p-3 object-fit rounded m-auto"
            />
            <CardContent className="bg-gray-50 p-4">
              <h3 className="text-md font-semibold">{filteredBike.name}</h3>
              <p className="text-md font-semibold flex">
                {filteredBike.exPrice} <span className="pl-1">Onwards</span>
              </p>
              <span className="text-sm mb-2">Avg. Ex-Showroom price</span>
              <CheckoutButton
                onClick={() => navigate(`checkout/${filteredBike.name}`)}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BikesUnderBudget;
