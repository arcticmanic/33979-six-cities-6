import React from 'react';
import {AuthorizationStatus} from '../../const';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import Spinner from '../loading/loading';

const PrivateRoute = ({component, noAuth}) => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const {isOffersLoaded} = useSelector((state) => state.DATA);

  if (!isOffersLoaded) {
    return (
      <Spinner />
    );
  }
  return (
    authorizationStatus === AuthorizationStatus.AUTH
      ? component()
      : noAuth()
  );
};

PrivateRoute.propTypes = () => ({
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
});

export default PrivateRoute;
