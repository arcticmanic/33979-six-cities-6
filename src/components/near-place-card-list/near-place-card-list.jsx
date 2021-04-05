import React, {useEffect} from 'react';
import NearPlaceCard from "../near-place-card/near-place-card";
import PropTypes from 'prop-types';
import Spinner from '../loading/loading';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNearOffers} from "../../store/api-actions";

const NearPlaceCardList = ({offerId}) => {
  const dispatch = useDispatch();
  const {nearOffers: offers, isNearOffersLoaded} = useSelector((state) => state.CURRENT_OFFER);

  useEffect(() => {
    dispatch(fetchNearOffers(offerId));
  }, [offerId]);

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
