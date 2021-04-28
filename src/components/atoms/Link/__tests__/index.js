// Test Link Component
// --------------------------------------------------------

import React from 'react';
import Link from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Link,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
