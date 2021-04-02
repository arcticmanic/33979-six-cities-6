import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

const SortItem = ({sortType, handleSortChange}) => {
  const {value, label} = sortType;

  return (
    <li
      className="places__option places__option--active"
      tabIndex="0"
      onClick={handleSortChange}
      data-value={value}
    >
      {label}
    </li>
  );
};

SortItem.propTypes = {
  sortType: PropTypes.object.isRequired,
  handleSortChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleSortChange(evt) {
    const sortType = evt.target.dataset.value;
    dispatch(ActionCreator.sortOffers(sortType));
    dispatch(ActionCreator.setSort(sortType));
  },
});

export {SortItem};
export default connect(null, mapDispatchToProps)(SortItem);
