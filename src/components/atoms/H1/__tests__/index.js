// Test H1 Component
// --------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';
import H1 from '../../index';

test('Input is match the snapshot', () => {
  const component = renderer.create(
    H1
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
