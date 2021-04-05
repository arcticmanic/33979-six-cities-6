import React from 'react';
import {render, screen} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import User from './user';

test(`User component render correctly`, () => {
  render(
      <Test>
        <User avatarUrl={`fake`} name={`Elon`} isPro={false} />
      </Test>
  );
  expect(screen.getByText(/Elon/i)).toBeInTheDocument();
});
