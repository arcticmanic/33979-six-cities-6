export const ActionType = {
  CHANGE_CITY: `app/changeCity`,
  POPULATE_OFFER_LIST: `app/populateOfferList`,
  RESET_APP: `app/reset`,
  SORT_OFFERS: `app/sortOffers`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_NEAR_OFFERS: `data/loadNearOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  resetApp: () => ({
    type: ActionType.RESET_APP,
  }),
  sortOffers: (type) => ({
    type: ActionType.SORT_OFFERS,
    payload: type
  }),
  getOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  getNearOffers: (offers) => ({
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: offers
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  })
};
