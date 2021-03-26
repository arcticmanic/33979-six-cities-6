import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import {offerType} from '../../types';

const PlaceCardList = (props) => {
  const [activeOffer, setActiveOffer] = useState({id: null});
  const isNearby = false;
  const {offers, city, onCardMouseOver} = props;

  return (
    <React.Fragment>
      {offers
        .filter((offer) => offer.city.name === city)
        .map((offer) => (
          <PlaceCard key={offer.id}
            isNearby={isNearby}
            offer={offer}
            isActive={activeOffer.id === offer.id}
            onOfferMouseEnter={() => {
              setActiveOffer(offer.id);
              onCardMouseOver(offer);
            }}
          />
        ))}
    </React.Fragment>
  );
};

PlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(offerType),
  city: PropTypes.string.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
};

export default PlaceCardList;
