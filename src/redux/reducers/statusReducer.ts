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
    case "status/currentRoom/NewMember":
      return {
        ...state,
        status: {
          ...state.status,
          currentRoom: {
            ...state.status.currentRoom,
            participants: [
              ...state.status.currentRoom!.participants,
              { name: action.payload, status: 1 },
            ],
          },
        },
      };
    default:
      return state;
  }
};

export default statusReducer;
