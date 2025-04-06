import { Card, CardContent, Typography } from "@mui/material";
import StarRating from "../utils/StarRating";

const BikeReview: React.FC = () => {
  return (
    <div className="lg:px-40 px-5">
      <Typography fontSize={20}>Rate & Review</Typography>
      <div>
        <Card
          className="hover:shadow-lg md:flex md:flex-1/2 md:mr-10 md:justify-evenly justify-center"
          sx={{
            borderRadius: 5,
            borderWidth: 1,
            marginY: 3,
            borderColor: "gray",
          }}
        >
          <img
            src={"/images/bikes/himalayan.jpg"}
            alt={"bike.name"}
            className="w-fit h-[120px] object-fit rounded pl-[30%] md:pl-0"
          />
          <CardContent className="bg-gray-50">
            <h2 className="text-md font-semibold">{"Yamaha (Base)"}</h2>
            <p className="text-bold text-black text-sm mb-2">
              {"155 cc"} &bull; {"30 kmpl"} &bull; {"24 ps "}
              &bull; {"130 kg"}
            </p>
            <p className="text-md font-semibold flex">
              ₹ {"1,94,200"} <span className="pl-1">Onwards</span>
            </p>
            <span className="text-sm mb-2">On-Road Price in Mumbai</span>
          </CardContent>
          <div className="my-auto text-center">
            <Typography fontWeight={"bold"}>
              How much would you rate this bike?
            </Typography>
            <StarRating size={30} readonly={false} />
          </div>
        </Card>
      </div>
      <div></div>
    </div>
  );
};

export default BikeReview;
