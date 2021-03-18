import React from 'react';
import PropTypes from 'prop-types';

const getClassName = (location, activeLocation) => {
  const baseName = `locations__item-link tabs__item`;

  return location === activeLocation ?
    `${baseName} tabs__item--active` :
    baseName;
};

const LocationItem = (props) => {
  const {location, activeLocation, onLocationClick} = props;

  return (
    <li className="locations__item">
      <a className={getClassName(location, activeLocation)} href="#" onClick={() => {
        onLocationClick(location);
      }}>
        <span>{location}</span>
      </a>
    </li>
  );
};

LocationItem.propTypes = {
  location: PropTypes.string.isRequired,
  activeLocation: PropTypes.string.isRequired,
  onLocationClick: PropTypes.func.isRequired,
};

export default LocationItem;
