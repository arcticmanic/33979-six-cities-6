import Leaflet from 'leaflet';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types';
import {CityInfo} from '../../const.js';
import {useSelector} from 'react-redux';

import 'leaflet/dist/leaflet.css';

const Map = ({offers, height, activeCardId}) => {
  const {location: city} = useSelector((state) => state.PAGE);

  useEffect(() => {
    const cityCoords = CityInfo[city].coords;
    const cityZoom = CityInfo[city].zoom;

    const mapView = Leaflet.map(`map`, {
      center: cityCoords,
      zoom: cityZoom,
      zoomControl: false,
      marker: true
    });

    mapView.setView(cityCoords, cityZoom);

    Leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapView);

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
      .addTo(mapView)
      .bindPopup(title);
    });

    return () => {
      mapView.remove();
    };
  }, [city, activeCardId, offers]);

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
