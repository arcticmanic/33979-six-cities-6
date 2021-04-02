import React from 'react';
import PropTypes from 'prop-types';
import FavoritesPlace from '../favorites-place/favorites-place';
import {offerType} from '../../types';

const FavoritesItem = ({city, offers}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavoritesPlace offer={offer} key={offer[`id`]}/>) }
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerType),
};

export default FavoritesItem;
