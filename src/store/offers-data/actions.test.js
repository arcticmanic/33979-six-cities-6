import {
  getOffers,
  changeFavoriteStatus,
  changeFetchStatus,
  ActionType
} from './actions';

describe(`Acton creators work correctly`, () => {
  it(`Action creator for add offers work correctly`, () => {
    const offers = [`foo`, `bar`];
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(getOffers(offers)).toEqual(expectedAction);
  });

  it(`Action creater for change favorite status work correctly`, () => {
    const offer = {
      foo: `foo`,
      bar: `bar`
    };
    const expectedAction = {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: offer
    };

    expect(changeFavoriteStatus(offer)).toEqual(expectedAction);
  });

  it(`Action creater for change fetch status work correctly`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
    };

    expect(changeFetchStatus()).toEqual(expectedAction);
  });
});
