import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types';
import {connect} from 'react-redux';
import PlaceCardList from '../place-card-list/place-card-list';
import Sort from '../sort/sort';
import Map from '../map/map';

const Places = (props) => {
  const {city, offers} = props;
  const [activeCardId, setActiveCardId] = useState(null);

  const onCardMouseOver = (offer) => {
    setActiveCardId(offer.id);
  };

  const MAP_SIZE = 960;
  const offersPerCity = offers.filter((offer) => offer.city.name === city);
  const offersPerCityCount = offersPerCity.length;
  const countString = offersPerCityCount === 1 ? `place` : `places`;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{`${offersPerCityCount} ${countString} to stay in ${city}`}</b>
        <Sort />
        <div className="cities__places-list places__list tabs__content">
          <PlaceCardList offers={offersPerCity} city={city} onCardMouseOver={onCardMouseOver} />
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map offers={offersPerCity} height={MAP_SIZE} activeCardId={activeCardId} />
        </section>
      </div>
    </div>
  );
};

Places.propTypes = {
  offers: PropTypes.arrayOf(offerType),
  city: PropTypes.string.isRequired,
};

const mapStateToProps = ({offers, city}) => ({
  offers,
  city,
});


export {Places};
export default connect(mapStateToProps)(Places);
