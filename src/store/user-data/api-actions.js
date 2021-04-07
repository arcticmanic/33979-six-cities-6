import {APIRoutePath, RoutePath, AuthorizationStatus, FetchStatus, HttpCode, ErrorMessage} from '../../const';
import {setUserName, setUserInfo, requireAuthorization, redirect, setUserAvatar, changeFetchStatus} from './actions';
import {notify} from '../../common/utils';

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
    .catch((error) => {
      if (error.response.status === HttpCode.DATA_ERROR) {
        notify(ErrorMessage.SIGN_IN_FAILURE);
      }

      if (error.response.status === HttpCode.NOT_FOUND) {
        notify(ErrorMessage.NO_CONNECTION);
      }
    })
);

export const logout = () => (dispatch, _state, api) => (
  api.get(APIRoutePath.LOGOUT)
    .then(() => dispatch(setUserName(``)))
    .then(() => dispatch(setUserAvatar(``)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch((error) => {
      if (error.response.status === HttpCode.NOT_FOUND) {
        notify(ErrorMessage.NO_CONNECTION);
      }
    })
);
