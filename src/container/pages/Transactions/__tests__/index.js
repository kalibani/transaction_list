// Test Login Component
// --------------------------------------------------------

import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../index';

test('Input is match the snapshot', () => {
  const component = renderer.create(
    Login
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
