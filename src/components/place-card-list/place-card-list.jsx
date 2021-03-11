import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import {offerType} from '../../types';

const PlaceCardList = (props) => {
  const [activeOffer, setActiveOffer] = useState({id: null});
  const isNearby = false;
  const {offers, placesCount} = props;

  return (
    <React.Fragment>
      {offers.slice(0, placesCount).map((offer) => (
        <PlaceCard key={offer.id}
          isNearby={isNearby}
          offer={offer}
          isActive={activeOffer.id === offer.id}
          onOfferMouseEnter={() => setActiveOffer(offer.id)}
        />
      ))}
    </React.Fragment>
  );
};

PlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(offerType),
  placesCount: PropTypes.number.isRequired,
};

export default PlaceCardList;
