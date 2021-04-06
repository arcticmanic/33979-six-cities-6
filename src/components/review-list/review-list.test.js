import React from 'react';
import {render, screen} from '@testing-library/react';
import {Test} from '../../components/test/test-mock';
import ReviewList from './review-list';

test(`Reviews component render correctly`, () => {
  render(
      <Test>
        <ReviewList />
      </Test>
  );
  expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
});
