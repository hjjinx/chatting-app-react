import { Backdrop, CircularProgress } from "@material-ui/core";
import * as React from "react";

const LoadingSpinner = () => {
  return (
    <Backdrop open={true} style={{ zIndex: 1, color: "#fff" }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingSpinner;
