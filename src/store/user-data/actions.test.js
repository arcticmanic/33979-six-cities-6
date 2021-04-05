import {AuthorizationStatus} from '../../const';
import {
  requireAuthorization,
  setUserName,
  setUserInfo,
  setUserAvatar,
  redirect,
  ActionType
} from './actions';

describe(`User data action creators work correctly`, () => {
  it(`Action creater for require authorisation work correctly`, () => {
    const requiredStatus = AuthorizationStatus.AUTH;
    const expectedAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: requiredStatus
    };

    expect((requireAuthorization(requiredStatus))).toEqual(expectedAction);
  });

  it(`Action creater for set user name work correctly`, () => {
    const userName = `Elon`;
    const expectedAction = {
      type: ActionType.CHANGE_USERNAME,
      payload: userName
    };

    expect(setUserName(userName)).toEqual(expectedAction);
  });

  it(`Action creater for set user info work corrctly`, () => {
    const userName = `Elon`;
    const userAvatar = `https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg`;
    const expectedAction = {
      type: ActionType.SET_USER_INFO,
      payload: {
        userName,
        userAvatar
      }
    };

    expect(setUserInfo(userName, userAvatar)).toEqual(expectedAction);
  });

  it(`Action creater for set user avatar work correctly`, () => {
    const userAvatar = `https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg`;
    const expectedAction = {
      type: ActionType.SET_USER_AVATAR,
      payload: userAvatar
    };

    expect(setUserAvatar(userAvatar)).toEqual(expectedAction);
  });

  it(`Action creater for redirect work correctly`, () => {
    const url = `/login`;
    const expectedAction = {
      type: ActionType.REDIRECT,
      payload: url
    };

    expect(redirect(url)).toEqual(expectedAction);
  });
});
