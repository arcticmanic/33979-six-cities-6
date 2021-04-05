import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: `page/changeLocation`,
  CHANGE_SORT: `page/changeSort`,
  REDIRECT: `page/redirect`,
};

export const setLocation = createAction(ActionType.CHANGE_CITY, (location) => ({
  payload: location
}));

export const setSort = createAction(ActionType.CHANGE_SORT, (sort) => ({
  payload: sort
}));

export const redirect = createAction(ActionType.REDIRECT, (url) => ({
  payload: url
}));
