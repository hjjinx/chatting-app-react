import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import ConnectionState from "./shared/ConnectionState";

const MainAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          style={{ marginRight: 2 }}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Chat
        </Typography>
        <ConnectionState />
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
