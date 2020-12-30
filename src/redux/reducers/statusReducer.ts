import { initialState } from ".";

const statusReducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "status/setSocketState":
      return {
        ...state,
        status: { ...state.status, socketState: action.payload },
      };
    case "status/setSocketId":
      return {
        ...state,
        status: { ...state.status, setSocketId: action.payload },
      };
    case "status/switchLoader":
      return {
        ...state,
        status: { ...state.status, loading: action.payload },
      };
    case "status/setCurrentRoom":
      return {
        ...state,
        status: { ...state.status, currentRoom: action.payload },
      };
    case "status/currentRoom/setParticipants":
      return {
        ...state,
        status: {
          ...state.status,
          currentRoom: {
            ...state.status.currentRoom,
            participants: action.payload,
          },
        },
      };
    default:
      return state;
  }
};

export default statusReducer;
