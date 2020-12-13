import roomReducer from "./roomReducer";
import statusReducer from "./statusReducer";

/*  WebSocket States:
    WebSocket.CONNECTING	0
    WebSocket.OPEN	        1
    WebSocket.CLOSING	    2
    WebSocket.CLOSED	    3
*/
export const initialState = {
  alertData: { type: "", text: "" },
  status: { socketState: 3, socketId: "" },
  rooms: [
    // {
    //   name: "Test Room",
    //   participants: [
    //     { name: "Test User 1", status: { socketState: 1 } },
    //     { name: "Test User 2", status: { socketState: 1 } },
    //     { name: "Test User 3", status: { socketState: 1 } },
    //     { name: "Test User 4", status: { socketState: 1 } },
    //     { name: "Test User 4", status: { socketState: 1 } },
    //     { name: "Test User 4", status: { socketState: 1 } },
    //     { name: "Test User 4", status: { socketState: 1 } },
    //   ],
    //   messages: [{ text: "Hi!", timestamp: new Date() }],
    // },
  ],
};

export default function rootReducer(state = initialState, action: any) {
  if (action.type.startsWith("status")) return statusReducer(state, action);
  else if (action.type.startsWith("rooms")) return roomReducer(state, action);
  else if (action.type.startsWith("alert")) return roomReducer(state, action);
  else return state;
}
