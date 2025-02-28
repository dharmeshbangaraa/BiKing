import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";


const Searchbar: React.FC = () => {

    const [search, setSearch] = useState("");

    return (

        <div className="absolute top-8/9 left-1/2 transform -translate-x-1/2 -translate-y-8/9 z-10 w-3/4 sm:w-1/2">
            <Typography sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
                fontFamily: "LatoGoogle, sans-serif",
            }}>Let's search your DREAM bike together!</Typography>
            <TextField
                placeholder="Try Royal Enfield Himalayan"
                className="bg-white rounded-md w-full"
                value={search}
                size="small"
                focused={false}
                onChange={(e) => setSearch(e.target.value)}
                sx={{padding: "none"}}
            />
        </div>
    );
}

export default Searchbar;
