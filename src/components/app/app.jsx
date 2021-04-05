import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import PropertyPage from '../property-page/property-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {RoutePath} from '../../const';
import PrivateRoute from '../private-route/private-route';

const App = () => {
  return (
    <Switch>
      <Route path={RoutePath.LOGIN_PAGE} exact>
        <LoginPage />
      </Route>
      <Route path={RoutePath.MAIN_PAGE} exact>
        <MainPage />
      </Route>
      <Route path ={RoutePath.FAVORITES_PAGE} exact>
        <PrivateRoute component={() => <FavoritesPage />} noAuth={() => <Redirect to={RoutePath.LOGIN_PAGE}/>}/>
      </Route>
      <Route path={RoutePath.OFFER_PAGE} exact
        render={(routeProps) => {
          const propertyId = routeProps.match.params.id;

          return (
            <PropertyPage
              propertyId={propertyId}
            />
          );
        }}
      />
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default App;
