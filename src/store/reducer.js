import {ActionType} from './action';
import offers from '../mocks/offers';
import {sortOffers} from "../common/sortOffers";

const initialState = {
  city: `Paris`,
  offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };

    case ActionType.POPULATE_OFFER_LIST:
      return {
        ...state,
        offers: action.payload
      };

    case ActionType.RESET_APP:
      return {
        ...initialState
      };

    case ActionType.SORT_OFFERS:
      return {
        ...state,
        offers: sortOffers([...state.offers], action.payload)
      };
  }

  return state;
};

export {reducer};
