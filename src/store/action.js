export const ActionType = {
  CHANGE_CITY: `app/changeCity`,
  POPULATE_OFFER_LIST: `app/populateOfferList`,
  RESET_APP: `app/reset`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  resetApp: () => ({
    type: ActionType.RESET_APP,
  })
};
