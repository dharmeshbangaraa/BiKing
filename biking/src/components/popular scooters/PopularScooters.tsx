import { Typography } from "@mui/material";
import React, { useState } from "react";
import Scooters from "../scooters/Scooters";
import TabsComponent from "../utils/Tabs";

const PopularScooters: React.FC = () => {
  const browseByCategories = ["scooters", "electric scooters"];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "scooters"
  );

  const handleCategoryChange = (
    _event: React.SyntheticEvent,
    newValue: string
  ) => {
    setSelectedCategory(newValue === selectedCategory ? null : newValue);
  };

  return (
    <div className="lg:px-40 lg:py-2 px-5">
      <Typography marginTop={2} fontSize={24} fontWeight={"bold"}>
        Popular Scooters
      </Typography>

      <TabsComponent
        categories={browseByCategories}
        selectedCategory={selectedCategory}
        categoryOnChange={handleCategoryChange}
      />

      <div className="p-0">
        <Scooters selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default PopularScooters;
