import React from 'react';
import NearPlaceCard from '../near-place-card/near-place-card';
import Spinner from '../loading/loading';
import {useSelector} from 'react-redux';

const NearPlaceCardList = () => {
  const {nearOffers: offers, isNearOffersLoaded} = useSelector((state) => state.CURRENT_OFFER);

  if (!isNearOffersLoaded) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {offers.map((offer) => <NearPlaceCard offer={offer} key={`nearOffer-${offer.id}`} />)}
      </div>
    </React.Fragment>
  );
};

export default NearPlaceCardList;
