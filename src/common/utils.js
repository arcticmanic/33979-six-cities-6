import {CityInfo, CommentSettings} from '../const';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getCityFilteredPlaces = (offers) => {
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

  if (comments.length < CommentSettings.LOWER_THRESHOLD_COMMENTS_COUNT) {
    return currentComments;
  } else if (comments.length < CommentSettings.HIGHER_THRESHOLD_COMMENTS_COUNT) {
    return currentComments.sort(sortCommentsByTime);
  } else {
    return currentComments.sort(sortCommentsByTime).slice(0, CommentSettings.COMMENTS_PER_PAGE);
  }
};

export const notify = (message) => toast(message);
