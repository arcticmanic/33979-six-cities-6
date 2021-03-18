import React from 'react';
import dayjs from 'dayjs';
import {reviewType} from '../../types';
import UserReview from '../user/user-review';

const ReviewItem = (props) => {
  const {review} = props;

  const {
    comment,
    date,
    rating,
    user
  } = review;

  const {
    avatar_url: avatarUrl,
    id,
    is_pro: isPro,
    name,
  } = user;

  return (
    <React.Fragment>
      <li className="reviews__item">
        <UserReview key={id} avatarUrl={avatarUrl} name={name} isPro={isPro} />
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${rating * 20}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {comment}
          </p>
          <time className="reviews__time" dateTime={dayjs(date).format(`DD-MM-YYYY`)}> {dayjs(date).format(`MMMM YYYY`)}</time>
        </div>
      </li>
    </React.Fragment>
  );
};

ReviewItem.propTypes = {
  review: reviewType,
};

export default ReviewItem;
