import Leaflet from 'leaflet';
import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types';
import {CityInfo} from '../../const.js';
import {useSelector} from 'react-redux';

import 'leaflet/dist/leaflet.css';

const Map = ({offers, height, activeCardId}) => {
  const {location: city} = useSelector((state) => state.PAGE);
  const map = useRef();

  useEffect(() => {
    const cityCoords = CityInfo[city].coords;
    const cityZoom = CityInfo[city].zoom;

    map.current = Leaflet.map(`map`, {
      center: cityCoords,
      zoom: cityZoom,
      zoomControl: false,
      marker: true
    });

    map.current.setView(cityCoords, cityZoom);

    Leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map.current);

    return () => {
      map.current.remove();
    };
  }, [city]);

  useEffect(() => {
    offers.forEach(({id, location, title}) => {
      const customIcon = Leaflet.icon({
        iconUrl: id === activeCardId ? `./img/pin-active.svg` : `./img/pin.svg`,
        iconSize: [30, 30]
      });

      Leaflet.marker({
        lat: location.latitude,
        lng: location.longitude
      }, {
        icon: customIcon
      })
      .addTo(map.current)
      .bindPopup(title);
    });
  }, [activeCardId, offers]);

  return (
    <div id="map" style={{height: `${height}px`, maxWidth: `1144px`, margin: `auto`}}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
  height: PropTypes.number.isRequired,
  activeCardId: PropTypes.number,
};

export default Map;
