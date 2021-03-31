import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import PropertyPage from '../property-page/property-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {RoutePaths} from '../../const';
import reviews from '../../mocks/reviews';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={RoutePaths.MAIN_SCREEN}>
          <MainPage />
        </Route>
        <Route exact path={RoutePaths.LOGIN_SCREEN}>
          <LoginPage />
        </Route>
        <Route path={RoutePaths.FAVORITES_SCREEN} exact>
          <FavoritesPage />
        </Route>
        <Route path={RoutePaths.OFFER_SCREEN} exact
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
    </BrowserRouter>
  );
};

export default App;
