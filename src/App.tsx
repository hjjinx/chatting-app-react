import React, { useEffect } from "react";

import MainAppBar from "./components/AppBar";
import SocketService from "./socket.io/socket";
import CreateRoomForm from "./components/CreateRoomForm";
import RoomsList from "./components/RoomsList";

const App = () => {
  useEffect(() => {
    SocketService.registerSocketServerListeners();
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
