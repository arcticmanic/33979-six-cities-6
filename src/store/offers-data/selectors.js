import {SortType} from '../../const';
import {sortOffersPopular, sortOffersPriceToHight, sortOffersPriceToLow, sortOffersRate} from '../../common/utils';
import {createSelector} from 'reselect';

const getOffers = (state) => state.DATA.offers;
const getLocation = (state) => state.PAGE.location;
const getSortType = (state) => state.PAGE.sort;

export const getCurrentCityOffers = (offersList, location, sort) => {
  const filtredOffers = offersList.filter((offer) => offer.city.name === location);
  switch (sort) {
    case SortType.POPULAR:
      return filtredOffers.sort(sortOffersPopular);
    case SortType.PRICE_HIGH_TO_LOW:
      return filtredOffers.sort(sortOffersPriceToLow);
    case SortType.PRICE_LOW_TO_HIGH:
      return filtredOffers.sort(sortOffersPriceToHight);
    case SortType.TOP_RATED_FIRST:
      return filtredOffers.sort(sortOffersRate);
    default:
      return filtredOffers;
  }
};

export const getCurrentCityOffersSelector = createSelector(getOffers, getLocation, getSortType, getCurrentCityOffers);
