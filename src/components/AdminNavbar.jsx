import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { cyan } from '@mui/material/colors';

import { useLocation } from "react-router-dom";
const drawerWidth = 240;

const navColor = cyan[300]

const AdminNavbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center"}}>
      <Typography variant="h6" sx={{ my: 4}}>
        <Link to="/AdminDashboard">
          YUKIMITO
        </Link>
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton sx={{ flexDirection: 'column', gap: 5, fontSize: 20}}>
            <Link to="/AdminManageContent">MANAGE CONTENT</Link>
            <Link to="/AdminCalendar">CALENDAR</Link>
            <Link to="/AdminInventory">INVENTORY</Link>
            <Link to="/AdminVaccine">VACCINE</Link>
            <Link to="/AdminBooking">BOOKING</Link>
            <Link to="/AdminClient">CLIENT</Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );


  const container =
    window !== undefined ? () => window().document.body : undefined;

  const location = useLocation();

  if (location.pathname === "/LoginPage") {
    return null;
  }

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: navColor }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/AdminDashboard" className="site-title">
                YUKIMITO LOGO
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button sx={{ color: "#FFFFFF", gap: 8, fontSize: 20 }}>
                <Link to="/AdminManageContent">MANAGE CONTENT</Link>
                <Link to="/AdminCalendar">CALENDAR</Link>
                <Link to="/AdminInventory">INVENTORY</Link>
                <Link to="/AdminVaccine">VACCINE</Link>
                <Link to="/AdminBooking">BOOKING</Link>
                <Link to="/AdminClient">CLIENT</Link>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
};

AdminNavbar.propTypes = {

  window: PropTypes.func,
};



export default AdminNavbar;
