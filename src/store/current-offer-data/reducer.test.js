import {ActionType, clearCurrentOffer} from './actions';
import currentOfferData from './reducer';

describe(`Current offer data reducers work correctly`, () => {
  it(`Reducer should return default`, () => {
    const initialState = {
      currentOffer: {},
      isOfferLoaded: true,
      nearOffers: [`foo`, `bar`],
      isNearOffersLoaded: false,
      comments: [`foo`, `bar`],
      isCommentsLoaded: true,
    };

    const expectedState = {
      currentOffer: null,
      isOfferLoaded: false,
      nearOffers: [],
      isNearOffersLoaded: false,
      comments: [],
      isCommentsLoaded: false,
    };

    expect(currentOfferData(initialState, clearCurrentOffer())).toEqual(expectedState);
  });

  it(`Reducer should cahange near places list when change favorite status`, () => {
    const initialState = {
      nearOffers: [
        {
          id: 1,
          name: `foo`
        },
        {
          id: 2,
          name: `bar`
        }
      ]
    };

    const nearPlaceChangeAction = {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: {
        id: 2,
        name: `foo`
      }
    };

    const expectedState = {
      nearOffers: [
        {
          id: 1,
          name: `foo`
        },
        {
          id: 2,
          name: `foo`
        }
      ]
    };

    expect(currentOfferData(initialState, nearPlaceChangeAction)).toEqual(expectedState);
  });

  it(`Reducer should get comments and change isCommentsLoaded status`, () => {
    const initialState = {
      comments: [`foo`, `foo`],
      isCommentsLoaded: false
    };

    const getCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: [`bar`, `bar`]
    };

    const expectedState = {
      comments: [`bar`, `bar`],
      isCommentsLoaded: true
    };

    expect(currentOfferData(initialState, getCommentsAction)).toEqual(expectedState);
  });

  it(`Reducer should get near places and change isNearOffersLoaded status`, () => {
    const initialState = {
      nearOffers: [],
      isNearOffersLoaded: false,
    };

    const expectedState = {
      nearOffers: [`foo`, `bar`],
      isNearOffersLoaded: true
    };

    const getnearOffersAction = {
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: [`foo`, `bar`]
    };

    expect(currentOfferData(initialState, getnearOffersAction)).toEqual(expectedState);
  });

  it(`Reducer should get offer card and change isOfferLoaded status`, () => {
    const initialState = {
      currentOffer: {},
      isOfferLoaded: false
    };

    const expectedState = {
      currentOffer: {foo: `foo`, bar: `bar`},
      isOfferLoaded: true
    };

    const getOfferAction = {
      type: ActionType.LOAD_CURRENT_OFFER,
      payload: {foo: `foo`, bar: `bar`}
    };

    expect(currentOfferData(initialState, getOfferAction)).toEqual(expectedState);
  });
});
