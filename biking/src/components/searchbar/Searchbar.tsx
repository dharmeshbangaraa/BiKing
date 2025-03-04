import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";


const Searchbar: React.FC = () => {

    const [search, setSearch] = useState("");

    return (

        <div className="lg:absolute lg:top-8/9 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-8/9 lg:z-10 lg:w-3/4 md:justify-items-center lg:justify-items-normal p-5">
            <Typography sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: 15,
                fontFamily: "LatoGoogle, sans-serif",
                "@media (min-width: 1200px)": {
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "LatoGoogle, sans-serif",
                },
            }}>Let's search your DREAM bike together!</Typography>
            <TextField
                placeholder="Try Royal Enfield Himalayan"
                className="bg-white rounded-md w-full"
                value={search}
                size="small"
                focused={false}
                onChange={(e) => setSearch(e.target.value)}
                sx={{ padding: "none" }}
            />
        </div>
    );
}

export default Searchbar;
