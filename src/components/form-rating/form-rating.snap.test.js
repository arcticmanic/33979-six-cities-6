import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import FormRating from './form-rating';

test(`FormRating component render correctly`, () => {
  const {container} = render(
      <Test>
        <FormRating rating={3} handleRatingChange={jest.fn()} />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
