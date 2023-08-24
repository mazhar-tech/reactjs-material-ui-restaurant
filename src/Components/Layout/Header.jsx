import "../../Styles/Header.css";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Divider, Drawer } from "@mui/material";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu Drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 , my:2}}
      >
        <FastfoodIcon />
        My Resturent
      </Typography>
      <Divider/>

      <ul className="mobile-navigation">
        <li>
          <Link color="inherit" to={"/"}>HOME</Link>
        </li>
        <li>
          <Link color="inherit" to={"/menu"}>MENU</Link>
        </li>
        <li>
          <Link color="inherit" to={"/about"}>ABOUT</Link>
        </li>
        <li>
          <Link color="inherit" to={"/contact"}>CONTACT</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: "none" } }} onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <FastfoodIcon />
              My Resturent
            </Typography>
            <Box sx={{ display: { xs: "none ", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link color="inherit" to={"/"}> HOME</Link>
                </li>
                <li>
                  <Link color="inherit" to={"/menu"}>MENU</Link>
                </li>
                <li>
                  <Link color="inherit" to={"/about"}>ABOUT </Link>
                </li>
                <li>
                  <Link color="inherit" to={"/contact"}>CONTACT</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": {
                boxSizing: "border-box", width: "240px"
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box  >
        <Toolbar/>
        </Box>
      </Box >
    </>
  );
};

export default Header;
