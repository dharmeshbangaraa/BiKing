import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CircularRatingBar from "../utils/CircularRatingBar";
import IBikeReviewSummary from "../../interfaces/BikeReviewSummary";

const UserReviewSummary: React.FC<IBikeReviewSummary> = ({ name, avgStyleAndDesign, avgComfort, avgPerformance, avgReliability, avgServiceExperience, avgValueForMoney }) => {
  const userReviewParams: {name: string, value: number}[] = [
    { name: "Style & Design", value: avgStyleAndDesign },
    { name: "Reliability", value: avgReliability },
    { name: "Comfort", value: avgComfort },
    { name: "Service Experience", value: avgServiceExperience },
    { name: "Value for money", value: avgValueForMoney },
    { name: "Performance", value: avgPerformance },
  ];

  return (
    <div className="mt-2 p-1">
      <div>
        <Typography
          marginTop={2}
          fontSize={20}
          fontWeight={"bold"}
          data-testid="user-review-summary-heading"
        >
          {" "}
          {name} User Review Summary
        </Typography>
      </div>
      <Box sx={{ flexGrow: 1, paddingY: 2 }}>
        <Grid
          container
          sx={{
            "--Grid-borderWidth": "1px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderBottom: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
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
                lg: 3,
              }}
              sx={{
                height: 150, // Sets consistent height
                "@media (max-width: 600px)": {
                  height: 140,
                },
              }}
            >
              <div className="text-center flex justify-center md:p-4">
                <CircularRatingBar size={"lg"} value={(param ? param.value : 0)} />
              </div>
              <div className="text-center p-1">
                <h3 className="font-semibold">{param.name}</h3>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default UserReviewSummary;
