import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import MainAppBar from "./components/AppBar";
import SocketService from "./socket.io/socket";
import CreateRoomForm from "./components/CreateRoomForm";
import RoomsList from "./components/RoomsList";
import Alert from "./components/shared/Alert";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import ChatPanel from "./components/ChatPanel";

const App = () => {
  const state = useSelector((state: any) => state);
  useEffect(() => {
    SocketService.registerSocketServerListeners();
  }, []);
  return (
    <div className="main">
      <Alert alertData={state.alertData}></Alert>
      {state.status.loading && <LoadingSpinner></LoadingSpinner>}

      <MainAppBar></MainAppBar>

      {state.status.currentRoom ? (
        <>
          <ChatPanel roomData={state.status.currentRoom}></ChatPanel>
        </>
      ) : (
        <>
          <CreateRoomForm></CreateRoomForm>
          <RoomsList></RoomsList>
        </>
      )}
    </div>
  );
};

export default App;
