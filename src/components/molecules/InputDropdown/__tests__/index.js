// Test InputDropdown Component
// --------------------------------------------------------

import React from 'react';
import InputDropdown from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
InputDropdown,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
