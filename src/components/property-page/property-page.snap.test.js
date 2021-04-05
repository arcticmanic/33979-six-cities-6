import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import PropertyPage from './property-page';

test(`PropertyPage component render correctly`, () => {
  const {container} = render(
      <Test>
        <PropertyPage propertyId={`1`} />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
