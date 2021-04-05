import {CityList, SortType} from '../../const';
import {setLocation, setSort} from './actions';
import {createReducer} from '@reduxjs/toolkit';

export const initialState = {
  location: CityList.Paris,
  sort: SortType.POPULAR
};

const pageData = createReducer(initialState, (builder) => {
  builder.addCase(setLocation, (state, action) => {
    state.location = action.payload;
  });
  builder.addCase(setSort, (state, action) => {
    state.sort = action.payload;
  });
});

export default pageData;
