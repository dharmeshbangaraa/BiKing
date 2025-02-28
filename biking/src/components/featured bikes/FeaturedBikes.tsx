import React, { useState, useEffect } from "react";
import { Card, CardContent, Button, Tabs, Tab, Typography } from "@mui/material";
import Bike from "../../interfaces/Bike";

const categories = ["Sport", "Cruiser", "Electric", "Adventure"];

const FeaturedBike: React.FC = () => {

  const [bikes, setBikes] = useState<Bike[]>([{
    id: 1,
    name: "Royal Enfield Himalayan",
    price: "3,00,000",
    category: "Adventure",
    image: "/src/assets/images/bikes/himalayan.jpg"
  },
  {
    id: 2,
    name: "Kawasaki Ninja 300",
    price: "3,40,000",
    category: "Sport",
    image: "/src/assets/images/bikes/Ninja300.jpg"
  },
  {
    id: 3,
    name: "KTM RC 390",
    price: "3,40,000",
    category: "Sport",
    image: "/src/assets/images/bikes/RC390.jpg"
  },
  {
    id: 4,
    name: "Yamaha R3",
    price: "4,40,000",
    category: "Sport",
    image: "/src/assets/images/bikes/R3.jpg"
  },
  {
    id: 5,
    name: "Bajaj Avenger Cruise 220",
    price: "1,40,000",
    category: "Cruiser",
    image: "/src/assets/images/bikes/avenger220.jpg"
  },
  {
    id: 6,
    name: "Ather 450X",
    price: "1,50,000",
    category: "Electric",
    image: "/src/assets/images/bikes/ather450x.jpg"
  }]);

  const [selectedCategory, setSelectedCategory] = useState<string | null>("Sport");

  useEffect(() => {
    fetch("https://api.example.com/bikes") // Replace with real API
      .then((res) => res.json())
      .then((data) => setBikes(data))
      .catch((err) => console.error("Error fetching bikes:", err));
  }, []);

  const handleCategoryChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue === selectedCategory ? null : newValue);
  };

  const filteredBikes = selectedCategory
    ? bikes.filter((bike) => bike.category === selectedCategory).slice(0, 3)
    : null;

  return (
    <div className="container px-40">

      <Typography
        marginTop={2}
        fontSize={24}
        fontWeight={"bold"}
      >
        Featured Bikes
      </Typography>

      <div>
        {/* Category Tabs */}
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          indicatorColor="primary"
          textColor="primary"
          className="pt-2"
          sx={{
            ".MuiButtonBase-root": {
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start", // Ensures tabs are not centered
              paddingX: 0,
              marginRight: 2,
              width: "fit-content",
              minWidth: "fit-content",
            },
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          {categories.map((category) => (
            <Tab
              key={category}
              label={category}
              value={category}
              sx={{
                color: "grey",
                fontWeight: "bold",
              }}
            />
          ))}
        </Tabs>
      </div>

      {/* Bike Listings */}
      <div className="my-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredBikes?.map((filteredBike) => (
            <Card key={filteredBike.id} className="hover:shadow-lg" sx={{ borderRadius: 5, borderWidth: 1, borderColor: "gray" }}>
              <img
                src={filteredBike.image}
                alt={filteredBike.name}
                className="w-full h-40 object-cover rounded"
              />
              <CardContent className="bg-gray-50 p-4">
                <h3 className="text-md font-semibold">{filteredBike.name}</h3>
                <p className="text-md font-semibold flex">&#8377; {filteredBike.price} <span className="pl-1">Onwards</span></p>
                <span className="text-sm mb-2">Avg. Ex-Showroom price</span>
                <Button variant="text" color="primary" fullWidth sx={{ border: 1, marginTop: 2, borderRadius: 2 }}>
                  check out
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBike;