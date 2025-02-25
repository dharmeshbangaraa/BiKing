import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField, IconButton, Drawer, List, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TwoWheelerTwoToneIcon from '@mui/icons-material/TwoWheelerTwoTone';
import MopedTwoToneIcon from '@mui/icons-material/MopedTwoTone';
import ElectricMopedTwoToneIcon from '@mui/icons-material/ElectricMopedTwoTone';
import CalculateTwoToneIcon from '@mui/icons-material/CalculateTwoTone';
import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';

interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ search, setSearch }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            BiKing.com
          </Typography>
          <TextField
            label="Search bikes..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="small"
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <IconButton sx={{ paddingX: 2 }}>
            <AddLocationAltTwoToneIcon htmlColor="white" />
          </IconButton>
          <IconButton>
            <PersonTwoToneIcon htmlColor="white" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Navigation */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{ width: 250, "& .MuiDrawer-paper": { width: 250 } }}
      >
        <List>
          {[
            { icon: <TwoWheelerTwoToneIcon />, text: "New Bikes" },
            { icon: <MopedTwoToneIcon />, text: "New Scooter" },
            { icon: <ElectricMopedTwoToneIcon />, text: "Electric" },
            { icon: <CalculateTwoToneIcon />, text: "EMI Calculator" },
          ].map((item, index) => (
            <ListItemButton key={index} onClick={() => toggleDrawer(false)} sx={{ gap: 0 }}>
              <ListItemIcon sx={{ minWidth: 35 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
