import {APIRoutePaths, RoutePaths, AuthorizationStatus} from "../const";
import {ActionCreator} from "./action";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoutePaths.HOTELS)
    .then(({data}) => dispatch(ActionCreator.getOffers(data)))
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutePaths.HOTELS}/${id}/nearby`).
    then(({data}) => dispatch(ActionCreator.getNearOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutePaths.LOGIN)
    .then((response) => {
      dispatch(ActionCreator.setUserName(response.data.email));
      return response;
    })
    .then((response) => {
      dispatch(ActionCreator.setUserAvatar(response.data[`avatar_url`]));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutePaths.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.setUserName(email)))
    .then(() => dispatch(ActionCreator.redirect(RoutePaths.MAIN_PAGE)))
    .catch(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const logout = () => (dispatch, _state, api) => {
  api.get(APIRoutePaths.LOGOUT)
    .then(() => dispatch(ActionCreator.setUserName(``)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)));
};

export const fetchCommentsList = (id) => (dispatch, _state, api) => {
  api.get(`${APIRoutePaths.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.getComments(data)));
};

export const sendComment = (id, {commentText: comment, rating}) => (dispatch, _state, api) => {
  api.post(`${APIRoutePaths.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.getComments(data)));
};
