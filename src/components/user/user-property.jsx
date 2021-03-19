import React from 'react';
import PropTypes from 'prop-types';
import User from './user';

const UserProperty = (props) => {
  const {width, height} = props;

  const classNameList = {
    classNameUser: `property__host-user`,
    classNameAvatarWrapper: `property__avatar-wrapper`,
    classNameAvatar: `property__avatar`,
    classNameUserName: `property__user-name`,
  };

  return (
    <User
      width={width}
      height={height}
      classNameList={classNameList}
      {...props}
    />
  );
};

UserProperty.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default UserProperty;
