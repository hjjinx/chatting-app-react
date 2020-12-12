import React from "react";
import { useSelector } from "react-redux";

import ErrorIcon from "@material-ui/icons/Error";
import CheckIcon from "@material-ui/icons/Check";
import { CircularProgress } from "@material-ui/core";

const ConnectionState = () => {
  const state = useSelector((state: any) => state);
  return state.status.socketState == 0 ? (
    // Connecting..
    <CircularProgress style={{ width: 35, height: "auto", color: "#ffc107" }} />
  ) : state.status.socketState == 1 ? (
    // Connected.
    <CheckIcon style={{ width: 35, height: "auto", color: "#28a745" }} />
  ) : state.status.socketState == 2 ? (
    // Closing the connection..
    <CircularProgress style={{ width: 35, height: "auto", color: "#dc3545" }} />
  ) : (
    // Closed..
    <ErrorIcon htmlColor="#dc3545" style={{ width: 35, height: "auto" }} />
  );
};

export default ConnectionState;
