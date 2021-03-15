import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {offerType, cityType} from '../../types';
import {connect} from 'react-redux';
import PlaceCardList from '../place-card-list/place-card-list';
import LocationList from '../location-list/location-list';
import Map from '../map/map';

const MainPage = (props) => {
  const {placesCount, offers, cities, city} = props;
  const MAP_SIZE = 960;

  const offersPerCityCount = offers.filter((offer) => offer.city.name === city).length;
  const countString = offersPerCityCount === 1 ? `place` : `places`;

  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link header__logo-link--active" to="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationList locations={cities} />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${offersPerCityCount} ${countString} to stay in ${city}`}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  <PlaceCardList placesCount={placesCount} offers={offers} city={city} />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} height={MAP_SIZE} />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerType),
  cities: PropTypes.arrayOf(cityType),
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

export {MainPage};
export default connect(mapStateToProps, null)(MainPage);
