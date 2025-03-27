import { Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Bike from "../../interfaces/Bike";

const BikeList: React.FC = () => {
  const { brand } = useParams();

  const navigate = useNavigate();

  const [bikes, setBikes] = useState<Bike[]>();

  useEffect(() => {
    fetch(`https://biking-production.up.railway.app/api/v1/bike/`) // Replace with real API
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
        console.log(data);
      })
      .catch((err) => console.error("Error fetching bike:", err));
  }, []);

  return (
    <div className="lg:px-40 px-5">
      <div>
        <Typography marginY={2} fontSize={24} fontWeight={"bold"}>
          {brand} Bikes
        </Typography>
      </div>
      <div>
        <p>
          Royal Enfield bike price starts from Rs. 1,49,900. Royal Enfield
          offers 14 new models in India with most popular bikes being Classic
          650, Hunter 350 and Classic 350. The upcoming bikes of Royal Enfield
          include Himalayan 750, Scrambler 450 and Flying Flea C6. Most
          expensive Royal Enfield bike is Super Meteor 650, which is priced at
          Rs. 3,63,900.
        </p>
      </div>
      <div>
        <div>
          <Typography marginTop={2} fontSize={24} fontWeight={"bold"}>
            {brand} Bikes Price in Mumbai
          </Typography>
        </div>
        <div>
          {bikes
            ?.filter((bike) => bike.brand === brand)
            .map((bike) => (
              <Card
                key={bike.id}
                className="hover:shadow-lg md:flex md:flex-1/2 md:mr-10 md:justify-evenly justify-center"
                sx={{
                  borderRadius: 5,
                  borderWidth: 1,
                  marginY: 3,
                  borderColor: "gray",
                }}
              >
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-fit h-[200px] object-fit rounded"
                />
                <CardContent className="bg-gray-50">
                  <h2 className="text-md font-semibold">{bike.name}</h2>
                  <p className="text-bold text-black text-sm mb-2">
                    999.9 cc &bull; 30 kmpl &bull; 40 bhp &bull; 220 kg
                  </p>
                  <p className="text-md font-semibold flex">
                    ₹ {bike.onRoadPrice} <span className="pl-1">Onwards</span>
                  </p>
                  <span className="text-sm mb-2">On-Road Price in Mumbai</span>
                  <Button
                    variant="text"
                    color="primary"
                    fullWidth
                    sx={{ border: 1, marginTop: 2, borderRadius: 2 }}
                    onClick={() => navigate(`checkout/${bike.name}`)}
                  >
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

export default BikeList;
