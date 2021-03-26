import {AuthorizationStatus, CITIES, defaultSortType} from "../const";
import {ActionType} from './action';
import {sortOffers} from "../common/sortOffers";

const initialState = {
  city: CITIES[0],
  cities: CITIES,
  sort: defaultSortType,
  offers: [],
  isOffersLoaded: false,
  nearOffers: [],
  isNearOffersLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
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

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isOffersLoaded: true
      };

    case ActionType.LOAD_NEAR_OFFERS:
      return {
        ...state,
        nearOffers: action.payload,
        isNearOffersLoaded: true,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
  }

  return state;
};

export {reducer};
