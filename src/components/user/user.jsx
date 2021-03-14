import React from 'react';
import PropTypes from 'prop-types';

const addIsProClassName = (className, isPro) => isPro ? `${className} ${className}--pro` : className;

const User = (props) => {
  const {avatarUrl, name, isPro, classNameList = null} = props;

  const classNameUser = classNameList ? classNameList.classNameUser : ``;
  const classNameAvatarWrapper = classNameList ? classNameList.classNameAvatarWrapper : ``;
  const classNameAvatar = classNameList ? classNameList.classNameAvatar : ``;
  const classNameUserName = classNameList ? classNameList.classNameUserName : ``;

  return (
    <React.Fragment>
      <div className={`${classNameUser} user`}>
        <div className={`${addIsProClassName(classNameAvatarWrapper, isPro)} user__avatar-wrapper`}>
          <img className={`${classNameAvatar} user__avatar`} src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className={classNameUserName}>
          {name}
        </span>
      </div>
    </React.Fragment>
  );
};

User.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isPro: PropTypes.bool,
  classNameList: PropTypes.arrayOf(PropTypes.string),
};

export default User;
