import { Button, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import IScooter from "../../interfaces/Scooter";


const Scooters: React.FC = () => {

    const [scooter, setScooter] = useState<IScooter[]>([{
        id: 1,
        name: "TVS Jupiter",
        price: "98,344",
        category: "Scooter",
        image: "/public/images/scooters/jupiter.jpg"
    },
    {
        id: 2,
        name: "Suzuki Access 125",
        price: "1,00,710",
        category: "Scooter",
        image: "/public/images/scooters/access125.jpg"
    },
    {
        id: 3,
        name: "Honda Activa 6G",
        price: "97,000",
        category: "Scooter",
        image: "/public/images/scooters/activa6g.jpg"
    }

    ]);

    useEffect(() => {
        fetch("https://api.example.com/bikes") // Replace with real API
            .then((res) => res.json())
            .then((data) => setScooter(data))
            .catch((err) => console.error("Error fetching scooters:", err));
    }, []);

    return (
        <div className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {scooter?.map((filteredScooter) => (
                    <Card key={filteredScooter.id} className="hover:shadow-lg" sx={{ borderRadius: 5, borderWidth: 1, borderColor: "gray" }}>
                        <img
                            src={filteredScooter.image}
                            alt={filteredScooter.name}
                            className="w-full h-40 object-cover rounded"
                        />
                        <CardContent className="bg-gray-50 p-4">
                            <h3 className="text-md font-semibold">{filteredScooter.name}</h3>
                            <p className="text-md font-semibold flex">&#8377; {filteredScooter.price} <span className="pl-1">Onwards</span></p>
                            <span className="text-sm mb-2">Avg. Ex-Showroom price</span>
                            <Button variant="text" color="primary" fullWidth sx={{ border: 1, marginTop: 2, borderRadius: 2 }}>
                                check out
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

    );
}

export default Scooters;