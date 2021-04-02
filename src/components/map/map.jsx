import Leaflet from 'leaflet';
import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types';
import {connect} from 'react-redux';
import {CitiesInfo} from '../../const.js';

import 'leaflet/dist/leaflet.css';

const Map = (props) => {
  const {offers, height, city, activeCardId} = props;

  const mapRef = useRef();

  useEffect(() => {
    const cityCoords = CitiesInfo[city].coords;
    const cityZoom = CitiesInfo[city].zoom;

    mapRef.current = Leaflet.map(`map`, {
      center: cityCoords,
      zoom: cityZoom,
      zoomControl: false,
      marker: true
    });
    mapRef.current.setView(cityCoords, cityZoom);

    Leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

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
      .addTo(mapRef.current)
      .bindPopup(title);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [city, activeCardId, offers]);

  return (
    <div id="map" style={{height: `${height}px`, maxWidth: `1144px`, margin: `auto`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
  height: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  activeCardId: PropTypes.number,
};

const mapStateToProps = ({city}) => ({
  city,
});

export {Map};
export default connect(mapStateToProps, null)(Map);
