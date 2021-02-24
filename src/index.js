import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import cities from './mocks/cities';

const Setting = {
  PLACES_COUNT: 5
};

ReactDOM.render(
    <App
      placesCount={Setting.PLACES_COUNT}
      cities={cities}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
