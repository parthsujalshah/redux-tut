export const UPDATE_SCREEN_ONE_CLICKS = 'UPDATE_SCREEN_ONE_CLICKS';

export const updateScreenOneClicks = (numberOfClicks) => {
  return { type: UPDATE_SCREEN_ONE_CLICKS, numberOfClicks };
};