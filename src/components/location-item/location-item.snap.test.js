import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../components/test/test-mock';
import LocationItem from './location-item';

test(`Location Item component render correctly`, () => {
  const {container} = render(
      <Test>
        <LocationItem onLocationClick={jest.fn()} city={`Amsterdam`} />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
