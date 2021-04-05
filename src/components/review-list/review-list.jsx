import React from 'react';
import ReviewItem from '../review-item/review-item';
import {useSelector} from 'react-redux';
import {getCurrentCityComments} from '../../common/utils';


const ReviewList = () => {
  const {comments} = useSelector((state) => state.CURRENT_OFFER);
  const currentComments = getCurrentCityComments(comments);

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{currentComments.length}</span></h2>
      <ul className="reviews__list">
        {currentComments.map((review) => (
          <ReviewItem key={review.id}
            review={review}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ReviewList;
