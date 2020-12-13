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
    default:
      return state;
  }
};

export default statusReducer;
