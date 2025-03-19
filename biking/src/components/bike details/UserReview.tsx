import { Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import CircularRatingBar from "../utils/CircularRatingBar";

const UserReview: React.FC = () => {

    const reviews = [
        {
            userId: 1,
            name: "Dharmesh Bangara",
            when: "1 week ago",
            mileageReceived: 40,
            kmsRidden: 500,
            heading: "Royal Enfield Himalayan 450: A Practical Machine",
            body: "I living in Banglore and bought this new bike and this is good in all among royal stores. A great bike to experience a real royal look. The overall experience was good but the only trouble happened at a store where my name was printed wrong, someone else name was printed while giving for servicing, I'm feeling bad that my name was not there. But overall it was still a good experience with a bike.",
            styleAndDesignRating: 4.5,
            ReliabilityRating: 4,
            ComfortRating: 4,
            ServiceExperienceRating: 4,
            ValueforMoneyRating: 4,
            PerformanceRating: 4
        },
        {
            userId: 2,
            name: "John Doe",
            when: "1 week ago",
            mileageReceived: 38,
            kmsRidden: 2000,
            heading: "Practical adventure tourer",
            body: "The bike stands out in many aspects such as looks, practicality, handling, and capability and when compared to its competitors it's way more affordable. Based on my experience the low-end torque and throttle response is best. MINOR CONS: 1. Missed out with traction control. 2. Feels a bit heavier in traffic conditions.",
            styleAndDesignRating: 4.5,
            ReliabilityRating: 4,
            ComfortRating: 4,
            ServiceExperienceRating: 4,
            ValueforMoneyRating: 4,
            PerformanceRating: 4
        }
    ]

    const userReviewParams = ["Style & Design", "Reliability", "Comfort", "Service experience", "Value for money", "Performance"];

    return (

        <div>
            <div>
                <Typography
                    marginTop={2}
                    fontSize={20}
                    fontWeight={"bold"}
                    data-testid="user-review-summary-heading"
                > Royal Enfield Himalayan 450 - User Reviews
                </Typography>
            </div>
            <div className="mt-3">
                {reviews.map((review) => (
                    <div className="bg-gray-50 p-2">
                        <Typography
                            fontSize={18}
                            fontWeight={"bold"}
                            data-testid="user-review-summary-heading"
                        > {review.heading}
                        </Typography>
                        <p className="text-xs md:text-sm font-light">{review.when} &bull; {review.name} &bull; Got mileage of {review.mileageReceived} kmpl &bull; Ridden for {review.kmsRidden} km</p>
                        <p className="pt-1 mt-1">{review.body}</p>
                        <div>
                            <div>
                                <Typography
                                    marginTop={2}
                                    fontSize={16}
                                    fontWeight={"bold"}
                                    data-testid="user-review-heading"
                                > Rating
                                </Typography>
                            </div>
                            <div>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid
                                        container
                                        sx={{
                                            '--Grid-borderWidth': '1px',
                                            borderTop: 'var(--Grid-borderWidth) solid',
                                            borderLeft: 'var(--Grid-borderWidth) solid',
                                            borderColor: 'divider',
                                            '& > div': {
                                                borderRight: 'var(--Grid-borderWidth) solid',
                                                borderBottom: 'var(--Grid-borderWidth) solid',
                                                borderColor: 'divider',
                                            },
                                        }}
                                    >
                                        {userReviewParams.map((param) => (
                                            <Grid
                                                key={param}
                                                size={{
                                                    xs: 4,
                                                    sm: 6,
                                                    md: 4,
                                                    lg: 4,
                                                }}
                                                sx={{
                                                    height: 110, // Sets consistent height
                                                    "@media (max-width: 600px)": {
                                                        height: 140
                                                    }
                                                }}
                                            >
                                                <div className="text-center flex justify-center lg:p-4">
                                                    <CircularRatingBar size={"md"} value={50} />
                                                </div>
                                                <div className="text-center p-1">
                                                    <h3 className="text-sm font-semibold">{param}</h3>
                                                </div>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </div>
                        </div>
                        <hr className="mt-5" />
                    </div>


                ))
                }
            </div>
        </div>

    );
}

export default UserReview;