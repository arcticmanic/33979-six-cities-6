import React, {useCallback, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {sendComment} from '../../store/api-actions';
import FormRating from '../form-rating/form-rating';
import FormTextarea from '../form-textarea/form-textarea';

const FormAddReview = ({id}) => {
  const commentForm = useRef();
  const [comment, setComment] = useState({
    rating: null,
    commentText: ``
  });

  const handleRatingChange = useCallback((evt) => {
    const value = parseFloat(evt.target.value);
    setComment((prevState) => ({
      ...prevState,
      rating: value,
    }));
  }, [comment.rating]);

  const handleCommentChange = useCallback((evt) => {
    const value = evt.target.value;
    setComment((prevState) => ({
      ...prevState,
      commentText: value,
    }));
  }, [comment.commentText]);

  const dispatch = useDispatch();

  const handleCommentSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendComment(id, comment));
    setComment((prevState) => ({
      ...prevState,
      commentText: ``,
      rating: null
    }));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleCommentSubmit} ref={commentForm}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <FormRating rating={comment.rating} handleRatingChange={handleRatingChange}/>
      <FormTextarea value={comment.commentText} handleCommentChange={handleCommentChange}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>
  );
};

FormAddReview.propTypes = {
  id: PropTypes.number.isRequired,
};

export default FormAddReview;
