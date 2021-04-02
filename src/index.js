import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createApi} from './api/api';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth, fetchOffers} from './store/api-actions';
import {reducer} from './store/reducer';
import App from './components/app/app';
import {redirect} from './middlewares/redirect';

const api = createApi(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
