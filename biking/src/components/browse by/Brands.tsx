import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import BrowseByBrands from "../../interfaces/BrowseByBrands";
import { useNavigate } from "react-router-dom";

const Brands: React.FC = () => {
  const navigate = useNavigate();

  const [brands, setBrands] = useState<BrowseByBrands[]>([
    {
      id: 1,
      name: "Royal Enfield",
      img: "/images/bike-brand-logos/royal-enfield-logo.png",
    },
    {
      id: 2,
      name: "Honda",
      img: "/images/bike-brand-logos/honda-logo.png",
    },
    {
      id: 3,
      name: "Suzuki",
      img: "/images/bike-brand-logos/suzuki-logo.png",
    },
    {
      id: 4,
      name: "BMW",
      img: "/images/bike-brand-logos/bmw-logo.jpg",
    },
    {
      id: 5,
      name: "Yamaha",
      img: "/images/bike-brand-logos/yamaha-logo.jpg",
    },
    {
      id: 6,
      name: "Hero",
      img: "/images/bike-brand-logos/hero-logo.jpg",
    },
    {
      id: 7,
      name: "Bajaj",
      img: "/images/bike-brand-logos/bajaj-logo.jpg",
    },
    {
      id: 8,
      name: "Triumph",
      img: "/images/bike-brand-logos/triumph-logo.jpg",
    },
  ]);

  useEffect(() => {
    fetch("https://api.example.com/bikes") // Replace with real API
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((err) => console.error("Error fetching brands:", err));
  }, []);

  return (
    <Box sx={{ flexGrow: 1, paddingY: 2 }}>
      <Grid
        container
        sx={{
          "--Grid-borderWidth": "1px",
          borderTop: "var(--Grid-borderWidth) solid",
          borderLeft: "var(--Grid-borderWidth) solid",
          borderColor: "divider",
          borderBottomLeftRadius: 5,
          borderTopLeftRadius: 5,
          "& > div": {
            borderRight: "var(--Grid-borderWidth) solid",
            borderBottom: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          },
        }}
      >
        {brands.map((brand) => (
          <Grid
            key={brand.id}
            size={{
              xs: 4,
              sm: 6,
              md: 4,
              lg: 3,
            }}
            sx={{
              height: 150, // Sets consistent height
              "@media (max-width: 600px)": {
                height: 120,
              },
            }}
          >
            <div className="text-center flex justify-center lg:p-4">
              <img
                src={brand.img}
                alt={`${brand.name}` + ` logo`}
                className="h-20 w-auto object-contain"
                onClick={() => navigate(`brand/${brand.name}`)}
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold">{brand.name}</h3>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Brands;
