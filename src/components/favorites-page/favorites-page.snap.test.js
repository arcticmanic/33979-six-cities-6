import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../components/test/test-mock';
import FavoritesPage from './favorites-page';

test(`Favorite Page component render correctly`, () => {
  const {container} = render(
      <Test>
        <FavoritesPage />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
