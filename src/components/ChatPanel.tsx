import React, { useState } from "react";
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

const ChatPanel = (props: any) => {
  const [input, setInput] = useState("");
  const sendMessage = (e: any) => {
    if (e.key == "Enter") {
      console.log("Sending the message: " + input);
    }
  };
  return (
    <div>
      <div className="chatPanel">
        <div className="chatPanel-leftPanel">
          <Typography
            variant="h5"
            gutterBottom
            style={{ margin: "10px auto 5px", textAlign: "center" }}
          >
            Participants
          </Typography>
          <List>
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
                  <ListItemText primary={x.name} secondary={"Secondary text"} />
                </ListItem>
              );
            })}
          </List>
        </div>
        <div className="chatPanel-rightPanel">
          <div className="chatPanel-chatSection">
            <ChatFeed
              messages={[
                new Message({
                  id: 1,
                  message: "I'm the recipient! (The person you're talking to)",
                }), // Gray bubble
                new Message({ id: 0, message: "I'm you -- the blue bubble!" }),
              ]}
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
