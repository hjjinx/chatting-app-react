import React from "react";
import { ChatFeed, Message } from "react-chat-ui";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

const getPersonIconColor = (x: string) => {
  x = x.toLowerCase();
  let total = 0;
  for (let char of x) {
    total += char.charCodeAt(0);
  }
  return `hsl(${total}, 50%, 50%)`;
};

const ChatPanel = (props: any) => {
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
                        fill: getPersonIconColor(x.name),
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
          <div className="chatPanel-inputSection">{/* <input></input> */}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
