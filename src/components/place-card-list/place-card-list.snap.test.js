import React from 'react';
import {render} from '@testing-library/react';
import PlaceCardList from './place-card-list';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {AuthorizationStatus, FetchStatus} from '../../const';

const mockStore = configureStore({});
test(`Should render PlaceCardList correctly`, () => {
  jest.spyOn(redux, `useDispatch`);
  jest.spyOn(redux, `useSelector`);
  const {container} = render(
      <redux.Provider store={mockStore({
        USER: {
          authorizationStatus: AuthorizationStatus.AUTH
        },
        DATA: {
          fetchStatus: FetchStatus.DONE,
          offers: []
        },
        PAGE: {location: `Amsterdam`}
      })}>
        <PlaceCardList/>
      </redux.Provider>
  );
  expect(container).toMatchSnapshot();
});
