import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import Sort from './sort';

test(`Sort component render correctly`, () => {
  const {container} = render(
      <Test>
        <Sort />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
