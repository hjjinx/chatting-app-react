import { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import store from "../redux/store";
import {serverURI} from '../env.json';
class SocketService {
  static socket: Socket;
  static registerSocketServerListeners() {
    this.socket = io(serverURI, {
      port: "8080",
      // port: "80",
      // path: "/api/chat-app/",
    });
    store.dispatch({ type: "status/setSocketState", payload: 0 });
    this.socket.on("connect", () => {
      store.dispatch({ type: "status/setSocketId", payload: this.socket.id });
      store.dispatch({ type: "status/setSocketState", payload: 1 });
    });
    this.socket.on("disconnect", () => {
      store.dispatch({ type: "status/setSocketState", payload: 3 });
    });
    this.socket.on("room/list", (e: any) => {
      store.dispatch({ type: "rooms/list", payload: e.rooms });
    });
    this.socket.on("error/roomAlreadyExists", (e: any) => {
      store.dispatch({
        type: "alert/error",
        payload: "Room Already Exists! Please choose another room name.",
      });
      store.dispatch({ type: "status/switchLoader", payload: false });
      setTimeout(() => {
        store.dispatch({ type: "alert/clear" });
      }, 2000);
    });

    this.socket.on("room/joined", (e: any) => {
      store.dispatch({ type: "status/setCurrentRoom", payload: e.room });
      store.dispatch({ type: "status/switchLoader", payload: false });
    });

    this.socket.on("room/participantsUpdate", (e: any) => {
      store.dispatch({
        type: "status/currentRoom/setParticipants",
        payload: e,
      });
    });

    this.socket.on("room/messagesUpdate", (e: any) => {
      store.dispatch({
        type: "status/currentRoom/setMessages",
        payload: e,
      });
    });
  }
}

new SocketService();

export default SocketService;
