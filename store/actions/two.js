export const UPDATE_SCREEN_TWO_CLICKS = 'UPDATE_SCREEN_TWO_CLICKS';

export const updateTwoScreenClicks = (numberOfClicks) => {
  return { type: UPDATE_SCREEN_TWO_CLICKS, numberOfClicks };
};