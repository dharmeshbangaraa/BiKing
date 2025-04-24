import { Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Bike from "../../interfaces/Bike";

const BikeList: React.FC = () => {
  const { brand } = useParams();

  const navigate = useNavigate();

  const [bikes, setBikes] = useState<Bike[]>();

  useEffect(() => {
    fetch(`https://bikingcom-production.up.railway.app/api/v1/bike/`) // Replace with real API
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
      })
      .catch((err) => console.error("Error fetching bike:", err));
  }, []);

  const filterByBrand = bikes?.filter((bike) => bike.brand == brand);
  const expensiveBike = filterByBrand
    ?.slice()
    .sort(
      (a, b) =>
        Number(b?.onRoadPrice?.replace(/,/g, "") ?? 0) -
        Number(a?.onRoadPrice?.replace(/,/g, "") ?? 0)
    )[0];

  const startingPrice = filterByBrand
    ?.slice()
    .sort(
      (a, b) =>
        Number(a?.onRoadPrice?.replace(/,/g, "") ?? 0) -
        Number(b?.onRoadPrice?.replace(/,/g, "") ?? 0)
    )[0];

  return (
    <div className="lg:px-40 px-5">
      <div>
        <Typography marginY={2} fontSize={24} fontWeight={"bold"}>
          {brand} Bikes
        </Typography>
      </div>
      <div>
        <p>
          {brand} bikes price starts from Rs. {startingPrice?.onRoadPrice}.{" "}
          {brand} offers {filterByBrand?.length} models in India with most
          popular bikes being{" "}
          {filterByBrand?.map((bike) => bike.name + ", ").slice(0, 2)}
          {filterByBrand?.map((bike) => bike.name).slice(3, 4)[0]}. Most
          expensive {brand} bike is {expensiveBike?.name}, which is priced at
          Rs. {expensiveBike?.onRoadPrice}.
        </p>
      </div>
      <div>
        <div>
          <Typography marginTop={2} fontSize={24} fontWeight={"bold"}>
            {brand} Bikes Price in Mumbai
          </Typography>
        </div>
        <div>
          {filterByBrand?.map((bike) => (
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
                  {bike.engineCapacity} &bull; {bike.mileageARAI} &bull;{" "}
                  {bike.power} &bull; {bike.kerbWeight}
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
