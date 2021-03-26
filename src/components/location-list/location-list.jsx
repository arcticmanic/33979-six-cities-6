import React from 'react';
import PropTypes from 'prop-types';
import {cityType} from '../../types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import LocationItem from '../location-item/location-item';

const LocationList = (props) => {
  const {locations, city, onLocationClick} = props;

  return (
    <React.Fragment>
      <ul className="locations__list tabs__list">
        {locations.map((location, id) => (
          <LocationItem
            key={id}
            location={location}
            activeLocation={city}
            onLocationClick={onLocationClick}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

LocationList.propTypes = {
  locations: PropTypes.arrayOf(cityType),
  city: PropTypes.string.isRequired,
  onLocationClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  locations: state.cities
});

const mapDispatchToProps = (dispatch) => ({
  onLocationClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {LocationList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
