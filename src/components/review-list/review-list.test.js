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
  expect(screen.getByText(/The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you./i)).toBeInTheDocument();
});
