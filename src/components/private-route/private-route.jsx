import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AuthorizationStatus, RoutePaths} from '../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../loading/loading';

const PrivateRoute = ({authorizationStatus, isOffersLoaded, component: Component, ...rest}) => {
  if (!isOffersLoaded) {
    return (
      <Route>
        <Spinner />;
      </Route>
    );
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? <Component {...props} />
            : <Redirect to={RoutePaths.LOGIN_PAGE} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = () => ({
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired
});

const mapStateToProps = ({authorizationStatus, isOffersLoaded}) => ({
  authorizationStatus,
  isOffersLoaded
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
