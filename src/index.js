import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer';
import {createApi} from './api/api';
import {AuthorizationStatus} from './const';
import {checkAuth} from './store/user-data/api-actions';
import {requireAuthorization} from './store/user-data/actions';
import {fetchOffers} from './store/offers-data/api-actions';
import {Router} from 'react-router-dom';
import browserHistory from './browser-history';
import App from './components/app/app';
import {redirect} from './middlewares/redirect';

const api = createApi(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }).concat(redirect)
});

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
    document.querySelector(`#root`)
);
