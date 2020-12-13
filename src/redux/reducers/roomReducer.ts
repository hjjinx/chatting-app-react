import { initialState } from ".";

const roomReducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "rooms/list":
      return {
        ...state,
        rooms: action.payload,
      };
    default:
      return state;
  }
};

export default roomReducer;
