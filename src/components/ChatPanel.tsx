import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChatFeed, Message } from "react-chat-ui";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  TextField,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import SocketService from "../socket.io/socket";

const ChatPanel = (props: any) => {
  const state = useSelector((state: any) => state);
  const [input, setInput] = useState("");
  const sendMessage = (e: any) => {
    if (e.key == "Enter") {
      if (input == "") return;

      SocketService.socket.emit("room/newMessage", {
        text: input,
        id: state.status.currentRoom.name,
        timestamp: new Date(),
      });
      setInput("");
    }
  };

  useEffect(() => {
    document.getElementById("chat-panel")?.scrollIntoView(false);
  }, [state.status.currentRoom.messages]);

  return (
    <div>
      <div className="chatPanel">
        <div className="chatPanel-leftPanel">
          <Typography
            variant="h5"
            style={{ margin: "10px auto 5px", textAlign: "center" }}
          >
            {props.roomData.participants.length} Participants
          </Typography>
          <span className="chatPanel-participantList-divider"></span>
          <List className="chatPanel-participantList">
            {props.roomData.participants.map((x: any, i: number) => {
              return (
                <ListItem>
                  <ListItemIcon>
                    <PersonIcon
                      style={{
                        fill: x.color,
                        width: 27,
                        height: "auto",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={x.name} secondary={"Online"} />
                </ListItem>
              );
            })}
          </List>
        </div>
        <div className="chatPanel-rightPanel">
          <div className="chatPanel-chatSection">
            <ChatFeed
              messages={state.status.currentRoom.messages.map(
                (x: any) =>
                  new Message({
                    id: x.sender == state.status.socketId ? 0 : 1,
                    message: x.text,
                  })
              )}
            ></ChatFeed>
          </div>
          <div className="chatPanel-inputSection">
            <TextField
              id="standard-basic"
              placeholder="Type a Message"
              fullWidth
              onChange={(e) => setInput(e.target.value)}
              value={input}
              onKeyDown={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
