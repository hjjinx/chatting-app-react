/*  WebSocket States:
    WebSocket.CONNECTING	0
    WebSocket.OPEN	        1
    WebSocket.CLOSING	    2
    WebSocket.CLOSED	    3
*/
const initialState = {
  status: { socketState: 3 },
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
  switch (action.type) {
    case "status/setSocketState":
      return {
        ...state,
        status: { ...state.status, socketState: action.payload },
      };
    default:
      return state;
  }
}
