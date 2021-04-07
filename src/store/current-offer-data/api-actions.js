import {APIRoutePath, FetchStatus, ErrorMessage, HttpCode} from '../../const';
import {getCurrentOffer, setLocation, getNearOffers, getComments, changeFetchStatus, changeFavoriteStatus} from './actions';
import {notify} from '../../common/utils';

export const fetchCurrentOffer = (id) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(`${APIRoutePath.HOTELS}/${id}`),
    api.get(`${APIRoutePath.HOTELS}/${id}/nearby`),
    api.get(`${APIRoutePath.COMMENTS}/${id}`)
  ])
  .then(([offer, nearBy, comments]) => {
    dispatch(getCurrentOffer(offer.data));
    dispatch(setLocation(offer.data.city.name));
    dispatch(getNearOffers(nearBy.data));
    dispatch(getComments(comments.data));
  })
  .then(() => dispatch(changeFetchStatus(FetchStatus.DONE)))
  .catch((error) => {
    dispatch(changeFetchStatus(FetchStatus.ERROR));

    if (error.response.status === HttpCode.DATA_ERROR) {
      notify(ErrorMessage.NO_CONNECTION);
    }

    if (error.response.status === HttpCode.NOT_FOUND) {
      notify(ErrorMessage.NO_CONNECTION);
    }
  })
);

export const sendComment = (id, {commentText: comment, rating}) => (dispatch, _state, api) => (
  api.post(`${APIRoutePath.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(getComments(data)))
    .then(() => dispatch(changeFetchStatus(FetchStatus.DONE)))
    .catch((error) => {
      dispatch(changeFetchStatus(FetchStatus.ERROR));

      if (error.response.status === HttpCode.DATA_ERROR) {
        notify(ErrorMessage.NO_CONNECTION);
      }

      if (error.response.status === HttpCode.NOT_FOUND) {
        notify(ErrorMessage.NO_CONNECTION);
      }
    })
    .finally(() => setTimeout(() => (dispatch(changeFetchStatus(FetchStatus.PENDING))), 5000))
);

export const sendFavoriteStatus = (id, favorite) => (dispatch, _state, api) => (
  api.post(`${APIRoutePath.FAVORITE}/${id}/${favorite}`)
    .then(({data}) => {
      dispatch(changeFavoriteStatus(data));
      dispatch(getCurrentOffer(data));
    })
    .then(() => dispatch(changeFetchStatus(FetchStatus.DONE)))
    .catch(() => dispatch(changeFetchStatus(FetchStatus.ERROR)))
);
