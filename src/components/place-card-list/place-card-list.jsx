import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';
import PlaceCard from '../place-card/place-card';
import Sort from '../sort/sort';
import Map from '../map/map';
import NoPlaces from '../no-places/no-places';
import {sortOffersPopular, sortOffersPriceToLow, sortOffersPriceToHight, sortOffersRate} from '../../common/utils';
import {MapSize, SortType} from '../../const';

const PlaceCardList = () => {
  const [activeCardId, setActiveCardId] = useState(null);
  const {location: currentCity} = useSelector((state) => state.PAGE);
  const rootState = useSelector((state) => state);

  const getOffers = (state) => state.DATA.offers;
  const getLocation = (state) => state.PAGE.location;
  const getSortType = (state) => state.PAGE.sort;
  const getCurrentCityOffers = (offersList, location, sort) => {
    const filtredOffers = offersList.filter((offer) => offer.city.name === location);
    switch (sort) {
      case SortType.POPULAR:
        return filtredOffers.sort(sortOffersPopular);
      case SortType.PRICE_HIGH_TO_LOW:
        return filtredOffers.sort(sortOffersPriceToLow);
      case SortType.PRICE_LOW_TO_HIGH:
        return filtredOffers.sort(sortOffersPriceToHight);
      case SortType.TOP_RATED_FIRST:
        return filtredOffers.sort(sortOffersRate);
      default:
        return filtredOffers;
    }
  };

  const currentCityOffers = createSelector(getOffers, getLocation, getSortType, getCurrentCityOffers)(rootState);

  const countString = currentCityOffers === 1 ? `place` : `places`;

  if (currentCityOffers.length === 0) {
    return <NoPlaces />;
  }

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{`${currentCityOffers.length} ${countString} to stay in ${currentCity}`}</b>
        <Sort />
        <div className="cities__places-list places__list tabs__content">
          {currentCityOffers.map((offer) => <PlaceCard offer={offer} onCursorHandle={setActiveCardId} key={offer[`id`]} />) }
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map offers={currentCityOffers} height={MapSize.MAIN} activeCardId={activeCardId} />
        </section>
      </div>
    </div>
  );
};

export default PlaceCardList;
