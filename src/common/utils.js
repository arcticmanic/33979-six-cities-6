import {CitiesInfo} from "../const";

export const getCityNames = (offers) => {
  return offers.reduce((acc, offer) => {
    return [...acc, offer.city.name];
  }, []);
};

export const getCityFiltredPlaces = (offers) => {
  const cities = Object.keys(CitiesInfo);

  return cities.reduce((acc, city) => {
    const placesInCurrentCity = offers.filter((offer) => {
      return offer[`city`][`name`] === city;
    });
    const currentObject = {
      [city]: placesInCurrentCity
    };
    return Object.assign(
        acc,
        currentObject,
    );
  }, {});
};
