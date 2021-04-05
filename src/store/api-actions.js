import {APIRoutePath, RoutePath, AuthorizationStatus} from '../const';
import {getCurrentOffer, getOffers, getNearOffers, setUserName, setUserInfo, requireAuthorization, redirect, getComments, setUserAvatar, changeFavoriteStatus} from './action';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoutePath.HOTELS)
    .then(({data}) => dispatch(getOffers(data)))
);

export const fetchCurrentOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutePath.HOTELS}/${id}`)
    .then(({data}) => dispatch(getCurrentOffer(data)))
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutePath.HOTELS}/${id}/nearby`).
    then(({data}) => dispatch(getNearOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutePath.LOGIN)
    .then((response) => dispatch(setUserInfo(response.data.email, response.data[`avatar_url`])))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutePath.LOGIN, {email, password})
    .then((response) => dispatch(setUserInfo(response.data.email, response.data[`avatar_url`])))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirect(RoutePath.MAIN_PAGE)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const logout = () => (dispatch, _state, api) => {
  api.get(APIRoutePath.LOGOUT)
    .then(() => dispatch(setUserName(``)))
    .then(() => dispatch(setUserAvatar(``)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)));
};

export const fetchCommentsList = (id) => (dispatch, _state, api) => {
  api.get(`${APIRoutePath.COMMENTS}/${id}`)
    .then(({data}) => dispatch(getComments(data)));
};

export const sendComment = (id, {commentText: comment, rating}) => (dispatch, _state, api) => {
  api.post(`${APIRoutePath.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(getComments(data)));
};

export const sendFavoriteStatus = (id, favorite) => (dispatch, _state, api) => {
  api.post(`${APIRoutePath.FAVORITE}/${id}/${favorite}`)
    .then(({data}) => dispatch(changeFavoriteStatus(data)))
    .catch(() => {});
};
