import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AuthorizationStatus, RoutePath} from '../../const';
import {logout} from '../../store/api-actions';

const HeaderNavigation = () => {
  const {authorizationStatus, login, userAvatar} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ul className="header__nav-list">
      {authorizationStatus === AuthorizationStatus.NO_AUTH ?
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" href="#" to={RoutePath.LOGIN_PAGE}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">Sign in</span>
          </Link>
        </li> :
        <>
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" href="#" to={RoutePath.FAVORITES_PAGE}>
              <div className="header__avatar-wrapper user__avatar-wrapper"
                style={{
                  backgroundImage: `url(${userAvatar})`,
                  borderRadius: `50%`
                }}
              >
              </div>
              <span className="header__user-name user__name">{login}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link header__nav-link--profile" style={{
              marginLeft: `10px`
            }} href="#" to="/" onClick={handleLogout}>
              <span className="header__user-name user__name">Logout</span>
            </Link>
          </li>
        </>
      }
    </ul>
  );
};

export default HeaderNavigation;
