import React from 'react';
import {render, screen} from '@testing-library/react';
import {Test} from '../../components/test/test-mock';
import NearPlaceCard from './near-place-card';
import {notEmptyStore} from '../../test/test-store';

test(`NearPlaceCard component render correctly`, () => {
  render(
      <Test>
        <NearPlaceCard offer={notEmptyStore.CURRENT_OFFER.currentOffer}/>
      </Test>
  );
  expect(screen.getByText(/In bookmarks/i)).toBeInTheDocument();
});
