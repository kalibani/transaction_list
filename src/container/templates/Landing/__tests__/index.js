// Test Landing Component
// --------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';
import Landing from '../../index';

test('Input is match the snapshot', () => {
  const component = renderer.create(
    Landing
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
