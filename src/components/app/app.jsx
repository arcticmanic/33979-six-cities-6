import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import PropertyPage from '../property-page/property-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {RoutePaths} from '../../const';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import reviews from '../../mocks/reviews';

const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={RoutePaths.LOGIN_PAGE}>
          <LoginPage />
        </Route>
        <Route exact path={RoutePaths.MAIN_PAGE}>
          <MainPage />
        </Route>
        <PrivateRoute path={RoutePaths.FAVORITES_PAGE} exact component={FavoritesPage} />
        <Route path={RoutePaths.OFFER_PAGE} exact
          render={(routeProps) => {
            const propertyId = routeProps.match.params.id;

            return (
              <PropertyPage
                reviews={reviews}
                propertyId={propertyId}
                onReview={() => {}}
              />
            );
          }}
        />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
