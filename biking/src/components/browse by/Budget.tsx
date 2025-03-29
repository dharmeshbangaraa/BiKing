import React from "react";
import Box from "@mui/material/Box";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import BikesUnderBudget from "../bikes under budget/BikesUnderBudget";

const Budget: React.FC = () => {
  const [value, setValue] = React.useState(0);
  console.log("budget selected", value);

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
              display: "none",
            },
          },
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
        <BikesUnderBudget value={value} />
      </div>
    </Box>
  );
};

export default Budget;
