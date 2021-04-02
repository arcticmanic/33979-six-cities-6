import React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '../../types';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';
import Header from '../header/header';
import {connect} from 'react-redux';

const FavoritesPage = ({offers}) => {
  const favoritesOffers = offers.filter((offer) => (offer.is_favorite));

  return (
    <React.Fragment>
      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            {favoritesOffers.length === 0 ? <FavoritesEmpty /> : <FavoritesList favoritesOffers={favoritesOffers}/>}
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(offerType),
};

const mapStateToProps = ({offers}) => ({
  offers
});

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
