import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import "./styles.css";

import DrawerComponent from "./drawer";
import AltCard from "../AltCard";

import griaLogoSVG from "../../assets/gria-logo-topbar.f3a2419c.svg";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const displayDesktop = () => {
    return (
      <Toolbar className="toolbar">
        <Typography>
          <img className="appbar-logo" src={griaLogoSVG} alt="logo gria" />
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className="nav-link-container">
            <Link to="/vagas" className="nav-link" >Vagas</Link>
            <Link to="/login" className="nav-link">LOGIN</Link>
          </div>
        )}
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className="gria-appbar">{displayDesktop()}</AppBar>
    </header>
  );
}
