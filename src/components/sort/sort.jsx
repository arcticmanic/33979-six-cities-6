import React, {useRef} from "react";
import {SortType} from '../../const';
import {useSelector} from 'react-redux';
import SortItem from "../sort-item/sort-item";

const Sort = () => {
  const {sort: currentSortType} = useSelector((state) => state.PAGE);
  const sortTypesList = Object.values(SortType);

  const sortList = useRef();

  const handleSortListClick = () => {
    const sortTypeElement = sortList.current;
    sortTypeElement.classList.toggle(`places__options--opened`);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleSortListClick}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className="places__options places__options--custom"
        ref={sortList}
      >
        {sortTypesList.map((type, i) => (
          <SortItem sortType={type} key={`${type}-${i}`} />
        ))}
      </ul>
    </form>
  );
};

export default Sort;
