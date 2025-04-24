import {
  TextField,
  Typography,
  Paper,
  List,
  ListItemButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Bike from "../../interfaces/Bike";
import { useNavigate } from "react-router-dom";

const Searchbar: React.FC = () => {
  const [search, setSearch] = useState("");
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [filtered, setFiltered] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://bikingcom-production.up.railway.app/api/v1/bike/") // Replace with real API
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
        console.log(data);
      })
      .catch((err) => console.error("Error fetching bikes:", err));
  }, []);

  useEffect(() => {
    if (search.trim()) {
      const results: string[] = bikes
        .map((bike) => bike.name)
        .filter(
          (name): name is string =>
            typeof name === "string" &&
            name.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 4);
      setFiltered(results);
      setShowSuggestions(true);
    } else {
      setFiltered([]);
      setShowSuggestions(false);
    }
  }, [search]);

  const handleSelect = (bike: string) => {
    setSearch(bike);
    setShowSuggestions(false);
    navigate(`checkout/${bike}`);
  };

  return (
    <div className="lg:absolute lg:top-8/9 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-8/9 lg:z-10 lg:w-3/4 md:justify-items-center lg:justify-items-normal p-5">
      <Typography
        sx={{
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
        }}
      >
        Let's search your DREAM bike together!
      </Typography>

      <TextField
        placeholder="Try Royal Enfield Himalayan"
        className="bg-white rounded-md w-full"
        value={search}
        size="small"
        focused={false}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ marginTop: 1 }}
      />

      {showSuggestions && filtered.length > 0 && (
        <Paper
          elevation={3}
          sx={{ position: "relative", zIndex: 20, width: "100%", mt: 1 }}
        >
          <List dense>
            {filtered.map((bike, idx) => (
              <ListItemButton key={idx} onClick={() => handleSelect(bike)}>
                <div className="flex justify-between w-full items-center">
                  <span className="text-sm text-gray-800">{bike}</span>
                  <span className="text-blue-600 text-sm font-medium">
                    check out
                  </span>
                </div>
              </ListItemButton>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default Searchbar;
