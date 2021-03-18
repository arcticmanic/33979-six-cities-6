import React from 'react';
import User from './user';

const UserReview = (props) => {
  const classNameList = {
    classNameUser: `reviews__user`,
    classNameAvatarWrapper: `reviews__avatar-wrapper`,
    classNameAvatar: `reviews__avatar`,
    classNameUserName: `reviews__user-name`,
  };

  return (
    <User
      classNameList={classNameList}
      {...props}
    />
  );
};

export default UserReview;
