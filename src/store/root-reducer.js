import {combineReducers} from 'redux';
import offersData from './offers-data/offers-data';
import pageData from './page-data/page-data';
import userData from './user-data/user-data';
import currentOfferData from './current-offer-data/current-offer-data';

export const NameSpace = {
  DATA: `DATA`,
  PAGE: `PAGE`,
  USER: `USER`,
  CURRENT_OFFER: `CURRENT_OFFER`
};

export default combineReducers({
  [NameSpace.DATA]: offersData,
  [NameSpace.PAGE]: pageData,
  [NameSpace.USER]: userData,
  [NameSpace.CURRENT_OFFER]: currentOfferData
});
