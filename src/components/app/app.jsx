import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {placesCount} = props;

  return <React.Fragment>
    <MainPage placesCount={placesCount} />
  </React.Fragment>;
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
