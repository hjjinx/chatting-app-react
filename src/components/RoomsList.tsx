import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography,
  Button,
  FormControl,
  FormHelperText,
  TextField,
} from "@material-ui/core";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import SocketService from "../socket.io/socket";

const RoomsList = () => {
  const [name, setName] = useState("");
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    let getRoomsInterval = setInterval(() => {
      SocketService.socket?.emit("GET_room/list");
    }, 1000);
    return () => {
      clearInterval(getRoomsInterval);
    };
  }, []);
  const renderListItem = (room: any) => (
    <div className="joinRoomForm-listItem">
      <ListItem divider={true}>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          title={room.participants.length + " Participants"}
          classes={{ secondary: "ListItem-MuiListItemText-secondary" }}
          primary={room.name}
          secondary={room.participants
            .map((x: any) => x.name)
            .reduce((acc: any, curr: any) => acc + ", " + curr)}
        />
        <ListItemSecondaryAction
          title="Join Room"
          onClick={() => {
            if (name == "") {
              dispatch({
                type: "alert/error",
                payload: "Please enter your name",
              });
              setTimeout(() => {
                dispatch({
                  type: "alert/clear",
                });
              }, 2000);
              return;
            }
            dispatch({ type: "status/switchLoader", payload: true });
            SocketService.socket.emit("room/join", { name, room });
            // dispatch({ type: "room/join", payload: room });
          }}
        >
          <IconButton edge="end" aria-label="comments">
            <GroupAddIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );

  return (
    <Paper elevation={3} className="joinRoomForm">
      <Typography variant="h4" gutterBottom>
        Join an Existing Chat Room
      </Typography>
      <FormControl
        className="RoomsList-formControl"
        style={{ marginBottom: 10 }}
      >
        <TextField
          id="RoomsList-name"
          label="Your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <FormHelperText id="RoomsList-nameHelper">
          Your name will be displayed to everyone that is in the same room as
          you.
        </FormHelperText>
      </FormControl>
      {/* <h2 className="createRoomForm-heading">Join an Existing Chat Room</h2> */}
      <List className="joinRoomForm-list">
        {state.rooms.length > 0 ? (
          state.rooms.map(renderListItem)
        ) : (
          <div style={{ textAlign: "center", marginTop: 25 }}>
            <WbIncandescentIcon
              style={{
                width: 100,
                height: "auto",
                display: "block",
                margin: "auto",
              }}
            ></WbIncandescentIcon>{" "}
            <Typography
              variant="h5"
              gutterBottom
              style={{ margin: "10px 10%" }}
            >
              There are no rooms available. Please create one using the above
              form
            </Typography>
          </div>
        )}
      </List>
    </Paper>
  );
};

export default RoomsList;
