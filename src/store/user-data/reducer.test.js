import {AuthorizationStatus} from '../../const';
import {ActionType} from './actions';
import userData from './reducer';

describe(`User data reducer should work correctly`, () => {
  it(`Reducer should change authorization status correctly`, () => {
    const initialState = {
      authorizationStatus: null
    };

    const authorizationStatuseAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    };

    const expectedState = {
      authorizationStatus: AuthorizationStatus.AUTH
    };

    expect(userData(initialState, authorizationStatuseAction)).toEqual(expectedState);
  });

  it(`Reducer should set user avatar correctly`, () => {
    const initialState = {
      userAvatar: ``
    };
    const setUserAvatarAction = {
      type: ActionType.SET_USER_AVATAR,
      payload: `https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg`
    };
    const expectedState = {
      userAvatar: `https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg`
    };

    expect(userData(initialState, setUserAvatarAction)).toEqual(expectedState);
  });

  it(`Reducer should set user name correctly`, () => {
    const initialState = {
      login: ``
    };
    const setUserNameAction = {
      type: ActionType.CHANGE_USERNAME,
      payload: `Elon`
    };
    const expectedState = {
      login: `Elon`
    };

    expect(userData(initialState, setUserNameAction)).toEqual(expectedState);
  });

  it(`Reducer should set user info correctly`, () => {
    const initialState = {
      login: ``,
      userAvatar: ``
    };
    const setUserInfoAction = {
      type: ActionType.SET_USER_INFO,
      payload: {
        userName: `Elon`,
        userAvatar: `https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg`
      }
    };
    const expectedState = {
      login: `Elon`,
      userAvatar: `https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg`
    };

    expect(userData(initialState, setUserInfoAction)).toEqual(expectedState);
  });
});
