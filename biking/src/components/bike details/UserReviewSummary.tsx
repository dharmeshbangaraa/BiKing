import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CircularRatingBar from "../utils/CircularRatingBar";


const UserReviewSummary: React.FC = () => {

    const userReviewParams = ["Style & Design", "Reliability", "Comfort", "Service experience", "Value for money", "Performance"];

    return (
        <div className="mt-2 p-1">
            <div>
                <Typography
                    marginTop={2}
                    fontSize={20}
                    fontWeight={"bold"}
                    data-testid="user-review-summary-heading"
                > Royal Enfield Himalayan 450 User Review Summary
                </Typography>
            </div>
            <Box sx={{ flexGrow: 1, paddingY: 2 }}>
                <Grid
                    container
                    sx={{
                        '--Grid-borderWidth': '1px',
                        borderTop: 'var(--Grid-borderWidth) solid',
                        borderLeft: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider',
                        borderBottomLeftRadius: 5,
                        borderTopLeftRadius: 5,
                        '& > div': {
                            borderRight: 'var(--Grid-borderWidth) solid',
                            borderBottom: 'var(--Grid-borderWidth) solid',
                            borderColor: 'divider',
                            borderTopRightRadius: 5,
                            borderBottomRightRadius: 5,
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
                                lg: 3,
                            }}
                            sx={{
                                height: 150, // Sets consistent height
                                "@media (max-width: 600px)": {
                                    height: 140
                                }
                            }}
                        >
                            <div className="text-center flex justify-center md:p-4">
                                <CircularRatingBar size={"lg"} value={75} />
                            </div>
                            <div className="text-center p-1">
                                <h3 className="font-semibold">{param}</h3>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );

}

export default UserReviewSummary;