import React from 'react';
import PropTypes from 'prop-types';

const addIsProClassName = (className, isPro) => isPro ? `${className} ${className}--pro` : className;

const User = (props) => {
  const {width = 54, height = 54, avatarUrl, name, isPro, classNameList = null} = props;

  const {
    classNameUser,
    classNameAvatarWrapper,
    classNameAvatar,
    classNameUserName
  } = classNameList || {};

  return (
    <div className={`${classNameUser} user`}>
      <div className={`${addIsProClassName(classNameAvatarWrapper, isPro)} user__avatar-wrapper`}>
        <img className={`${classNameAvatar} user__avatar`} src={avatarUrl} width={width} height={height} alt="Reviews avatar" />
      </div>
      <span className={classNameUserName}>
        {name}
      </span>
    </div>
  );
};

User.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isPro: PropTypes.bool,
  classNameList: PropTypes.objectOf(PropTypes.string)
};

export default User;
