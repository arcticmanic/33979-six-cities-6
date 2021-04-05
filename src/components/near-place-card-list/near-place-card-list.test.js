import React from 'react';
import {render, screen} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import NearPlaceCardList from './near-place-card-list';

test(`NearPlacesList component render correctly`, () => {
  render(
      <Test>
        <NearPlaceCardList />
      </Test>
  );
  expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
});
