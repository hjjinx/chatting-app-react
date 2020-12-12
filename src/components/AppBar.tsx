import React from "react";
import { useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import CloseIcon from "@material-ui/icons/Close";
import ErrorIcon from "@material-ui/icons/Error";
import CheckIcon from "@material-ui/icons/Check";
import { CircularProgress } from "@material-ui/core";

const MainAppBar = () => {
  const state = useSelector((state: any) => state);
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
        {state.status.socketState == 0 ? (
          // Connecting..
          <CircularProgress
            style={{ width: 35, height: "auto", color: "#ffc107" }}
          />
        ) : state.status.socketState == 1 ? (
          // Connected.
          <CheckIcon style={{ width: 35, height: "auto", color: "#28a745" }} />
        ) : state.status.socketState == 2 ? (
          // Closing the connection..
          <CircularProgress
            style={{ width: 35, height: "auto", color: "#dc3545" }}
          />
        ) : (
          // Closed..
          <ErrorIcon
            htmlColor="#dc3545"
            style={{ width: 35, height: "auto" }}
          />
        )}
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
