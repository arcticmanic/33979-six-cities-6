import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {offerType} from '../../types';

const NearPlaceCard = ({offer, onCursor}) => {
  const {
    id,
    preview_image: previewImage,
    is_premium: isPremium,
    price,
    title,
    type,
    rating,
  } = offer;

  const ratingInPercents = rating * 10 * 2 + `%`;
  const handleCursorHover = () => onCursor(id);
  const handleCursorOut = () => onCursor(null);
  return (
    <article
      className="near-places__card place-card"
      onMouseEnter={handleCursorHover}
      onMouseLeave={handleCursorOut}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: ratingInPercents,
              }}
            ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link href="#" to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

NearPlaceCard.propTypes = {
  offer: offerType,
  onCursor: PropTypes.func,
};

export default NearPlaceCard;
