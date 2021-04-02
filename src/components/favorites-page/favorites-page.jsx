import React from 'react';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';
import Header from '../header/header';
import {useSelector} from 'react-redux';

const FavoritesPage = () => {
  const {offers} = useSelector((state) => state.DATA);
  const favoritesOffers = offers.filter((offer) => (offer.is_favorite));

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoritesOffers.length === 0 ? <FavoritesEmpty /> : <FavoritesList favoritesOffers={favoritesOffers}/>}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
