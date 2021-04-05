import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import FavoritesPlace from './favorites-place';
import {notEmptyStore} from '../../test/test-store';

test(`FavoritesPlace component render correctly`, () => {
  const {container} = render(
      <Test>
        <FavoritesPlace offer={notEmptyStore.CURRENT_OFFER.currentOffer}/>
      </Test>
  );
  expect(container).toMatchSnapshot();
});
