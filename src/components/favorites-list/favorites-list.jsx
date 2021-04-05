import React from 'react';
import FavoritesItem from '../favorites-item/favorites-item';
import {getCityNames, getCityFiltredPlaces} from '../../common/utils';
import PropTypes from 'prop-types';
import {offerType} from '../../types';

const FavoritesList = ({favoritesOffers}) => {
  const favoriteLocationsOffers = getCityFiltredPlaces(favoritesOffers);
  const favoritesCities = [...new Set(getCityNames(favoritesOffers))].sort();

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoritesCities.map((city, i) => <FavoritesItem offers={favoriteLocationsOffers[city]} city={city} key={`${city}-${i}`}/>)}
      </ul>
    </section>
  );
};

FavoritesList.propTypes = {
  favoritesOffers: PropTypes.arrayOf(offerType),
};

export default FavoritesList;
