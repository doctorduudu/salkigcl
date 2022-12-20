import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CallIcon from "@mui/icons-material/Call";
import Logo from "../img/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";

const NavBar = () => {
  const [sideBarOpened, SetSideBarOpened] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    SetSideBarOpened({ ...sideBarOpened, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}{" "}
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div className="nav-bar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                height="35px"
                width="35px"
                style={{ margin: "0 7px" }}
              />
            </Link>
            <Typography
              component={Link}
              variant="h6"
              to="/"
              sx={{ flexGrow: 1 }}
              className="navbar-brand"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bolder",
                fontFamily: "Helvetica",
              }}
            >
              SALKI GCL
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <a
                href="https://web.facebook.com/profile.php?id=100087392290407"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon fontSize="large" color="secondary" />
              </a>
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <a href="#contact">
                <CallIcon fontSize="large" color="secondary" />
              </a>
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* <div>
          {["right"].map((anchor) => (
            <div key={anchor}>
              <SwipeableDrawer
                anchor={anchor}
                open={sideBarOpened[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </div>
          ))}
        </div> */}
      </Box>
    </div>
  );
};

export default NavBar;
