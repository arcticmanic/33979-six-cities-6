import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import PlaceCard from '../place-card/place-card';
import Sort from '../sort/sort';
import Map from '../map/map';
import NoPlaces from '../no-places/no-places';
import {getCurrentCityOffersSelector} from '../../store/offers-data/selectors';
import {MapSize} from '../../const';

const PlaceCardList = () => {
  const [activeCardId, setActiveCardId] = useState(null);
  const {location: currentCity} = useSelector((state) => state.PAGE);
  const currentCityOffers = useSelector((state) => getCurrentCityOffersSelector(state));

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
