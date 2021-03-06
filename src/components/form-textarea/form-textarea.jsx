import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {CommentSettings} from '../../const';

const FormTextarea = ({value, handleCommentChange}) => {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review" name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={handleCommentChange}
      value={value}
      minLength={CommentSettings.MIN_SIZE}
      maxLength={CommentSettings.MAX_SIZE}
      required></textarea>
  );
};

FormTextarea.propTypes = {
  value: PropTypes.string.isRequired,
  handleCommentChange: PropTypes.func.isRequired
};

export default memo(FormTextarea);
