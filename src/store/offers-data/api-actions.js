import {APIRoutePath, FetchStatus, HttpCode, ErrorMessage} from '../../const';
import {getOffers, changeFavoriteStatus, changeFetchStatus, getFavoriteOffers} from './actions';
import {notify} from '../../common/utils';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoutePath.HOTELS)
    .then(({data}) => dispatch(getOffers(data)))
    .catch((error) => {
      if (error.response.status === HttpCode.DATA_ERROR) {
        notify(ErrorMessage.NO_CONNECTION);
      }

      if (error.response.status === HttpCode.NOT_FOUND) {
        notify(ErrorMessage.NO_CONNECTION);
      }
    })
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoutePath.FAVORITE)
    .then(({data}) => dispatch(getFavoriteOffers(data)))
    .catch((error) => {
      if (error.response.status === HttpCode.DATA_ERROR) {
        notify(ErrorMessage.NO_CONNECTION);
      }

      if (error.response.status === HttpCode.NOT_FOUND) {
        notify(ErrorMessage.NO_CONNECTION);
      }
    })
);

export const sendFavoriteStatus = (id, favorite) => (dispatch, _state, api) => (
  api.post(`${APIRoutePath.FAVORITE}/${id}/${favorite}`)
    .then(({data}) => dispatch(changeFavoriteStatus(data)))
    .then(() => dispatch(changeFetchStatus(FetchStatus.DONE)))
    .catch(() => dispatch(changeFetchStatus(FetchStatus.ERROR)))
);
