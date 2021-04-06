import React from 'react';
import {render, screen} from '@testing-library/react';
import {Test} from '../../components/test/test-mock';
import NotFoundPage from './not-found-page';

test(`NotFoundPage component render correctly`, () => {
  render(
      <Test>
        <NotFoundPage />
      </Test>
  );
  expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
});
