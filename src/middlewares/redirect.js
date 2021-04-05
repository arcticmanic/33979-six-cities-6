import browserHistory from '../browser-history';
import {ActionType} from '../store/page-data/actions';

export const redirect = () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
