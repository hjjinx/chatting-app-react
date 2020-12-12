import { io } from "socket.io-client";
import { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./App.css";

function App() {
  useEffect(() => {
    const socket = io("localhost:8080", { port: 8080 });
    socket.on("connect", () => {
      console.log(socket);
      socket.on("socket", console.log);
    });
  }, []);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          style={{ marginRight: 2 }}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Chat
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default App;
