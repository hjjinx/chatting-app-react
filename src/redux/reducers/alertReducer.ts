import { initialState } from ".";

const alertReducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "alert/error":
      return {
        ...state,
        alertData: {
          type: "error",
          text: action.payload,
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
