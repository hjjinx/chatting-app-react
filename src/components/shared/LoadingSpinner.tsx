import { Backdrop, CircularProgress } from "@material-ui/core";
import * as React from "react";

const LoadingSpinner = (props: any) => {
  return (
    <Backdrop open={props.show} style={{ zIndex: 1, color: "#fff" }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingSpinner;
