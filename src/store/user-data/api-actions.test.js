import MockAdapter from 'axios-mock-adapter';
import {APIRoutePath, AuthorizationStatus, FetchStatus, RoutePath} from '../../const';
import {createApi} from '../../api/api';
import {ActionType} from './actions';
import {checkAuth, login, logout} from './api-actions';

const api = createApi(() => {});

describe(`Async user data operations work correctly`, () => {
  it(`Should make a correct API call to ./login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoutePath.LOGIN)
      .reply(200, {
        'email': `Elon`,
        'avatar_url': `https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg`,
        'mock': `mock`
      });

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_INFO,
          payload: {
            userName: `Elon`,
            userAvatar: `https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg`
          }
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.CHANGE_FETCH_STATUS,
          payload: FetchStatus.DONE
        });
      });
  });

  it(`Should make a correct API call to ./login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login(`Elon`, `password`);

    apiMock
      .onPost(APIRoutePath.LOGIN)
      .reply(200, {
        'email': `Elon`,
        'avatar_url': `https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg`,
      });

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_INFO,
          payload: {
            userName: `Elon`,
            userAvatar: `https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg`
          }
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT,
          payload: RoutePath.MAIN_PAGE
        });
      });
  });

  it(`Should make a correct API call to ./logout`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onGet(APIRoutePath.LOGOUT)
      .reply(200, []);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_USERNAME,
          payload: ``
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_AVATAR,
          payload: ``
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH
        });
      });
  });
});
