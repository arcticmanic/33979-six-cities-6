import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_OFFERS: `offers/loadOffers`,
  CHANGE_FAVORITE_STATUS: `offers/changeFavoriteStatus`,
  CHANGE_FETCH_STATUS: `data/changeFetchStatus`,
  LOAD_FAVORITE: `offers/loadFavorites`
};

export const getOffers = createAction((ActionType.LOAD_OFFERS), (offers) => ({
  payload: offers
}));

export const getFavoriteOffers = createAction(ActionType.LOAD_FAVORITE, (favoriteOffers) => ({
  payload: favoriteOffers
}));

export const changeFavoriteStatus = createAction(ActionType.CHANGE_FAVORITE_STATUS, (card) => ({
  payload: card
}));

export const changeFetchStatus = createAction(ActionType.CHANGE_FETCH_STATUS, (fetchStatus) => ({
  payload: fetchStatus
}));
