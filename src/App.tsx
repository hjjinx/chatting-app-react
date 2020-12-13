import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";

import MainAppBar from "./components/AppBar";
import setUpSocketListeners from "./socket.io/socket";
import CreateRoomForm from "./components/CreateRoomForm";
import RoomsList from "./components/RoomsList";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    /* For testing loading design:
    setTimeout(() => {
      const socket = io("localhost:8080", { port: "8080" });
      dispatch({ type: "status/setSocketState", payload: 0 });
      socket.on("connect", () => {
        setTimeout(() => {
          setUpSocketListeners(socket);
          dispatch({ type: "status/setSocketState", payload: 1 });
        }, 2000);
      });
    }, 2000);
    */

    const socket = io("localhost:8080", { port: "8080" });
    dispatch({ type: "status/setSocketState", payload: 0 });
    socket.on("connect", () => {
      setUpSocketListeners(socket);
      dispatch({ type: "status/setSocketState", payload: 1 });
    });
  }, []);
  return (
    <div className="main">
      <MainAppBar></MainAppBar>
      <CreateRoomForm></CreateRoomForm>
      <RoomsList></RoomsList>
    </div>
  );
};

export default App;
