import React, {useEffect} from 'react';
import ReviewItem from '../review-item/review-item';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../loading/loading';
import {fetchCommentsList} from '../../store/api-actions.js';
import {useParams} from 'react-router';

const ReviewList = () => {
  const {comments, isCommentsLoaded} = useSelector((state) => state.CURRENT_OFFER);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchCommentsList(id));
  }, [id]);

  if (!isCommentsLoaded) {
    return <Spinner />;
  }

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
