import React, { useState } from "react";
import { AppBar, Toolbar, TextField, IconButton, Drawer, List, ListItemButton, ListItemText, ListItemIcon, Modal, Fade, Box, Backdrop } from "@mui/material";
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Header: React.FC<HeaderProps> = ({ search, setSearch }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar className="flex justify-between items-center w-full">
          {/* Left Section: Logo */}
          <div className="flex items-center cursor-pointer">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawer(true)} sx={{ marginTop: 1 }} >
              <MenuIcon sx={{
                fontSize: 20, color: "black", "@media (min-width: 1200px)": {
                  fontSize: 30,
                  color: "gray"
                },
              }} />
            </IconButton>
            <img
              src="/images/biking/biking-logo.jpg"
              alt="BiKing Logo"
              className="lg:h-12 lg:w-auto h-10"
            />
          </div>

          {/* Right Section: Search Bar and Icons */}
          <div className="flex items-center lg:gap-3">
            <TextField
              label="Search"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              size="small"
              sx={{
                backgroundColor: "white", borderRadius: 1, "@media (max-width: 600px)": {
                  visibility: "hidden"
                },
              }}
            />
            <IconButton sx={{
              padding: 1,
            }}>
              <AddLocationAltTwoToneIcon onClick={handleOpen} color="primary" />
            </IconButton>
            <IconButton sx={{
              padding: 1,
            }}>
              <PersonTwoToneIcon color="primary" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <TextField
              label="Enter your city"
              variant="outlined"
              size="small"
              sx={{ backgroundColor: "white", borderRadius: 1 }}
            />
          </Box>
        </Fade>
      </Modal>

      {/* Drawer for Navigation */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{ width: 250, "& .MuiDrawer-paper": { width: 250 } }}
      >
        <List>
          {[
            { id: 1, icon: <TwoWheelerTwoToneIcon />, text: "New Bikes" },
            { id: 2, icon: <MopedTwoToneIcon />, text: "New Scooter" },
            { id: 3, icon: <ElectricMopedTwoToneIcon />, text: "Electric" },
            { id: 4, icon: <CalculateTwoToneIcon />, text: "EMI Calculator" },
          ].map((item) => (
            <ListItemButton key={item.id} onClick={() => toggleDrawer(false)} sx={{ gap: 0 }}>
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
