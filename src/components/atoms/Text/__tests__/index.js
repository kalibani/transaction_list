// Test Text Component
// --------------------------------------------------------

import React from 'react';
import Text from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Text,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
