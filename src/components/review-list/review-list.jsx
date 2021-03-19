import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';
import {reviewType} from '../../types';

const ReviewList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(reviewType),
};

export default ReviewList;
