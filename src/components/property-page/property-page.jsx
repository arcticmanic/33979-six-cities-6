import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import NotFoundPage from '../not-found-page/not-found-page';
import {clearCurrentOffer} from '../../store/action';
import {fetchCurrentOffer, sendFavoriteStatus} from '../../store/api-actions';
import FormAddReview from '../form-add-review/form-add-review';
import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import NearPlaceCardList from '../near-place-card-list/near-place-card-list';
import UserProperty from '../user/user-property';
import Header from '../header/header';
import Spinner from '../loading/loading';
import PrivateRoute from '../private-route/private-route';
import {useDispatch, useSelector} from 'react-redux';
import {MapSize} from '../../const';
import browserHistory from '../../browser-history';
import {AuthorizationStatus, RoutePath} from '../../const';

const PropertyPage = ({propertyId}) => {
  const {currentOffer: offer, isOfferLoaded, nearOffers} = useSelector((state) => state.CURRENT_OFFER);
  const {authorizationStatus} = useSelector((state) => state.USER);
  const {isFavoriteStatusChanged} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentOffer(propertyId));

    return () => {
      dispatch(clearCurrentOffer());
    };
  }, [propertyId, isFavoriteStatusChanged]);

  if (!isOfferLoaded) {
    return <Spinner />;
  }

  if (!offer) {
    return <NotFoundPage />;
  }

  const {
    id,
    bedrooms,
    description,
    goods,
    host: {
      avatar_url: avatarUrl,
      id: idHost,
      is_pro: isPro,
      name
    },
    images,
    is_premium: isPremium,
    is_favorite: isFavorite,
    max_adults: maxAdults,
    price,
    rating,
    title,
    type
  } = offer;

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      browserHistory.push(RoutePath.LOGIN_PAGE);
    } else {
      const isFavoriteCard = Number(!isFavorite);

      dispatch(sendFavoriteStatus(id, isFavoriteCard));
    }
  };

  const propertyImages = images.slice(0, 6);

  const nearPlacesMapOffers = nearOffers.slice();
  nearPlacesMapOffers.push(offer);

  return (
    <div className="page">
      <Header isMainPage={false}/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {propertyImages.map((image, imageId) => (
                <div key={imageId} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`} type="button" onClick={handleFavoriteClick} disabled={!isFavoriteStatusChanged}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, goodId) => (
                    <li key={goodId} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <UserProperty
                  key={idHost}
                  width={74}
                  height={74}
                  avatarUrl={avatarUrl}
                  name={name}
                  isPro={isPro}
                />
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList id={id} />
                <PrivateRoute component={() => <FormAddReview id={id} />} noAuth={() => ``}/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={nearPlacesMapOffers} height={MapSize.PROPERTY} activeCardId={id} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <NearPlaceCardList offerId={id} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

PropertyPage.propTypes = {
  propertyId: PropTypes.string.isRequired,
};

export default PropertyPage;
