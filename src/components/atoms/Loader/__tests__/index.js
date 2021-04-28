// Test Loader Component
// --------------------------------------------------------

import React from 'react';
import Loader from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Loader,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
