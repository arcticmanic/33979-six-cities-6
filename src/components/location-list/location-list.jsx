import React, {useCallback} from 'react';
import LocationItem from '../location-item/location-item';
import {CityInfo} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import {setLocation} from '../../store/page-data/actions';

const LocationList = () => {
  const dispatch = useDispatch();
  const {location} = useSelector((state) => state.PAGE);

  const handleCityChange = useCallback((evt) => {
    const currentCity = evt.target.innerText;
    dispatch(setLocation(currentCity));
  }, [location]);

  return (
    <ul className="locations__list tabs__list">
      {Object.keys(CityInfo).map((city, id) => (
        <LocationItem
          city={city}
          key={`${city}-${id}`}
          onLocationClick={handleCityChange}
        />
      ))}
    </ul>
  );
};

export default LocationList;
