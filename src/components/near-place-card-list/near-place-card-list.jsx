import React, {useEffect} from 'react';
import NearPlaceCard from "../near-place-card/near-place-card";
import PropTypes from 'prop-types';
import Spinner from '../loading/loading';
import {connect} from 'react-redux';
import {fetchNearOffers} from "../../store/api-actions";
import {offerType} from '../../types';

const NearPlaceCardList = ({
  offers,
  cardId,
  onCursor,
  isNearOffersLoaded,
  onLoadNearPlaces,
}) => {
  useEffect(() => {
    if (!isNearOffersLoaded) {
      onLoadNearPlaces(cardId);
    }
  }, [isNearOffersLoaded]);

  if (!isNearOffersLoaded) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      {offers.map((offer, id) => (
        <NearPlaceCard
          offer={offer}
          key={`${id}-nearOffer`}
          onCursor={onCursor}
        />
      ))}
    </React.Fragment>
  );
};

NearPlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(offerType),
  onCursor: PropTypes.func.isRequired,
  isNearOffersLoaded: PropTypes.bool.isRequired,
  onLoadNearPlaces: PropTypes.func.isRequired,
  cardId: PropTypes.number.isRequired,
};

const mapStateToProps = ({isNearOffersLoaded, nearOffers}) => ({
  isNearOffersLoaded,
  offers: nearOffers,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadNearPlaces(id) {
    dispatch(fetchNearOffers(id));
  },
});

export {NearPlaceCardList};
export default connect(mapStateToProps, mapDispatchToProps)(NearPlaceCardList);
