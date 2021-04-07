import {APIRoutePath, FetchStatus} from '../../const';
import {getOffers, changeFavoriteStatus, changeFetchStatus, getFavoriteOffers} from './actions';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoutePath.HOTELS)
    .then(({data}) => dispatch(getOffers(data)))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoutePath.FAVORITE)
    .then(({data}) => dispatch(getFavoriteOffers(data)))
);

export const sendFavoriteStatus = (id, favorite) => (dispatch, _state, api) => (
  api.post(`${APIRoutePath.FAVORITE}/${id}/${favorite}`)
    .then(({data}) => dispatch(changeFavoriteStatus(data)))
    .then(() => dispatch(changeFetchStatus(FetchStatus.DONE)))
    .catch(() => dispatch(changeFetchStatus(FetchStatus.ERROR)))
);
