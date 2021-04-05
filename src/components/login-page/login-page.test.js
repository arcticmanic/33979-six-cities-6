import {createMemoryHistory} from 'history';
import React from 'react';
import {render, screen} from '@testing-library/react';
import * as redux from 'react-redux';
import {Router} from 'react-router-dom';
import LoginPage from './login-page';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});
test(`Should render LoginPage component correctly`, () => {
  const history = createMemoryHistory();
  history.push(`/login`);
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  render(
      <redux.Provider store={mockStore({USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}})}>
        <Router history={history}>
          <LoginPage />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
  expect(screen.getByText(/Password/i)).toBeInTheDocument();
});
