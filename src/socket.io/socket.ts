import { Socket } from "socket.io-client";

const setUpSocketListeners = (socket: Socket) => {
  console.log(socket);
  socket.on("socket", console.log);
};

export default setUpSocketListeners;
