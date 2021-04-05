import {combineReducers} from 'redux';
import offersData from './offers-data/reducer';
import pageData from './page-data/reducer';
import userData from './user-data/reducer';
import currentOfferData from './current-offer-data/reducer';

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
