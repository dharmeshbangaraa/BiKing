import React from "react";
import Box from '@mui/material/Box';
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import BikesUnder50k from "../bikes under 50k/BikesUnder50k";

const Displacement: React.FC = () => {

    const [value, setValue] = React.useState(0);

    return (
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(_event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Under 110cc" />
                <BottomNavigationAction label="110cc - 125cc" />
                <BottomNavigationAction label="125cc - 150cc" />
                <BottomNavigationAction label="150cc - 200cc" />
                <BottomNavigationAction label="200cc - 250cc" />
                <BottomNavigationAction label="250cc - 500cc" />
                <BottomNavigationAction label="Above 500cc" />
            </BottomNavigation>

            <div>
                {value === 0 && <BikesUnder50k />}
            </div>
        </Box>
    );
}

export default Displacement;