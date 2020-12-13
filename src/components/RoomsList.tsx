import * as React from "react";
import { useSelector } from "react-redux";
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
} from "@material-ui/core";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import DeleteIcon from "@material-ui/icons/Delete";

const RoomsList = () => {
  const state = useSelector((state: any) => state);
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
        <ListItemSecondaryAction title="Join Room">
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
