import React, {useEffect} from 'react';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';
import Header from '../header/header';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFavoriteOffers} from '../../store/offers-data/api-actions';
import Spinner from '../loading/loading';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const {favoriteOffers} = useSelector((state) => state.DATA);
  const {offers} = useSelector((state) => state.DATA);

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [offers]);

  if (!favoriteOffers) {
    return <Spinner />;
  }

  const favoritesOffers = favoriteOffers.filter((offer) => (offer.is_favorite));

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
