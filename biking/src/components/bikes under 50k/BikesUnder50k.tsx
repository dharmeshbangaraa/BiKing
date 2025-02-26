import { Button, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import Bike from "../../interfaces/Bike";

const BikesUnder50k: React.FC = () => {

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
    }]);

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
                    <Card key={filteredBike.id} className="hover:shadow-lg" sx={{ borderRadius: 5, borderWidth: 1, borderColor: "gray" }}>
                      <img
                        src={filteredBike.image}
                        alt={filteredBike.name}
                        className="w-full h-40 object-cover rounded"
                      />
                      <CardContent className="bg-gray-50 p-4">
                        <h3 className="text-sm font-semibold">{filteredBike.name}</h3>
                        <p className="text-md font-semibold">&#8377; {filteredBike.price}</p>
                        <p className="text-sm font-gray-600 mb-2">Avg. Ex-Showroom price</p>
                        <Button variant="text" color="primary" fullWidth className="mt-2" sx={{ border: 1 }}>
                          check out
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
    )
}

export default BikesUnder50k;