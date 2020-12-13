import { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import store from "../redux/store";

class SocketService {
  static socket: Socket;
  static registerSocketServerListeners() {
    this.socket = io("localhost:8080", { port: "8080" });
    store.dispatch({ type: "status/setSocketState", payload: 0 });
    this.socket.on("connect", () => {
      store.dispatch({ type: "status/setSocketId", payload: this.socket.id });
      store.dispatch({ type: "status/setSocketState", payload: 1 });
    });
    this.socket.on("room/list", (e: any) => {
      store.dispatch({ type: "rooms/list", payload: e.rooms });
    });
    this.socket.on("error/roomAlreadyExists", (e: any) => {
      store.dispatch({ type: "alert/error/roomAlreadyExists" });
      setTimeout(() => {
        store.dispatch({ type: "alert/clear" });
      }, 2000);
    });
  }
}

new SocketService();

export default SocketService;
