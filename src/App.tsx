import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";

import MainAppBar from "./components/AppBar";
import setUpSocketListeners from "./socket.io/socket";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const socket = io("localhost:8080", { port: "8080" });
    dispatch({ type: "status/setSocketState", payload: 0 });
    socket.on("connect", () => {
      setUpSocketListeners(socket);
      dispatch({ type: "status/setSocketState", payload: 1 });
    });
  }, []);
  return (
    <div>
      <MainAppBar></MainAppBar>
    </div>
  );
};

export default App;
