import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../components/test/test-mock';
import FormAddReview from './form-add-review';

test(`CommentForm component render correctly`, () => {
  const {container} = render(
      <Test>
        <FormAddReview id={1}/>
      </Test>
  );
  expect(container).toMatchSnapshot();
});
