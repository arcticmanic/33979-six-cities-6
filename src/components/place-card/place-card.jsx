import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {offerType} from '../../types';
import {useDispatch, useSelector} from 'react-redux';
import {sendFavoriteStatus} from '../../store/api-actions';
import {changeFetchStatus} from '../../store/action';
import browserHistory from '../../browser-history';
import {AuthorizationStatus, FetchStatus, RoutePath} from '../../const';

const PlaceCard = ({offer, onCursorHandle}) => {
  const {
    id,
    price,
    title,
    is_premium: isPremium,
    preview_image: previewImage,
    type,
    rating,
    is_favorite: isFavorite
  } = offer;

  const ratingInPercents = rating * 20 + `%`;
  const {fetchStatus} = useSelector((state) => state.DATA);
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  const handleCursorHover = () => {
    onCursorHandle(id);
  };

  const handleCursorOut = () => {
    onCursorHandle(null);
  };

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      browserHistory.push(RoutePath.LOGIN_PAGE);
    } else {
      const isFavoriteCard = Number(!isFavorite);

      dispatch(sendFavoriteStatus(id, isFavoriteCard));
      dispatch(changeFetchStatus(FetchStatus.SENDING));
    }
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter={handleCursorHover} onMouseLeave={handleCursorOut}>
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
          <button
            className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : `` } button`}
            onClick={handleFavoriteClick}
            type="button"
            disabled={fetchStatus === FetchStatus.SENDING}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: ratingInPercents
              }}
            ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: `/offer/${id}`}}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: offerType,
  onCursorHandle: PropTypes.func.isRequired,
};

export default PlaceCard;
