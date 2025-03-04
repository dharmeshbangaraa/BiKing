import React from "react";
import Box from '@mui/material/Box';
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import BikesUnder50k from "../bikes under 50k/BikesUnder50k";

const Budget: React.FC = () => {

    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ paddingBottom: 2 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(_event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    "@media (max-width: 600px)": {
                        overflowX: "auto",
                        justifyContent: "start",
                        "&::-webkit-scrollbar": {
                            display: "none", // Hide scrollbar for Chrome, Safari, Edge
                        },
                    }
                }}
            >
                <BottomNavigationAction label="Under &#8377;50,000" />
                <BottomNavigationAction label="Under &#8377;60,000" />
                <BottomNavigationAction label="Under &#8377;70,000" />
                <BottomNavigationAction label="Under &#8377;1 lakh" />
                <BottomNavigationAction label="Under &#8377;3 lakh" />
                <BottomNavigationAction label="Under &#8377;5 lakh" />
                <BottomNavigationAction label="Above &#8377;5 lakh" />
            </BottomNavigation>

            <div>
                {value === 0 && <BikesUnder50k />}
            </div>
        </Box>
    );
}

export default Budget;