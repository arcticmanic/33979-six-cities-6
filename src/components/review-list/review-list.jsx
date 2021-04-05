import React from 'react';
import ReviewItem from '../review-item/review-item';
import {useSelector} from 'react-redux';

const ReviewList = () => {
  const {comments} = useSelector((state) => state.CURRENT_OFFER);

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((review) => (
          <ReviewItem key={review.id}
            review={review}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ReviewList;
