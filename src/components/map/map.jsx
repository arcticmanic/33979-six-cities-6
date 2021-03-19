import Leaflet from 'leaflet';
import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types';
import {connect} from 'react-redux';
import {MAP_DEFAULT_COORDS} from '../../const';

import 'leaflet/dist/leaflet.css';

const Map = (props) => {
  const {offers, height, city, activeCardId} = props;
  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  const mapCityCoords = filteredOffers.length ?
    filteredOffers[0].city.location :
    MAP_DEFAULT_COORDS;

  const mapRef = useRef();

  useEffect(() => {
    const icon = Leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    mapRef.current = Leaflet.map(`map`, {
      center: {
        lat: mapCityCoords.latitude,
        lng: mapCityCoords.longitude
      },
      zoom: mapCityCoords.zoom,
      zoomControl: false,
      marker: true
    });
    mapRef.current.setView({
      lat: mapCityCoords.latitude,
      lng: mapCityCoords.longitude
    }, mapCityCoords.zoom);

    Leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    filteredOffers.forEach((offer) => {
      const offerCoords = {
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      };

      Leaflet
        .marker(offerCoords, {icon})
        .addTo(mapRef.current);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [city]);

  useEffect(() => {
    const markers = [];

    offers.forEach((offer) => {
      const customIcon = Leaflet.icon({
        iconUrl: offer.id === activeCardId ? `./img/pin-active.svg` : `./img/pin.svg`,
        iconSize: [30, 30]
      });

      const marker = Leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude
      }, {
        icon: customIcon
      });

      marker.addTo(mapRef.current);
      markers.push(marker);
    });

    return () => {
      markers.forEach((marker) => {
        mapRef.current.removeLayer(marker);
      });
    };

  }, [offers, activeCardId]);

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

const mapStateToProps = (state) => ({
  city: state.city,
});

export {Map};
export default connect(mapStateToProps, null)(Map);
