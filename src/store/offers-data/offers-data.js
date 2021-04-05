import {changeFavoriteStatus, changeFetchStatus, getOffers} from '../action';
import {createReducer} from '@reduxjs/toolkit';
import {FetchStatus} from "../../const";

const initialState = {
  offers: [],
  isOffersLoaded: false,
  currentOffer: null,
  isOfferLoaded: false,
  isFavoriteStatusChanged: true,
  fetchStatus: FetchStatus.PENDING
};

const newOffersList = (stateOffers, currentOffer) => {
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
  builder.addCase(changeFavoriteStatus, (state, action) => {
    state.offers = newOffersList(state.offers, action.payload);
    state.isFavoriteStatusChanged = true;
  });
  builder.addCase(changeFetchStatus, (state, action) => {
    state.fetchStatus = action.payload;
  });
});

export default offersData;
