import React from "react";

import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props: any) => {
  return (
    <Snackbar
      open={props.alertData.text != ""}
      style={{}}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      key={1}
    >
      <MuiAlert elevation={6} variant="filled" severity="error">
        {props.alertData.text}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
