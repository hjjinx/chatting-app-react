import React, { useEffect } from "react";
import { io } from "socket.io-client";

import MainAppBar from "./components/AppBar";
import setUpSocketListeners from "./socket.io/socket";

function App() {
  useEffect(() => {
    const socket = io("localhost:8080", { port: "8080" });
    socket.on("connect", () => {
      setUpSocketListeners(socket);
    });
  }, []);
  return (
    <div>
      <MainAppBar></MainAppBar>
    </div>
  );
}

export default App;
