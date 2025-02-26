import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";


const Searchbar: React.FC = () => {

    const [search, setSearch] = useState("");

    return (

        <div className="absolute top-4/5 left-1/2 transform -translate-x-1/2 -translate-y-4/5 z-10 w-3/4 sm:w-1/2">
            <Typography sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
            }}>Let's search your DREAM bike together!</Typography>
            <TextField
                placeholder="Try Royal Enfield Himalayan"
                className="bg-white rounded-md w-full"
                value={search}
                focused={false}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default Searchbar;
