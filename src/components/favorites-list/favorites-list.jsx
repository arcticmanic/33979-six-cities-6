import React from 'react';
import FavoritesItem from '../favorites-item/favorites-item';
import {getCityFilteredPlaces} from '../../common/utils';
import PropTypes from 'prop-types';
import {offerType} from '../../types/types';
import {useSelector} from 'react-redux';
import {getCityNamesSelector} from '../../store/offers-data/selectors';

const FavoritesList = ({favoritesOffers}) => {
  const cityNames = useSelector((state) => getCityNamesSelector(state));
  const favoriteLocationsOffers = getCityFilteredPlaces(favoritesOffers);
  const favoritesCities = [...new Set(cityNames)].sort();

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
