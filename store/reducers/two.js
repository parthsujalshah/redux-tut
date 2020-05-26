import { UPDATE_SCREEN_TWO_CLICKS } from '../actions/two';

const initialState = {
  twoClicks: 0
};

const twoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCREEN_TWO_CLICKS:
      const existingClicks = state.twoClicks;
      const updateTwoClicks = existingClicks + 1;
      return { ...state, twoClicks: updateTwoClicks }
    default:
      return state;
  }
};

export default twoReducer;