import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import {notEmptyStore} from '../../test/test-store';
import FavoritesItem from './favorites-item';

test(`FavoritesItem component render correctly`, () => {
  const {container} = render(
      <Test>
        <FavoritesItem offers={notEmptyStore.DATA.favoriteOffers} city={notEmptyStore.PAGE.location}/>
      </Test>
  );
  expect(container).toMatchSnapshot();
});
