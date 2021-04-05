import React from 'react';
import LocationList from '../location-list/location-list';
import {useSelector} from 'react-redux';
import Header from '../header/header';
import PlaceCardList from '../place-card-list/place-card-list';
import Spinner from '../loading/loading';

const MainPage = () => {
  const {isOffersLoaded} = useSelector((state) => state.DATA);

  if (!isOffersLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header isMainPage={true}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>
        <div className="cities">
          <PlaceCardList />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
