import * as React from "react";
import { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useDispatch } from "react-redux";

import SocketService from "../socket.io/socket";

const CreateRoomForm = () => {
  const [roomName, setRoomName] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const createRoom = () => {
    if (name == "" || roomName == "") {
      dispatch({
        type: "alert/error",
        payload: "Please enter both your name and room name",
      });
      setTimeout(() => {
        dispatch({
          type: "alert/clear",
        });
      }, 2000);
      return;
    }
    dispatch({ type: "status/switchLoader", payload: true });
    SocketService.socket.emit("room/create", { name, roomName });
  };
  return (
    <Paper elevation={3} className="createRoomForm">
      <Typography variant="h4" gutterBottom>
        Create a New Chat Room
      </Typography>
      <FormControl className="createRoomForm-formControl">
        <TextField
          id="createRoomForm-name"
          label="Your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <FormHelperText id="createRoomForm-nameHelper">
          Your name will be displayed to everyone that is in the same room as
          you.
        </FormHelperText>
        <TextField
          style={{ marginTop: 10 }}
          id="createRoomForm-room"
          label="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <FormHelperText id="createRoomForm-roomHelper">
          Room name will be displayed in the 'Join a Room' section
        </FormHelperText>
        <Button
          variant="contained"
          color="primary"
          className={"createRoomForm-createButton"}
          endIcon={<AddCircleIcon />}
          onClick={createRoom}
        >
          Create
        </Button>
      </FormControl>
    </Paper>
  );
};

export default CreateRoomForm;
