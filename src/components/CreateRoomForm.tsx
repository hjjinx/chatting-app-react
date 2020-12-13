import classes from "*.module.css";
import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  Icon,
  Input,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import * as React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const CreateRoomForm = () => {
  return (
    <Paper elevation={3} className="createRoomForm">
      <Typography variant="h4" gutterBottom>
        Create a New Chat Room
      </Typography>
      {/* <h2 className="createRoomForm-heading"></h2> */}
      <FormControl className="createRoomForm-formControl">
        <TextField id="createRoomForm-name" label="Your Name" />
        <FormHelperText id="createRoomForm-nameHelper">
          Your name will be displayed to everyone that is in the same room as
          you.
        </FormHelperText>
        <TextField id="createRoomForm-room" label="Room Name" />
        <FormHelperText id="createRoomForm-roomHelper">
          Room name will be displayed in the 'Join a Room' section
        </FormHelperText>
        <Button
          variant="contained"
          color="primary"
          className={"createRoomForm-createButton"}
          endIcon={<AddCircleIcon />}
        >
          Create
        </Button>
      </FormControl>
    </Paper>
  );
};

export default CreateRoomForm;
