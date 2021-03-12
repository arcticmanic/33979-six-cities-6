import leaflet from 'leaflet';
import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types';

import 'leaflet/dist/leaflet.css';

const Map = (props) => {
  const {offers, height} = props;
  const cityFilter = `Amsterdam`;
  const city = [52.38333, 4.9];

  const filteredOffers = offers.filter((offer) => offer.city.name === cityFilter);

  const mapRef = useRef();

  useEffect(() => {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;

    const map = leaflet.map(`map`, {
      center: {
        lat: city[0],
        lng: city[1]
      },
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    filteredOffers.forEach((offer) => {
      const offerCoords = {
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      };

      leaflet
        .marker(offerCoords, {icon})
        .addTo(map);
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div id="map" style={{height: `${height}px`, maxWidth: `1144px`, margin: `auto`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
  height: PropTypes.number.isRequired,
};

export default Map;
