import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {sortType, defaultSortType} from '../../const';

const Sort = ({onSortTypeChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortTypeState, setSortType] = useState(defaultSortType);

  const handleFormClick = (openStatus) => {
    setIsOpen(!openStatus);
  };

  const handleSortType = (type) => {
    setSortType(type);
  };

  return (
    <React.Fragment>
      <form
        className="places__sorting"
        action="#"
        method="get"
        onClick={(evt) => {
          evt.preventDefault();
          handleFormClick(isOpen);
        }}
      >
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0">
          {sortType[sortTypeState].label}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isOpen && `places__options--opened`}`}>
          {Object.keys(sortType).map((type, index)=> (
            <li
              key={`type-${index}`}
              className={`places__option ${sortTypeState === type ? `places__option--active` : ``} `}
              tabIndex="0"
              onClick={(evt) => {
                evt.preventDefault();
                onSortTypeChange(type);
                handleSortType(type);
              }}
            >
              {sortType[type].label}
            </li>
          ))}
        </ul>
      </form>
    </React.Fragment>
  );
};

Sort.propTypes = {
  onSortTypeChange: PropTypes.func.isRequired
};

export default Sort;
