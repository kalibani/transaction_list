// Test Card Component
// --------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../index';

test('Input is match the snapshot', () => {
  const component = renderer.create(
    Card
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
