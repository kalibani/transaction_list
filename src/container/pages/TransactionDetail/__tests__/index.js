// Test TransactionDetail Component
// --------------------------------------------------------

import React from 'react';
import TransactionDetail from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
TransactionDetail,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
