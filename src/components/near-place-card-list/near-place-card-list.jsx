import React from 'react';
import NearPlaceCard from "../near-place-card/near-place-card";
import PropTypes from 'prop-types';
import Spinner from '../loading/loading';
import {useSelector} from 'react-redux';

const NearPlaceCardList = () => {
  const {nearOffers: offers, isNearOffersLoaded} = useSelector((state) => state.CURRENT_OFFER);

  if (!isNearOffersLoaded) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      {offers.map((offer, id) => <NearPlaceCard offer={offer} key={`${id}-nearOffer`} />)}
    </React.Fragment>
  );
};

NearPlaceCardList.propTypes = {
  offerId: PropTypes.number.isRequired,
};

export default NearPlaceCardList;
