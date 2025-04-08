import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CircularRatingBar from "../utils/CircularRatingBar";
import BikeReview from "../../interfaces/BikeReview";

const UserReview: React.FC<
  BikeReview & { toggleExpand?: (id: number) => void }
> = ({
  id,
  styleAndDesign,
  reliability,
  comfort,
  serviceExperience,
  valueForMoney,
  performance,
  ownerMileage,
  reviewerName,
  reviewerRiddenKms,
  reviewTitle,
  reviewDescription,
  expanded,
  toggleExpand,
}) => {
  const userReviewParams: { name: string; value: number }[] = [
    { name: "Style & Design", value: styleAndDesign },
    { name: "Reliability", value: reliability },
    { name: "Comfort", value: comfort },
    { name: "Service experience", value: serviceExperience },
    { name: "Value for money", value: valueForMoney },
    { name: "Performance", value: performance },
  ];

  return (
    <div>
      <div className="mt-3">
        <div className="bg-gray-50 p-2">
          <Typography
            fontSize={18}
            fontWeight={"bold"}
            data-testid="review-heading"
          >
            {" "}
            {reviewTitle}
          </Typography>
          <p className="text-xs md:text-sm font-light">
            {"1 week ago"} &bull; {reviewerName} &bull; Got mileage of{" "}
            {ownerMileage} kmpl &bull; Ridden for {reviewerRiddenKms} km
          </p>
          <div
            className={`transition-all duration-300 ${
              expanded ? "" : "line-clamp-2"
            }`}
          >
            <p className="pt-1 mt-1 text-sm">{reviewDescription}</p>
            <div>
              <Typography
                marginTop={2}
                fontSize={16}
                fontWeight={"bold"}
                data-testid="rating-heading"
              >
                {" "}
                Rating
              </Typography>
            </div>
            <div>
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  sx={{
                    "--Grid-borderWidth": "1px",
                    borderTop: "var(--Grid-borderWidth) solid",
                    borderLeft: "var(--Grid-borderWidth) solid",
                    borderColor: "divider",
                    "& > div": {
                      borderRight: "var(--Grid-borderWidth) solid",
                      borderBottom: "var(--Grid-borderWidth) solid",
                      borderColor: "divider",
                    },
                  }}
                >
                  {userReviewParams.map((param) => (
                    <Grid
                      key={param.name}
                      size={{
                        xs: 4,
                        sm: 6,
                        md: 4,
                        lg: 4,
                      }}
                      sx={{
                        height: 110, // Sets consistent height
                        "@media (max-width: 600px)": {
                          height: 140,
                        },
                      }}
                    >
                      <div className="text-center flex justify-center md:p-4">
                        <CircularRatingBar size={"md"} value={param.value} />
                      </div>
                      <div className="text-center p-1">
                        <h3 className="text-sm font-semibold">{param.name}</h3>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>
          </div>
          <a
            onClick={() => toggleExpand?.(id)}
            onKeyDown={(e) => {
              if (e.key === "Enter") toggleExpand?.(id);
            }}
            className="text-blue-500 text-sm mt-1 hover:underline cursor-pointer"
          >
            {expanded ? "show less" : "read more"}
          </a>
          <hr className="mt-5" />
        </div>
      </div>
    </div>
  );
};

export default UserReview;
