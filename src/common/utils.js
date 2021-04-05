import {CityInfo} from '../const';

export const getCityNames = (offers) => {
  return offers.reduce((acc, offer) => {
    return [...acc, offer.city.name];
  }, []);
};

export const getCityFiltredPlaces = (offers) => {
  const cities = Object.keys(CityInfo);

  return cities.reduce((acc, city) => {
    const placesInCurrentCity = offers.filter((offer) => {
      return offer[`city`][`name`] === city;
    });
    const currentObject = {
      [city]: placesInCurrentCity
    };
    return Object.assign(
        acc,
        currentObject,
    );
  }, {});
};

export const sortOffersPopular = (offerA, offerB) => (offerA.id - offerB.id);

export const sortOffersPriceToLow = (offerA, offerB) => (offerB.price - offerA.price);

export const sortOffersPriceToHight = (offerA, offerB) => (offerA.price - offerB.price);

export const sortOffersRate = (offerA, offerB) => (offerB.rating - offerA.rating);

export const sortCommentsByTime = (commentA, commentB) => (Date.parse(commentB.rating) - Date.parse(commentA.rating));

export const getCurrentCityComments = (comments) => {
  const currentComments = comments.slice();

  if (comments.length < 2) {
    return currentComments;
  } else if (comments.length < 11) {
    return currentComments.sort(sortCommentsByTime);
  } else {
    return currentComments.sort(sortCommentsByTime).slice(0, 10);
  }
};
