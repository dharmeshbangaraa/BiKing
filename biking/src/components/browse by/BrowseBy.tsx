import { Tabs, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import Brands from "./Brands";
import Budget from "./Budget";
import Displacement from "./Displacement";

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
            <div className="">
                {/* Category Tabs */}
                <Tabs
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    indicatorColor="primary"
                    textColor="primary"
                    className="mt-2"
                    sx={{
                        ".MuiButtonBase-root": {
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "flex-start", // Ensures tabs are not centered
                            paddingX: 0,
                            marginRight: 2,
                            minWidth: "fit-content",
                        },
                        borderBottom: 1,
                        borderColor: "divider",
                    }}
                >
                    {browseByCategories.map((category) => (
                        <Tab
                            key={category}
                            label={category}
                            value={category}
                            sx={{
                                color: "grey",
                                fontWeight: "bold",
                            }}
                        />
                    ))}
                </Tabs>
            </div>
            <div className="p-0">
                {selectedCategory === "Brand" && <Brands />}
                {selectedCategory === "Budget" && <Budget />}
                {selectedCategory === "Displacement" && <Displacement />}
            </div>
        </div>

    );
}

export default BrowseBy;