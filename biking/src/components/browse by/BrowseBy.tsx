import { Typography } from "@mui/material";
import React, { useState } from "react";
import Brands from "./Brands";
import Budget from "./Budget";
import Displacement from "./Displacement";
import TabComponent from "../utils/Tabs";

const BrowseBy: React.FC = () => {

    const browseByCategories = ["Brand", "Budget", "Displacement"];
    const [selectedCategory, setSelectedCategory] = useState<string | null>("Brand");

    const handleCategoryChange = (_event: React.SyntheticEvent, newValue: string) => {
        setSelectedCategory(newValue === selectedCategory ? null : newValue);
    };


    return (
        <div className="lg:px-40 lg:py-5 px-5">
            <Typography
                marginTop={2}
                fontSize={24}
                fontWeight={"bold"}
            >
                Browse By
            </Typography>

            <TabComponent categories={browseByCategories} selectedCategory={selectedCategory} categoryOnChange={handleCategoryChange} />

            <div className="p-0">
                {selectedCategory === "Brand" && <Brands />}
                {selectedCategory === "Budget" && <Budget />}
                {selectedCategory === "Displacement" && <Displacement />}
            </div>
        </div>

    );
}

export default BrowseBy;