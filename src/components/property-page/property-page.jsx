import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {reviewType} from '../../types';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {offerType} from '../../types';
import FormAddReview from '../form-add-review/form-add-review';
import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import PlaceCardList from '../place-card-list/place-card-list';
import UserProperty from '../user/user-property';
import Header from '../header/header';
import Spinner from '../loading/loading';
import reviews from '../../mocks/reviews';

const PropertyPage = (props) => {
  const {onReview, offers, isOffersLoaded} = props;
  const [activeCardId, setActiveCardId] = useState(null);
  const MAP_SIZE = 579;
  const {id} = useParams();

  if (!isOffersLoaded) {
    return <Spinner />;
  }

  const currentOffer = offers.find((offer) => offer.id === +id);

  const {
    bedrooms,
    description,
    goods,
    host,
    images,
    is_premium: isPremium,
    max_adults: maxAdults,
    price,
    rating,
    title,
    type
  } = currentOffer;

  const propertyImages = images.slice(0, 6);

  const {
    avatar_url: avatarUrl,
    id: idHost,
    is_pro: isPro,
    name
  } = host;

  const onCardMouseOver = (offer) => {
    setActiveCardId(offer.id);
  };

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
                <button className="property__bookmark-button button" type="button">
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={reviews} />
                <FormAddReview onReview={onReview} />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offers} height={MAP_SIZE} activeCardId={activeCardId} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceCardList offers={offers} city={`Amsterdam`} onCardMouseOver={onCardMouseOver} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

PropertyPage.propTypes = {
  reviews: PropTypes.arrayOf(reviewType),
  onReview: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(offerType),
  isOffersLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({offers, isOffersLoaded}) => ({
  offers,
  isOffersLoaded
});

export {PropertyPage};
export default connect(mapStateToProps, null)(PropertyPage);
