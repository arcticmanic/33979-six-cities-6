import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {offerType} from '../../types';

const PlaceCard = (props) => {
  const {offer, onOfferMouseEnter} = props;
  const {
    id,
    price,
    title,
    is_premium: isPremium,
    preview_image: previewImage,
    type
  } = offer;

  return (
    <React.Fragment>
      <article className="cities__place-card place-card"
        onMouseEnter={onOfferMouseEnter}
      >
        {isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <Link to={{pathname: `/offer/${id}`}}>
            <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `80%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={{pathname: `/offer/${id}`}}>{title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </React.Fragment>
  );
};

PlaceCard.propTypes = {
  offer: offerType,
  onOfferMouseEnter: PropTypes.func.isRequired,
  isNearby: PropTypes.bool.isRequired,
};

export default PlaceCard;
