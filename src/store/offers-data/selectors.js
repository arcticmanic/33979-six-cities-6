import {SortType} from '../../const';
import {sortOffersPopular, sortOffersPriceToHight, sortOffersPriceToLow, sortOffersRate} from '../../common/utils';
import {createSelector} from 'reselect';

const getOffers = (state) => state.DATA.offers;
const getLocation = (state) => state.PAGE.location;
const getSortType = (state) => state.PAGE.sort;
const getFavoriteOffers = (state) => state.DATA.favoriteOffers;

export const getCurrentCityOffers = (offersList, location, sort) => {
  const filteredOffers = offersList.filter((offer) => offer.city.name === location);
  switch (sort) {
    case SortType.POPULAR:
      return filteredOffers.sort(sortOffersPopular);
    case SortType.PRICE_HIGH_TO_LOW:
      return filteredOffers.sort(sortOffersPriceToLow);
    case SortType.PRICE_LOW_TO_HIGH:
      return filteredOffers.sort(sortOffersPriceToHight);
    case SortType.TOP_RATED_FIRST:
      return filteredOffers.sort(sortOffersRate);
    default:
      return filteredOffers;
  }
};

export const getCityNames = (offers) => {
  return offers.reduce((acc, offer) => {
    return [...acc, offer.city.name];
  }, []);
};

export const getCurrentCityOffersSelector = createSelector(getOffers, getLocation, getSortType, getCurrentCityOffers);

export const getCityNamesSelector = createSelector(getFavoriteOffers, getCityNames);
