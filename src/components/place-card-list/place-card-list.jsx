import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import {offerType} from '../../types';

const PlaceCardList = (props) => {
  const [activeOffer, setActiveOffer] = useState({id: null});
  const {offers} = props;

  return (
    <React.Fragment>
      {offers.map((offer, _) => <PlaceCard key={`${offer.id}`}
        offer={offer}
        isActive={activeOffer.id === offer.id}
        onOfferMouseEnter={() => {
          setActiveOffer(offer.id);
        }}
      />)}
    </React.Fragment>
  );
};

PlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(offerType),
};

export default PlaceCardList;
