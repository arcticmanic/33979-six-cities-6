import React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types';
import {connect} from 'react-redux';
import LocationList from '../location-list/location-list';
import Header from '../header/header';
import Places from '../places/places';
import NoPlaces from '../no-places/no-places';
import Spinner from '../loading/loading';

const MainPage = (props) => {
  const {offers, city, isOffersLoaded} = props;
  const offersPerCity = offers.filter((offer) => offer.city.name === city);

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
          {offersPerCity.length < 1 ?
            <NoPlaces /> :
            <Places />
          }
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offerType),
  city: PropTypes.string.isRequired,
  isOffersLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({offers, city, isOffersLoaded}) => ({
  offers,
  city,
  isOffersLoaded
});

export {MainPage};
export default connect(mapStateToProps, null)(MainPage);
