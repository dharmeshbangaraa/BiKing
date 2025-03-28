import { Button, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import IBike from "../../interfaces/Bike";

const Scooters: React.FC = () => {
  const [scooter, setScooter] = useState<IBike[]>([]);

  useEffect(() => {
    fetch("https://biking-production.up.railway.app/api/v1/bike/") // Replace with real API
      .then((res) => res.json())
      .then((data) => setScooter(data))
      .catch((err) => console.error("Error fetching scooters:", err));
  }, []);

  const filteredScooters = scooter
    .filter((scooter) => scooter.category == "scooter")
    .slice(0, 3);

  return (
    <div className="my-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredScooters.map((filteredScooter) => (
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

export default Scooters;
