import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import FavoritesEmptyPage from '../favorites-empty-page/favorites-empty-page';
import PropertyPage from '../property-page/property-page';
import PropertyNotLoggedPage from '../property-not-logged-page/property-not-logged-page';
import NotFoundPage from '../not-found-page/not-found-page';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
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
          <PropertyPage onReview={() => {}} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
