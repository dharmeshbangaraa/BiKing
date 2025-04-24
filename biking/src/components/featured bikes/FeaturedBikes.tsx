import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Bike from "../../interfaces/Bike";
import TabsComponent from "../utils/Tabs";
import { useNavigate } from "react-router-dom";
import CheckoutButton from "../utils/CheckoutButton";

const categories = ["sport", "cruiser", "scooter", "adventure"];

const FeaturedBike: React.FC = () => {
  const navigate = useNavigate();

  const [bikes, setBikes] = useState<Bike[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "sport"
  );

  useEffect(() => {
    fetch("https://bikingcom-production.up.railway.app/api/v1/bike/") // Replace with real API
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
        console.log(data);
      })
      .catch((err) => console.error("Error fetching bikes:", err));
  }, []);

  const handleCategoryChange = (
    _event: React.SyntheticEvent,
    newValue: string
  ) => {
    setSelectedCategory(newValue === selectedCategory ? null : newValue);
  };

  const filteredBikes = selectedCategory
    ? bikes.filter((bike) => bike.category === selectedCategory).slice(0, 3)
    : null;

  return (
    <div className="lg:px-40 px-5">
      <Typography marginTop={2} fontSize={24} fontWeight={"bold"}>
        Featured Bikes
      </Typography>

      <TabsComponent
        categories={categories}
        selectedCategory={selectedCategory}
        categoryOnChange={handleCategoryChange}
      />

      {/* Bike Listings */}
      <div className="my-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredBikes?.map((filteredBike) => (
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
    </div>
  );
};

export default FeaturedBike;
