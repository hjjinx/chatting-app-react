import {
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Paper,
  TextField,
} from "@material-ui/core";
import * as React from "react";

const CreateRoomForm = () => {
  return (
    <Paper elevation={3} className="createRoomForm">
      <h2 className="createRoomForm-heading">Create a New Chat Room</h2>
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
      </FormControl>
    </Paper>
  );
};

export default CreateRoomForm;
