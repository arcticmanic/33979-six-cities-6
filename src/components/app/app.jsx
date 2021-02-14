import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import MainEmptyPage from '../main-empty-page/main-empty-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import FavoritesEmptyPage from '../favorites-empty-page/favorites-empty-page';
import PropertyPage from '../property-page/property-page';
import PropertyNotLoggedPage from '../property-not-logged-page/property-not-logged-page';
import NotFoundPage from '../not-found-page/not-found-page';

const App = (props) => {
  const {placesCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage placesCount={placesCount} />
        </Route>
        <Route exact path="/dev-main-empty">
          <MainEmptyPage />
        </Route>
        <Route exact path="/dev-favorites-empty">
          <FavoritesEmptyPage />
        </Route>
        <Route exact path="/dev-property-not-logged">
          <PropertyNotLoggedPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/offer/:id">
          <PropertyPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
