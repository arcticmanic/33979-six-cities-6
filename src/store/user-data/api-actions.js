import {APIRoutePath, RoutePath, AuthorizationStatus, FetchStatus} from '../../const';
import {setUserName, setUserInfo, requireAuthorization, redirect, setUserAvatar, changeFetchStatus} from './actions';

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutePath.LOGIN)
    .then((response) => dispatch(setUserInfo(response.data.email, response.data[`avatar_url`])))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(changeFetchStatus(FetchStatus.DONE)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutePath.LOGIN, {email, password})
    .then((response) => dispatch(setUserInfo(response.data.email, response.data[`avatar_url`])))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirect(RoutePath.MAIN_PAGE)))
);

export const logout = () => (dispatch, _state, api) => (
  api.get(APIRoutePath.LOGOUT)
    .then(() => dispatch(setUserName(``)))
    .then(() => dispatch(setUserAvatar(``)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);
