import {AuthorizationStatus} from "../const";
import {ActionCreator} from "./action";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.getOffers(data)))
);

export const fetchNearOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`).
    then(({data}) => dispatch(ActionCreator.getNearOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);
