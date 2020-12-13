import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import MainAppBar from "./components/AppBar";
import SocketService from "./socket.io/socket";
import CreateRoomForm from "./components/CreateRoomForm";
import RoomsList from "./components/RoomsList";
import Alert from "./components/shared/Alert";

const App = () => {
  const state = useSelector((state: any) => state);
  useEffect(() => {
    SocketService.registerSocketServerListeners();
  }, []);
  return (
    <div className="main">
      <Alert alertData={state.alertData}></Alert>
      <MainAppBar></MainAppBar>
      <CreateRoomForm></CreateRoomForm>
      <RoomsList></RoomsList>
    </div>
  );
};

export default App;
