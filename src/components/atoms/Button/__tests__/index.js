// Test Button Component
// --------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../index';

test('Input is match the snapshot', () => {
  const component = renderer.create(
    Button
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
