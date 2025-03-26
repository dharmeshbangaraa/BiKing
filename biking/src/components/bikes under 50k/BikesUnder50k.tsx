import { Button, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import Bike from "../../interfaces/Bike";

const BikesUnder50k: React.FC = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);

  useEffect(() => {
    fetch("https://api.example.com/bikes") // Replace with real API
      .then((res) => res.json())
      .then((data) => setBikes(data))
      .catch((err) => console.error("Error fetching bikes:", err));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bikes?.map((filteredBike) => (
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
                &#8377; {filteredBike.price}{" "}
                <span className="pl-1">Onwards</span>
              </p>
              <span className="text-sm mb-2">Avg. Ex-Showroom price</span>
              <Button
                variant="text"
                color="primary"
                fullWidth
                sx={{ border: 1, marginTop: 2, borderRadius: 2 }}
              >
                check out
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BikesUnder50k;
