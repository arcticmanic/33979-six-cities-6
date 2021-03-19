import React from 'react';
import PropTypes from 'prop-types';

const getClassName = (location, activeLocation) => {
  const baseName = `locations__item-link tabs__item`;

  return `${baseName} ${location === activeLocation ? `tabs__item--active` : ``}`;
};

const LocationItem = ({location, activeLocation, onLocationClick}) => {
  return (
    <li className="locations__item">
      <a className={getClassName(location, activeLocation)} href="#" onClick={(evt) => {
        evt.preventDefault();
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
