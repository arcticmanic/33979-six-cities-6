import React from 'react';
import {render} from '@testing-library/react';
import Spinner from './loading';

test(`Should render Spinner component correctly`, () => {
  const {container} = render(<Spinner />);
  expect(container).toMatchSnapshot();
});
