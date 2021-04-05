import {SortType} from '../../const';
import {sortOffersPopular, sortOffersPriceToHight, sortOffersPriceToLow, sortOffersRate} from '../../common/utils';

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
