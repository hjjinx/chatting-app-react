import React from "react";
import { useSelector } from "react-redux";

import { CircularProgress } from "@material-ui/core";
import SignalCellularConnectedNoInternet0BarIcon from "@material-ui/icons/SignalCellularConnectedNoInternet0Bar";
import SignalCellular4BarIcon from "@material-ui/icons/SignalCellular4Bar";

const ConnectionState = () => {
  const state = useSelector((state: any) => state);
  return state.status.socketState == 0 ? (
    // Connecting..
    <CircularProgress
      style={{ width: 35, height: "auto", color: "#ffc107" }}
      title="Connecting.."
    />
  ) : state.status.socketState == 1 ? (
    // Connected.
    <span title="Connected">
      <SignalCellular4BarIcon style={{ width: 35, height: "auto" }} />
    </span>
  ) : state.status.socketState == 2 ? (
    // Closing the connection..
    <CircularProgress
      style={{ width: 35, height: "auto", color: "#dc3545" }}
      title="Disconnecting.."
    />
  ) : (
    // Closed..
    <span title="Error">
      <SignalCellularConnectedNoInternet0BarIcon
        style={{ width: 35, height: "auto" }}
      />
    </span>
  );
};

export default ConnectionState;
