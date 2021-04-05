import React from 'react';
import LocationItem from '../location-item/location-item';
import {CityList} from '../../const';
import {useDispatch} from 'react-redux';
import {setLocation} from '../../store/action';

const LocationList = () => {
  const dispatch = useDispatch();

  const handleCityChange = (evt) => {
    const currentCity = evt.target.innerText;
    dispatch(setLocation(currentCity));
  };

  return (
    <ul className="locations__list tabs__list">
      {Object.keys(CityList).map((city, id) => (
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
