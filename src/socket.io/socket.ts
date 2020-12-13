import { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import store from "../redux/store";

class SocketService {
  static socket: Socket;
  static registerSocketServerListeners() {
    this.socket = io("localhost:8080", { port: "8080" });
    store.dispatch({ type: "status/setSocketState", payload: 0 });
    this.socket.on("connect", () => {
      store.dispatch({ type: "status/setSocketState", payload: 1 });
    });
  }
}

new SocketService();

export default SocketService;
