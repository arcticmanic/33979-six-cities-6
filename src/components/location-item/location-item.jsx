import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const LocationItem = ({city, onLocationClick}) => {
  const {location: currentCity} = useSelector((state) => state.PAGE);

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`} href="#" onClick={onLocationClick}>
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationItem.propTypes = {
  city: PropTypes.string.isRequired,
  onLocationClick: PropTypes.func.isRequired,
};

export default LocationItem;
