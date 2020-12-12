/*  WebSocket States:
    WebSocket.CONNECTING	0
    WebSocket.OPEN	        1
    WebSocket.CLOSING	    2
    WebSocket.CLOSED	    3
*/
const initialState = {
  status: { socketState: 3 },
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
