import React from "react";
import CircularProgress from "@mui/joy/CircularProgress";

interface CircularRatingBarProp {
  size: "sm" | "lg" | "md";
  value: number;
}

const CircularRatingBar: React.FC<CircularRatingBarProp> = ({
  size,
  value,
}) => {
  return (
    <div>
      <CircularProgress
        size={size}
        determinate
        value={value * 20}
        variant={"soft"}
        sx={{
          "@media (max-width: 600px)": {
            marginTop: 2,
          },
        }}
      >
        {value}
      </CircularProgress>
    </div>
  );
};

export default CircularRatingBar;
