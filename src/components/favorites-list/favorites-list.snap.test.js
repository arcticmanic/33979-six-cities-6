import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import {notEmptyStore} from '../../test/test-store';
import FavoritesList from './favorites-list';

test(`FavoritesList component render correctly`, () => {
  const {container} = render(
      <Test>
        <FavoritesList favoritesOffers={notEmptyStore.DATA.favoriteOffers} />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
