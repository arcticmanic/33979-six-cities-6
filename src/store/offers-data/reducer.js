import {changeFavoriteStatus, changeFetchStatus, getOffers, getFavoriteOffers} from './actions';
import {createReducer} from '@reduxjs/toolkit';
import {FetchStatus} from '../../const';

export const initialState = {
  offers: [],
  isOffersLoaded: false,
  favoriteOffers: [],
  isFavoriteOffersLoaded: false,
  isFavoriteStatusChanged: true,
  fetchStatus: FetchStatus.PENDING
};

const getNewOffersList = (stateOffers, currentOffer) => {
  const offerIndex = stateOffers.findIndex((offer) => offer.id === currentOffer.id);
  if (offerIndex === -1) {
    return stateOffers;
  }
  return [...stateOffers.slice(0, offerIndex), currentOffer, ...stateOffers.slice(offerIndex + 1)];
};

const offersData = createReducer(initialState, (builder) => {
  builder.addCase(getOffers, (state, action) => {
    state.offers = action.payload;
    state.isOffersLoaded = true;
  });
  builder.addCase(getFavoriteOffers, (state, action) => {
    state.favoriteOffers = action.payload;
    state.isFavoriteOffersLoaded = true;
  });
  builder.addCase(changeFavoriteStatus, (state, action) => {
    state.offers = getNewOffersList(state.offers, action.payload);
  });
  builder.addCase(changeFetchStatus, (state, action) => {
    state.fetchStatus = action.payload;
  });
});

export default offersData;
