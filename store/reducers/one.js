import { UPDATE_SCREEN_ONE_CLICKS } from "../actions/one";

const initialState = {
  oneClicks: 0
}

const oneReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCREEN_ONE_CLICKS:
      const existingClicks = state.oneClicks;
      const updatedOneClicks = existingClicks + 1;
      return { ...state, oneClicks: updatedOneClicks };
    default:
      return state;
  }
}

export default oneReducer;