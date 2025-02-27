import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Scooters from "../scooters/Scooters";


const PopularScooters: React.FC = () => {

    const browseByCategories = ["Scooters", "Electric Scooters"];
    const [selectedCategory, setSelectedCategory] = useState<string | null>("Scooters");

    const handleCategoryChange = (_event: React.SyntheticEvent, newValue: string) => {
        setSelectedCategory(newValue === selectedCategory ? null : newValue);
    };

    return (
        <div className="container px-50 py-5">
            <p className="text-xl font-grey-1000 mt-2">Popular Scooterss</p>
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
                                color: "black",
                            }}
                        />
                    ))}
                </Tabs>
            </div>
            <div className=" text-center p-0">
                {selectedCategory === "Scooters" && <Scooters />}
            </div>
        </div>
    );
}

export default PopularScooters;