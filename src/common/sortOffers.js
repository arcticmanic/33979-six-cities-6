import {sortType} from "../const";

export const sortOffers = (offers, type) => {
  switch (type) {
    case sortType.POPULAR.value:
      return offers;
    case sortType.ASC_PRICE.value:
      return offers.sort(function (a, b) {
        return a.price - b.price;
      });
    case sortType.DESC_PRICE.value :
      return offers.sort(function (a, b) {
        return b.price - a.price;
      });
    case sortType.RATE.value:
      return offers.sort(function (a, b) {
        return b.rating - a.rating;
      });
    default:
      return offers;
  }
};
