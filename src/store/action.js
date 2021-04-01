export const ActionType = {
  CHANGE_CITY: `app/changeCity`,
  CHANGE_SORT: `app/changeSort`,
  POPULATE_OFFER_LIST: `app/populateOfferList`,
  SORT_OFFERS: `app/sortOffers`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_NEAR_OFFERS: `data/loadNearOffers`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  CHANGE_USERNAME: `user/changeName`,
  USER_AVATAR: ``,
  REDIRECT: `app/redirect`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
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
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  }),
  setUserName: (userName) => ({
    type: ActionType.CHANGE_USERNAME,
    payload: userName
  }),
  setUserAvatar: (url) => ({
    type: ActionType.USER_AVATAR,
    payload: url
  }),
  redirect: (url) => ({
    type: ActionType.REDIRECT,
    payload: url
  }),
  setSort: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort
  }),
};
