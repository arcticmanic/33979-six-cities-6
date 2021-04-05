import React from 'react';
import {render, screen} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import MainPage from './main-page';

test(`Main screen component render correctly`, () => {
  render(
      <Test>
        <MainPage />
      </Test>
  );
  expect(screen.getByText(/Fake login/i)).toBeInTheDocument();
  expect(screen.getByText(/Hamburg/i)).toBeInTheDocument();
});
