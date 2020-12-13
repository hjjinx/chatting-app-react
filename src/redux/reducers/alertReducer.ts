import { initialState } from ".";

const alertReducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "alert/error/roomAlreadyExists":
      return {
        ...state,
        alertData: {
          type: "error",
          text: "Room Already Exists! Please choose another room name.",
        },
      };
    case "alert/clear":
      return {
        ...state,
        alertData: { type: "", text: "" },
      };
    default:
      return state;
  }
};

export default alertReducer;
