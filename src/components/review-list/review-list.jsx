import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';
import {reviewType} from '../../types';
import {connect} from 'react-redux';
import Spinner from '../loading/loading';
import {fetchCommentsList} from '../../store/api-actions.js';

const ReviewList = ({comments, isCommentsLoaded, onLoad, id}) => {
  useEffect(() => {
    onLoad(id);
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

ReviewList.propTypes = {
  comments: PropTypes.arrayOf(reviewType),
  isCommentsLoaded: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

const mapStateToProps = ({isCommentsLoaded, comments}) => ({
  isCommentsLoaded,
  comments
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchCommentsList(id));
  }
});

export {ReviewList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
