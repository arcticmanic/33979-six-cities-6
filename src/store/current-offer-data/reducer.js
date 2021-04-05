import {changeFavoriteStatus, clearCurrentOffer, getComments, getCurrentOffer, getNearOffers} from './actions';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  currentOffer: null,
  isOfferLoaded: false,
  nearOffers: [],
  isNearOffersLoaded: false,
  comments: [],
  isCommentsLoaded: false,
};

const newOfferList = (stateOffers, currentOffer) => {
  const offerIndex = stateOffers.findIndex((offer) => offer.id === currentOffer.id);
  if (offerIndex === -1) {
    return stateOffers;
  }
  return [...stateOffers.slice(0, offerIndex), currentOffer, ...stateOffers.slice(offerIndex + 1)];
};

const currentOfferData = createReducer(initialState, (builder) => {
  builder.addCase(getCurrentOffer, (state, action) => {
    state.currentOffer = action.payload;
    state.isOfferLoaded = true;
  });
  builder.addCase(getNearOffers, (state, action) => {
    state.nearOffers = action.payload;
    state.isNearOffersLoaded = true;
  });
  builder.addCase(getComments, (state, action) => {
    state.comments = action.payload;
    state.isCommentsLoaded = true;
  });
  builder.addCase(changeFavoriteStatus, (state, action) => {
    state.nearOffers = newOfferList(state.nearOffers, action.payload);
  });
  builder.addCase(clearCurrentOffer, (state) => {
    state.currentOffer = null;
    state.isOfferLoaded = false;
    state.nearOffers = [];
    state.isNearOffersLoaded = false;
    state.comments = [];
    state.isCommentsLoaded = false;
  });
});

export default currentOfferData;
