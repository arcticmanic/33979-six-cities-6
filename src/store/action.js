import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: `page/changeCity`,
  CHANGE_SORT: `page/changeSort`,
  REDIRECT: `page/redirect`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_CURRENT_OFFER: `current/loadCurrentOffer`,
  LOAD_NEAR_OFFERS: `current/loadNearOffers`,
  LOAD_COMMENTS: `current/loadOfferComments`,
  CLEAR_CURRENT_STATE: `current/clearCurrentState`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  CHANGE_USERNAME: `user/changeName`,
  SET_USER_AVATAR: `user/changeAvatar`,
  SET_USER_INFO: `user/changeUserInfo`,
  CHANGE_FAVORITE_STATUS: `offers/changeFavoriteStatus`,
  CHANGE_FETCH_STATUS: `data/changeFetchStatus`
};

export const setLocation = createAction(ActionType.CHANGE_CITY, (location) => ({
  payload: location
}));

export const setSort = createAction(ActionType.CHANGE_SORT, (sort) => ({
  payload: sort
}));

export const getOffers = createAction((ActionType.LOAD_OFFERS), (offers) => ({
  payload: offers
}));

export const getCurrentOffer = createAction(ActionType.LOAD_CURRENT_OFFER, (offer) => ({
  payload: offer
}));

export const getNearOffers = createAction(ActionType.LOAD_NEAR_OFFERS, (offers) => ({
  payload: offers
}));

export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION, (status) => ({
  payload: status
}));

export const setUserName = createAction(ActionType.CHANGE_USERNAME, (userName) => ({
  payload: userName
}));

export const setUserInfo = createAction(ActionType.SET_USER_INFO, (userName, userAvatar) => ({
  payload: {
    userName,
    userAvatar
  }
}));

export const setUserAvatar = createAction(ActionType.SET_USER_AVATAR, (url) => ({
  payload: url
}));

export const redirect = createAction(ActionType.REDIRECT, (url) => ({
  payload: url
}));

export const getComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments
}));

export const changeFavoriteStatus = createAction(ActionType.CHANGE_FAVORITE_STATUS, (offer) => ({
  payload: offer
}));

export const clearCurrentOffer = createAction(ActionType.CLEAR_CURRENT_STATE);

export const changeFetchStatus = createAction(ActionType.CHANGE_FETCH_STATUS, (fetchStatus) => ({
  payload: fetchStatus
}));
